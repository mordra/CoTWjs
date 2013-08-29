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
    constructor (map : string,point : Point) {
   this.MapName = map;
   this.Coord = point;
    }
}

/**
 * Dictionary of MapType to ,D array of tiles
 */
var MAPS:collections.Dictionary<string,Array<Array<number>>>;
MAPS = new collections.Dictionary<string,Array<Array<number>>>();

var MAP_TO_MAP : collections.Dictionary<MapLink,MapLink>;
MAP_TO_MAP = new collections.Dictionary<MapLink,MapLink>();

MAP_TO_MAP.setValue(new MapLink(MapType.VillageMap,new Point(9,0)),new MapLink(MapType.FarmMap,new Point(5,5)));

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
