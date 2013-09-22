/// <reference path="../references.ts"/>
var MapType;
(function (MapType) {
    MapType[MapType["VillageMap"] = 0] = "VillageMap";
    MapType[MapType["FarmMap"] = 1] = "FarmMap";
})(MapType || (MapType = {}));

/**
* Links MapTypes via points
*/
var MapLink = (function () {
    function MapLink(map, point) {
        this.MapName = map;
        this.Coord = point;
    }
    return MapLink;
})();

/**
* Dictionary of MapType to ,D array of tiles
*/
var ASCII_MAPS;
ASCII_MAPS = new collections.Dictionary();

var AREA_STRUCTURES;
AREA_STRUCTURES = {};

var MAP_TO_MAP;
MAP_TO_MAP = new collections.Dictionary();

MAP_TO_MAP.setValue(new MapLink(MapType.VillageMap, new Point(11, 0)), new MapLink(MapType.FarmMap, new Point(11, 32)));

ASCII_MAPS[MapType.VillageMap] = [
    '========,,#+#,,,========',
    '========,,,.,,,,========',
    '========,,,.,,,,========',
    '========,,,.,,,,========',
    '========,,,.,,,,========',
    '===,,,,,;...,,,,###=====',
    '===###,;.;,.,,;.+##=====',
    '===##+..;,,.,;.;###=====',
    '===###,,,,,...;,,,,,,===',
    '===,,=,,,,,.,,,,,,,,,===',
    '====,,,,,,,.,,,,,,,,,===',
    '====,,,,,,,.,,,,,,,,,===',
    '====,,,,,,,.,,###,,,,===',
    '====,,,#+.....+##,,,,===',
    '====,,,##!,.,,###,,,,===',
    '====,,,,,,,.,,,,,,,,,===',
    '====,,,,,,,.,,,,,,,,,===',
    '====,,###!...!###,======',
    '====,,##+..#..+##,======',
    '====,,###,...,###,======',
    '====,,,,,,,.,,,,,,======',
    '====,,,,,,,.!,,,,,======',
    '======,,,##+##,,,=======',
    '======,,,#####,,,=======',
    '======,,,#####,,,=======',
    '======,,,#####,,,=======',
    '======,,,#####,,,=======',
    '======,,,,,,,,,,,======='
];

AREA_STRUCTURES[MapType.VillageMap] = [
    { id: "Village_Gate", type: StructureType.Gate_NS, location: new WorldCoordinates(MapType.VillageMap, new Point(10, 0)) },
    { id: "Farm1", type: StructureType.StrawHouse_EF, location: new WorldCoordinates(MapType.VillageMap, new Point(3, 6)) },
    { id: "Farm2", type: StructureType.StrawHouse_WF, location: new WorldCoordinates(MapType.VillageMap, new Point(16, 5)) },
    { id: "Snorri the Sage", type: StructureType.Hut_EF, location: new WorldCoordinates(MapType.VillageMap, new Point(7, 13)) },
    { id: "Olaf's Junk Store", type: StructureType.StrawHouse_WF, location: new WorldCoordinates(MapType.VillageMap, new Point(14, 12)) },
    { id: "Bjorn the Blacksmith", type: StructureType.StrawHouse_EF, location: new WorldCoordinates(MapType.VillageMap, new Point(6, 17)) },
    { id: "Gunnhild's General Store", type: StructureType.StrawHouse_WF, location: new WorldCoordinates(MapType.VillageMap, new Point(14, 17)) },
    { id: "Shrine of Odin", type: StructureType.HutTemple_NF, location: new WorldCoordinates(MapType.VillageMap, new Point(9, 22)) }
];

ASCII_MAPS[MapType.FarmMap] = [
    '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
    '^^^^^^^^^^^^^^^^^^^^^^^^+^^^^^^^^^^^^^^^^^^^^^^^^',
    '^^^^^^^^^^^^^^^^^^^^^^^^.^^^^^^^^^^^^^^^^^^^^^^^^',
    '^^^^^^^^^^^^^^^^^^^^^^^^.,,,^^^^^^^^^^^^^^^^^^^^^',
    '^^^^^^^^^^^^^^^^^^^^^^,,.,,,,,^^^^^^^^^^^^^^^^^^^',
    '^^^^^^^^^^^^^^^^^,,,,,,,.,,,,,,^^^^^^^^^^^^^^^^^^',
    '^^^^^^^^^^^^^^^^,,,,,,,,.,,,,,,,,,^^^^^^^^^^^^^^^',
    ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
    ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
    ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
    ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
    ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
    ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
    ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
    ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
    '.................................................',
    '.................................................',
    ',,,,,,,,,,,,,,,,,,,,,,,..;,,,,,,,,,,,,,,,,,,,,,,,',
    ',,,,,,,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,',
    ',,,,,,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,=',
    ',,,,,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,=',
    ',,,,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,=',
    ',,,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,,=',
    ',,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,####,=',
    ',,,,,,,,,,,,,,,,;..........................+###,=',
    ',,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,####,=',
    ',,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,=',
    ',,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,=======',
    ',,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,,=======',
    '========,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,,,=======',
    '========,,,.;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,=======',
    '========,,,.,,,,,=======,,,,,,,,,,,,,,,,,,=======',
    '========,,#+#,,,,=======,,,,,,,,,,,,,,,,,,,,,,,,,'
];

AREA_STRUCTURES[MapType.FarmMap] = [];
//# sourceMappingURL=GameMap.js.map
