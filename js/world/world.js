var World = (function () {
    function World(map) {
        this._map = map;
        this._tiles = new Array();

        for (var x = 0; x < this._map.length; x++) {
            this._tiles[x] = new Array();
            for (var y = 0; y < this._map[x].length; y++) {
                this._tiles[x][y] = new Tile("#background", TILEDATA[this._map[x][y]]);
            }
        }
    }
    World.prototype.determineRotation = function (x, y, map) {
        var degrees;
        var southWestTile, north, west;

        switch (TILEDATA[map[x][y]]._name) {
            case "PathRock":
                southWestTile = "Path";
                break;
            case "PathGrass":
                southWestTile = "Path";
                break;
            case "WaterGrass":
                southWestTile = "Water";
                break;
            case "WaterPath":
                southWestTile = "Water";
                break;
            case "WallLitDgn":
                southWestTile = "Wall";
                break;
            case "WallDarkDgn":
                southWestTile = "Wall";
                break;
            default:
                return 0;
        }

        if (y > 0) {
            north = TILEDATA[map[x][y - 1]]._name;
        }

        if (x > 0) {
            west = TILEDATA[map[x - 1][y]]._name;
        }

        if (north == southWestTile) {
            if (west == southWestTile) {
                degrees = 90;
            } else {
                degrees = 180;
            }
        } else if (west == southWestTile) {
            degrees = 0;
        } else {
            degrees = 270;
        }

        return degrees;
    };
    return World;
})();
//@ sourceMappingURL=world.js.map