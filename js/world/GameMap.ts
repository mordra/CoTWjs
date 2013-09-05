/// <reference path="../references.ts"/>

class MapType {
    static VillageMap = 'Village';
    static FarmMap = 'Farm';
}

/**
 * Links MapTypes via points
 */
class MapLink {
    public MapName : string;
    public Coord : Point;
    constructor (map : string, point : Point) {
        this.MapName = map;
        this.Coord = point;
    }
}

/**
 * Dictionary of MapType to ,D array of tiles
 */
var MAPS:collections.Dictionary<string,Array<Array<number>>>;
MAPS = new collections.Dictionary<string,Array<Array<number>>>();

var STRUCTURES:collections.Dictionary<string,Array<Structure>>;
STRUCTURES = new collections.Dictionary<string,Array<Structure>>();

var MAP_TO_MAP : collections.Dictionary<MapLink,MapLink>;
MAP_TO_MAP = new collections.Dictionary<MapLink,MapLink>();

MAP_TO_MAP.setValue(new MapLink(MapType.VillageMap,new Point(11,0)),new MapLink(MapType.FarmMap,new Point(11,32)));

MAPS[MapType.VillageMap] = [
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

STRUCTURES[MapType.VillageMap] = [
    new Structure ("Village_Gate","NS_Gate",                   new Point(1,0),  new Point(10,0),  new Point(3, 1), new Point(0,0)),
    new Structure ("Farm1","EF_StrawHouse",                    new Point(2,1),   new Point(3,6),   new Point(3, 3), new Point(0,0)),
    new Structure ("Farm2","WF_StrawHouse",                    new Point(0,1),  new Point(16,5),  new Point(3, 3), new Point(6,0)),
    new Structure ("Snorri the Sage","EF_Hut",                 new Point(1,0),  new Point(7,13),  new Point(2, 2), new Point(0,0)),
    new Structure ("Olaf's Junk Store","WF_StrawHouse",        new Point(0,1), new Point(14,12), new Point(3, 3), new Point(6,0)),
    new Structure ("Bjorn the Blacksmith","EF_StrawHouse",     new Point(2,1),  new Point(6,17),  new Point(3, 3), new Point(0,0)),
    new Structure ("Gunnhild's General Store","WF_StrawHouse", new Point(0,1), new Point(14,17), new Point(3, 3), new Point(6,0)),
    new Structure ("Shrine of Odin","NF_HutTemple",            new Point(2,0), new Point(9,22),  new Point(5, 5), new Point(0,0))
];

MAPS[MapType.FarmMap] = [
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

STRUCTURES[MapType.FarmMap] = [
    new Structure ("HeroBurntFarm","WF_BurntStrawHouse",new Point(0,2), new Point(43,22), new Point(3,3), new Point(3,0))
];