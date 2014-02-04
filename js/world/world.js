/// <reference path="../references.ts"/>
/**
* Represents the Model of the game. All game content will be part of the world and the View will draw the area of the
* world that the player is in when something has changed in the world.
*/
var World = (function () {
    /**
    * World creation defaults to village _map
    * @param $el - Container element <background> for all tiles
    */
    function World() {
        var _this = this;
        this._currentArea = GameArea.Village;
        this._areas = {};
        this._entities = {};

        this.InitialiseArea(this._currentArea);

        //this.GenerateRandomMap(GameArea.MinesLv1, GameArea.MinesLv2, new Point(40,30));
        window.addEventListener("keyup", function (event) {
            var pos = _this._hero.location.position;
            switch (event.keyCode) {
                case KeyEvent.DOM_VK_I:
                    Game.Graphics.ShowInventory(_this._hero.inventory, (_this._areas[_this._currentArea][pos.x][pos.y]).ground, "Ground");
                    break;
            }
        });
    }
    World.prototype.AddEntity = function (entity) {
        this._entities[entity.location.area] = this._entities[entity.location.area] || {};
        this._entities[entity.location.area][entity.id] = entity;

        if (entity instanceof Player) {
            this._hero = entity;
        }
    };

    World.prototype.RemoveEntity = function (entity) {
        Log(entity.id + ' is slain!');
        delete this._entities[entity.location.area][entity.id];
    };

    World.prototype.Draw = function () {
        Game.Graphics.Clear();
        Game.Graphics.UpdateCenter(this._hero.location.position);

        this._areas[this._currentArea].forEach(function (x) {
            (x).forEach(function (y) {
                Game.Graphics.DrawEntity(y);
            });
        });
        for (var k in this._entities[this._currentArea])
            Game.Graphics.DrawEntity(this._entities[this._currentArea][k]);
    };

    World.prototype.MoveMonsters = function () {
        for (var k in this._entities[this._currentArea]) {
            var entity = this._entities[this._currentArea][k];
            if (entity instanceof Monster) {
                (entity).Move(this._hero.location.position);
            }
        }
    };

    /**
    * Try to move the monster in a direction, return true if moved, false otherwise
    */
    World.prototype.TryMove = function (monsterId, dir) {
        var monsterEntity = this._entities[this._currentArea][monsterId];
        var loc = monsterEntity.location;
        var newLoc = new Point(loc.position.x + dir.x, loc.position.y + dir.y);

        if (newLoc.Equals(this._hero.location.position)) {
            monsterEntity.Attack(this._hero);
            return true;
        }

        for (var k in this._entities[this._currentArea]) {
            var entity = this._entities[this._currentArea][k];
            if (entity.type === EntityType.Actor) {
                if ((entity).location.position.Equals(newLoc)) {
                    return false;
                }
            } else if (entity.type === EntityType.Building) {
                if ((entity).PointInStructure(newLoc) != StructurePart.None) {
                    return false;
                }
            }
        }

        // nothing in the monster's way - move to new location
        monsterEntity.location.position = newLoc;
        return true;
    };

    World.prototype.MoveHero = function (heroId, dir) {
        var heroEntity = this._entities[this._currentArea][heroId];
        var loc = heroEntity.location;
        var newLoc = new Point(loc.position.x + dir.x, loc.position.y + dir.y);
        var collision = false;

        for (var k in this._entities[this._currentArea]) {
            var entity = this._entities[this._currentArea][k];
            if (entity.type === EntityType.Actor) {
                var target = (entity);
                if (entity.location.position.Equals(newLoc)) {
                    collision = true;
                    heroEntity.Attack(target);
                }
            } else if (entity.type === EntityType.Building) {
                var building = (entity);
                var structurePart = building.PointInStructure(newLoc);
                if (structurePart === StructurePart.Wall) {
                    collision = true;
                    Log('Ouch! You walked into a wall belonging to ' + entity.id);
                } else if (structurePart === StructurePart.Entry) {
                    if (building.structureType == StructureType.Link) {
                        var newMapLink = this.MapLink(new WorldCoordinates(this._currentArea, newLoc));
                        newLoc = newMapLink.position;
                        this._entities[this._currentArea][heroEntity.id] = heroEntity;
                        break;
                    } else if (building.structureType == StructureType.Shop) {
                        Game.Graphics.Screen(ScreenType.Shop);
                        Game.Graphics.ShowInventory(heroEntity.inventory, building.inventory.wares, building.id);
                    }
                    Log("You see " + entity.id + ".");
                }
            }
        }

        if (collision === false) {
            heroEntity.location.position = newLoc;
            Log("Hero loc:" + newLoc.x + "," + newLoc.y);
            Game.Graphics.UpdateCenter(newLoc);
        }

        //loop through monsters, move them
        this.MoveMonsters();

        this.Draw();
    };

    /**
    * Populates each area with tiles, done once on construction
    */
    World.prototype.InitialiseArea = function (newArea) {
        var _this = this;
        // maps a GameArea to a 2D array of tiles which represents the area
        var tiles = [];

        for (var y = 0; y < ASCII_MAPS[newArea].length; y++) {
            for (var x = 0; x < ASCII_MAPS[newArea][y].length; x++) {
                if (y === 0) {
                    tiles[x] = new Array();
                }
                tiles[x][y] = new Tile(ASCIITiles[ASCII_MAPS[newArea][y][x]], new WorldCoordinates(newArea, new Point(x, y)));
                if (x > 0 && y > 0) {
                    // Pass in west and north. Note: north = [x][y-1], west = [x-1][y], south = [x][y+1], east = [x+1][y]
                    tiles[x][y].DetermineRotation(tiles[x - 1][y].id, tiles[x][y - 1].id);
                }
            }
        }
        this._areas[newArea] = tiles;

        this._entities[this._currentArea] = this._entities[this._currentArea] || {};

        if (!!AREA_STRUCTURES[newArea])
            AREA_STRUCTURES[newArea].forEach(function (x) {
                return _this._entities[_this._currentArea][x.id] = new Structure(x);
            });
    };

    /**
    * Generates a random dungeon map of tiles for the area that is passed in.
    * Currently done once on construction, but need to change it to generate only when map does not exist & when player uses the stairs
    */
    World.prototype.GenerateRandomMap = function (currentArea, newArea, linkA) {
        // maps a GameArea to a 2D array of tiles which represents the area
        var newMap = new DungeonLevel(newArea);
        ASCII_MAPS[newArea] = newMap.ASCIIMap;

        var linkB = new WorldCoordinates(newArea, new Point(10, 10));
        var link = { LinkA: linkA, LinkB: linkB };
        MAP_TO_MAP.push(link);
        return linkB;
    };

    World.prototype.PrettyPrint = function (type) {
        switch (type) {
            case GameArea.Farm:
                return "Farm";
            case GameArea.Village:
                return "Village";
            case GameArea.MinesLv1:
                return "Mines: Level 1";
            case GameArea.MinesLv2:
                return "Mines: Level 2";
            default:
                return "An unknown spooky area unintended by the developer!";
        }
    };

    /**
    * Called when a player moves to a point in the world, check if that location is a link
    * If yes, then change the map and send the new location of the player (on the new map) back
    */
    World.prototype.MapLink = function (currentLocation) {
        var link = null;

        MAP_TO_MAP.forEach(function (x) {
            if (currentLocation.Equals(x.LinkA)) {
                link = x.LinkB;
            }
            if (currentLocation.Equals(x.LinkB)) {
                link = x.LinkA;
            }
        });

        if (link === null) {
            var newArea = GameArea.MinesLv2;
            if (!ASCII_MAPS[newArea]) {
                link = this.GenerateRandomMap(this._currentArea, newArea, currentLocation);
            }
        }

        // update the map
        this._currentArea = link.area;
        if (!this._areas[this._currentArea])
            this.InitialiseArea(this._currentArea);
        Log('You have arrived at the ' + this.PrettyPrint(this._currentArea));

        return link;
    };

    World.prototype.PickFromGround = function () {
        var pos = this._hero.location.position;
        Game.Graphics.ShowInventory(this._hero.inventory, (this._areas[this._currentArea][pos.x][pos.y]).ground, "Ground");
    };
    return World;
})();
//# sourceMappingURL=world.js.map
