/// <reference path="../references.ts"/>

enum TileType {
    Ground,
    Water,
    Solid,
    Entry
}

class TileData{
    _name : string;
    _type : TileType;
    _turn : number;
    xOffset : number;
    yOffset : number;

    constructor (name : string, type : TileType, xOffset : number, yOffset : number) {
        this._name = name;
        this._type = type;
        this._turn = 0;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
    }
}

var TILE_DATA : collections.Dictionary<string, TileData>;
TILE_DATA = new collections.Dictionary<string, TileData>();

TILE_DATA.setValue('^', new TileData("Rock",            TileType.Solid  ,   0,      0));
TILE_DATA.setValue(',', new TileData("Grass",           TileType.Ground ,   0,     32));
TILE_DATA.setValue('o', new TileData("DarkDgn",         TileType.Ground ,   0,     64));
TILE_DATA.setValue('~', new TileData("Water",           TileType.Water  ,   0,     96));
TILE_DATA.setValue('.', new TileData("Path",            TileType.Ground ,   0,    128));
TILE_DATA.setValue('O', new TileData("LitDgn",          TileType.Ground ,   0,    160));
TILE_DATA.setValue('_', new TileData("PathRock",        TileType.Solid  ,  32,      0));
TILE_DATA.setValue(';', new TileData("PathGrass",       TileType.Ground ,  32,     32));
TILE_DATA.setValue(' ', new TileData("WallDarkDgn",     TileType.Solid  ,  32,     64));
TILE_DATA.setValue(' ', new TileData("WaterGrass",      TileType.Water  ,  32,     96));
TILE_DATA.setValue(' ', new TileData("WaterPath",       TileType.Water  ,  32,    128));
TILE_DATA.setValue(' ', new TileData("WallLitDgn",      TileType.Solid  ,  32,    160));
TILE_DATA.setValue(' ', new TileData("50Grass50Cave",   TileType.Solid  ,   0,    192));
TILE_DATA.setValue(' ', new TileData("10Grass90Cave",   TileType.Solid  ,  32,    192));
TILE_DATA.setValue(' ', new TileData("50White50Cave",   TileType.Solid  ,   0,    224));
TILE_DATA.setValue(' ', new TileData("90White10Cave",   TileType.Solid  ,  32,    224));
TILE_DATA.setValue('=', new TileData("Crop",            TileType.Solid  ,  64,     32));
TILE_DATA.setValue('+', new TileData("Entry",           TileType.Entry  , 192,    160));
TILE_DATA.setValue('#', new TileData("Building",        TileType.Solid  , 192,    160));
TILE_DATA.setValue('!', new TileData("Sign",            TileType.Ground , 160,      0));

var TILE_IMG = new Image();
TILE_IMG.src = "assets/resources/tiles.png";

class Tile implements IDrawable {
    _tile: TileData;
    _coords : Point;

    constructor (tile : TileData, coords: Point) {
        this._tile = tile;
        this._coords = coords;
    }

    Draw(ctx : CanvasRenderingContext2D) {

        ctx.drawImage(TILE_IMG, this._tile.xOffset, this._tile.yOffset, TILE_SIZE, TILE_SIZE, this._coords.X*TILE_SIZE, this._coords.Y*TILE_SIZE, TILE_SIZE, TILE_SIZE);
        //this._el.style["-webkit-transform"] = "translate3d(" + this._coords.X * TILE_SIZE + 'px,' + this._coords.Y * TILE_SIZE + "px,0px) rotate(" + this._tile._turn + "deg)";
    };

    RotateAndCache = function (image, angle) {
        var offscreenCanvas = document.createElement('canvas');
        var offscreenCtx = offscreenCanvas.getContext('2d');

        var size = Math.max(image.width, image.height);
        offscreenCanvas.width = size;
        offscreenCanvas.height = size;

        offscreenCtx.translate(size / 2, size / 2);
        offscreenCtx.rotate(angle + Math.PI / 2);
        offscreenCtx.drawImage(image, -(image.width / 2), -(image.height / 2));

        return offscreenCanvas;
    };

    DetermineRotation(westTile:string, northTile:string) {

        var southWestTile:string;   // tile type which if is of a certain type, no rotation is required

        // check if tile type is one that requires rotation - exits with 0 if not one of the expected types
        switch (this._tile._name) {
            case "PathRock" :
                southWestTile = "Path";
                break;
            case "PathGrass" :
                southWestTile = "Path";
                break;
            case "WaterGrass" :
                southWestTile = "Water";
                break;
            case "WaterPath" :
                southWestTile = "Water";
                break;
            case "WallLitDgn" :
                southWestTile = "Wall";
                break;
            case "WallDarkDgn":
                southWestTile = "Wall";
                break;
            default :
                 return;
        }

        if (westTile === southWestTile) {
            if (northTile === southWestTile) {    // north and west
                this._tile._turn = 90;
            }
            else {                          // north and east
                // do nothing - no rotation required
            }
        }
        else if (northTile === southWestTile) {    // south and west
            this._tile._turn = 180;
        }
        else {                              // south and east
            this._tile._turn = 270;
        }
    }

}
