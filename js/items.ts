/// <reference path="references.ts"/>

// enum strings have to match items, used as keys
enum ItemType {
    Weapon,
    Armour,
    Shield,
    Helmet,
    Gauntlet,
    Bracer,
    Potion,
    Scroll,
    Amulet,
    Staff,
    Boots,
    Cloak,
    Ring,
    Belt,
    Purse,
    Bag,
    Pack,
    Chest,
    PackOfHolding
}

var Items = {
    Weapon: {
        BrokenSword:                  {type: ItemType.Weapon,        name:'Broken Sword',                     weight:1000,  bulk:5000,   buy:NaN,          sell:25,     sprite:CoTWSprites.Items.BrokenSword,                  weaponClass:0  },
        Club:                         {type: ItemType.Weapon,        name:'Club',                             weight:1500,  bulk:3000,   buy:105,          sell:60,     sprite:CoTWSprites.Items.Club,                         weaponClass:1  },
        Dagger:                       {type: ItemType.Weapon,        name:'Dagger',                           weight:500,   bulk:500,    buy:420,          sell:240,    sprite:CoTWSprites.Items.Dagger,                       weaponClass:2  },
        Hammer:                       {type: ItemType.Weapon,        name:'Hammer',                           weight:2000,  bulk:3000,   buy:420,          sell:240,    sprite:CoTWSprites.Items.Hammer,                       weaponClass:2  },
        HandAxe:                      {type: ItemType.Weapon,        name:'Hand Axe',                         weight:1000,  bulk:3000,   buy:472,          sell:270,    sprite:CoTWSprites.Items.HandAxe,                      weaponClass:3  },
        Quarterstaff:                 {type: ItemType.Weapon,        name:'Quarterstaff',                     weight:750,   bulk:5000,   buy:648,          sell:360,    sprite:CoTWSprites.Items.Quarterstaff,                 weaponClass:3  },
        Spear:                        {type: ItemType.Weapon,        name:'Spear',                            weight:1500,  bulk:5000,   buy:840,          sell:480,    sprite:CoTWSprites.Items.Spear,                        weaponClass:4  },
        ShortSword:                   {type: ItemType.Weapon,        name:'Short Sword',                      weight:1000,  bulk:5000,   buy:1470,         sell:840,    sprite:CoTWSprites.Items.ShortSword,                   weaponClass:5  },
        Mace:                         {type: ItemType.Weapon,        name:'Mace',                             weight:2500,  bulk:4375,   buy:1728,         sell:960,    sprite:CoTWSprites.Items.Mace,                         weaponClass:5  },
        Flail:                        {type: ItemType.Weapon,        name:'Flail',                            weight:2000,  bulk:3250,   buy:1512,         sell:840,    sprite:CoTWSprites.Items.Flail,                        weaponClass:6  },
        Axe:                          {type: ItemType.Weapon,        name:'Axe',                              weight:2000,  bulk:5000,   buy:1944,         sell:1080,   sprite:CoTWSprites.Items.Axe,                          weaponClass:6  },
        WarHammer:                    {type: ItemType.Weapon,        name:'War Hammer',                       weight:1400,  bulk:7500,   buy:2160,         sell:1200,   sprite:CoTWSprites.Items.WarHammer,                    weaponClass:7  },
        LongSword:                    {type: ItemType.Weapon,        name:'Long Sword',                       weight:1500,  bulk:8000,   buy:3240,         sell:1800,   sprite:CoTWSprites.Items.LongSword,                    weaponClass:8  },
        BattleAxe:                    {type: ItemType.Weapon,        name:'Battle Axe',                       weight:3000,  bulk:6000,   buy:2160,         sell:1200,   sprite:CoTWSprites.Items.BattleAxe,                    weaponClass:8  },
        BroadSword:                   {type: ItemType.Weapon,        name:'Broad Sword',                      weight:1600,  bulk:9000,   buy:3240,         sell:1800,   sprite:CoTWSprites.Items.BroadSword,                   weaponClass:9  },
        Morningstar:                  {type: ItemType.Weapon,        name:'Morningstar',                      weight:3000,  bulk:9000,   buy:2160,         sell:1200,   sprite:CoTWSprites.Items.Morningstar,                  weaponClass:10 },
        BastardSword:                 {type: ItemType.Weapon,        name:'Bastard Sword',                    weight:3000,  bulk:10000,  buy:4320,         sell:2400,   sprite:CoTWSprites.Items.BastardSword,                 weaponClass:11 },
        TwoHandedSword:               {type: ItemType.Weapon,        name:'Two Handed Sword',                 weight:5000,  bulk:12000,  buy:6360,         sell:3600,   sprite:CoTWSprites.Items.TwoHandedSword,               weaponClass:12 }
    },
    Armour: {
        Rustyarmour:                   {type: ItemType.Armour,        name:'Rusty armour',                      weight:10000, bulk:30000,  buy:NaN,          sell:25,     sprite:CoTWSprites.Items.BrokenArmour,                   ac:0     },
        Leatherarmour:                 {type: ItemType.Armour,        name:'Leather armour',                    weight:5000,  bulk:2400,   buy:1080,         sell:600,    sprite:CoTWSprites.Items.LeatherArmour,                 ac:6     },
        StuddedLeatherarmour:          {type: ItemType.Armour,        name:'Studded Leather armour',            weight:7000,  bulk:25000,  buy:3150,         sell:1800,   sprite:CoTWSprites.Items.LeatherArmour,          ac:12    },
        RingMail:                     {type: ItemType.Armour,        name:'Ring Mail',                        weight:8000,  bulk:30000,  buy:6300,         sell:3600,   sprite:CoTWSprites.Items.MetalArmour,                     ac:18    },
        ScaleMail:                    {type: ItemType.Armour,        name:'Scale Mail',                       weight:9000,  bulk:30000,  buy:10800,        sell:6000,   sprite:CoTWSprites.Items.MetalArmour,                    ac:24    },
        ChainMail:                    {type: ItemType.Armour,        name:'Chain Mail',                       weight:10000, bulk:30000,  buy:16200,        sell:9000,   sprite:CoTWSprites.Items.MetalArmour,                    ac:30    },
        SplintMail:                   {type: ItemType.Armour,        name:'Splint Mail',                      weight:12000, bulk:40000,  buy:27000,        sell:15000,  sprite:CoTWSprites.Items.MetalArmour,                   ac:36    },
        PlateMail:                    {type: ItemType.Armour,        name:'Plate Mail',                       weight:15000, bulk:40000,  buy:42000,        sell:24000,  sprite:CoTWSprites.Items.MetalArmour,                    ac:42    },
        Platearmour:                   {type: ItemType.Armour,        name:'Plate armour',                      weight:15000, bulk:60000,  buy:42000,        sell:24000,  sprite:CoTWSprites.Items.MetalArmour,                   ac:48    },
        MeteoricSteelPlate:           {type: ItemType.Armour,        name:'Meteoric Steel Plate',             weight:5000,  bulk:30000,  buy:105000,       sell:60000,  sprite:CoTWSprites.Items.MetalArmour,           ac:54    },
        ElvenChainMail:               {type: ItemType.Armour,        name:'Elven Chain Mail',                 weight:50000, bulk:24000,  buy:162000,       sell:90000,  sprite:CoTWSprites.Items.MetalArmour,               ac:52    }
    },
    Shield: {
        BrokenShield:                 {type: ItemType.Shield,        name:'Broken Shield',                    weight:4000,  bulk:35000,  buy:NaN,          sell:25,     sprite:CoTWSprites.Items.BrokenShield,                 ac:0     },
        SmallWoodenShield:            {type: ItemType.Shield,        name:'Small Wooden Shield',              weight:3000,  bulk:15000,  buy:525,          sell:300,    sprite:CoTWSprites.Items.WoodShield,            ac:3     },
        MediumWoodenShield:           {type: ItemType.Shield,        name:'Medium Wooden Shield',             weight:4000,  bulk:35000,  buy:1050,         sell:600,    sprite:CoTWSprites.Items.WoodShield,           ac:6     },
        LargeWoodenShield:            {type: ItemType.Shield,        name:'Large Wooden Shield',              weight:5000,  bulk:50000,  buy:2100,         sell:1200,   sprite:CoTWSprites.Items.WoodShield,            ac:9     },
        SmallIronShield:              {type: ItemType.Shield,        name:'Small Iron Shield',                weight:4000,  bulk:15000,  buy:1260,         sell:720,    sprite:CoTWSprites.Items.MetalShield,              ac:6     },
        MediumIronShield:             {type: ItemType.Shield,        name:'Medium Iron Shield',               weight:5000,  bulk:35000,  buy:2592,         sell:1440,   sprite:CoTWSprites.Items.MetalShield,             ac:9     },
        LargeIronShield:              {type: ItemType.Shield,        name:'Large Iron Shield',                weight:6000,  bulk:50000,  buy:3150,         sell:1800,   sprite:CoTWSprites.Items.MetalShield,              ac:12    },
        SmallSteelShield:             {type: ItemType.Shield,        name:'Small Steel Shield',               weight:4000,  bulk:15000,  buy:2730,         sell:1560,   sprite:CoTWSprites.Items.MetalShield,             ac:9     },
        MediumSteelShield:            {type: ItemType.Shield,        name:'Medium Steel Shield',              weight:5000,  bulk:35000,  buy:3360,         sell:1920,   sprite:CoTWSprites.Items.MetalShield,            ac:12    },
        LargeSteelShield:             {type: ItemType.Shield,        name:'Large Steel Shield',               weight:6000,  bulk:50000,  buy:4200,         sell:2400,   sprite:CoTWSprites.Items.MetalShield,             ac:15    },
        SmallMeteoricSteelShield:     {type: ItemType.Shield,        name:'Small Meteoric Steel Shield',      weight:2500,  bulk:10000,  buy:4620,         sell:2640,   sprite:CoTWSprites.Items.MetalShield,     ac:15    },
        MediumMeteoricSteelShield:    {type: ItemType.Shield,        name:'Medium Meteoric Steel Shield',     weight:3500,  bulk:25000,  buy:5940,         sell:3300,   sprite:CoTWSprites.Items.MetalShield,    ac:18    },
        LargeMeteoricSteelShield:     {type: ItemType.Shield,        name:'Large Meteoric Steel Shield',      weight:4500,  bulk:35000,  buy:7560,         sell:4200,   sprite:CoTWSprites.Items.MetalShield,     ac:21    }
    },
    Helmet: {
        BrokenHelmet:                 {type: ItemType.Helmet,        name:'Broken Helmet',                    weight:1000,  bulk:1000,   buy:NaN,          sell:25,     sprite:CoTWSprites.Items.BrokenHelmet,                 ac:0     },
        LeatherHelmet:                {type: ItemType.Helmet,        name:'Leather Helmet',                   weight:500,   bulk:500,    buy:525,          sell:300,    sprite:CoTWSprites.Items.LeatherHelmet,                ac:3     },
        IronHelmet:                   {type: ItemType.Helmet,        name:'Iron Helmet',                      weight:2000,  bulk:2000,   buy:1050,         sell:600,    sprite:CoTWSprites.Items.MetalHelmet,                   ac:6     },
        SteelHelmet:                  {type: ItemType.Helmet,        name:'Steel Helmet',                     weight:2500,  bulk:2000,   buy:3150,         sell:1800,   sprite:CoTWSprites.Items.MetalHelmet,                  ac:9     },
        MeteoricSteelHelmet:          {type: ItemType.Helmet,        name:'Meteoric Steel Helmet',            weight:1000,  bulk:2000,   buy:10500,        sell:6000,   sprite:CoTWSprites.Items.MetalHelmet,          ac:15    },
        HelmetofDetectMonsters:       {type: ItemType.Helmet,        name:'Helmet of Detect Monsters',        weight:2500,  bulk:2000,   buy:42000,        sell:24000,  sprite:CoTWSprites.Items.HelmetofDetectMonsters,       ac:9     },
        EnchantedHelmofStorms:        {type: ItemType.Helmet,        name:'Enchanted Helm of Storms',         weight:1000,  bulk:2000,   buy:1050000,      sell:600000, sprite:CoTWSprites.Items.EnchantedHelmofStorms,        ac:25    }
    },
    Bracer: {
        Bracers:                      {type: ItemType.Bracer,        name:'Bracers',                          weight:500,   bulk:2000,   buy:108,          sell:60,     sprite:CoTWSprites.Items.Bracers,                      ac:3     },
        BracersOfDefenseNormal:       {type: ItemType.Bracer,        name:'Bracers Of Defense',               weight:500,   bulk:2000,   buy:1836,         sell:1020,   sprite:CoTWSprites.Items.BracersEnchanted,       ac:8     },
        BracersOfDefenseS:            {type: ItemType.Bracer,        name:'Bracers Of Defense',               weight:500,   bulk:2000,   buy:5616,         sell:3120,   sprite:CoTWSprites.Items.BracersEnchanted,            ac:13    },
        BracersOfDefenseVS:           {type: ItemType.Bracer,        name:'Bracers Of Defense',               weight:500,   bulk:2000,   buy:11556,        sell:6420,   sprite:CoTWSprites.Items.BracersEnchanted,           ac:18    }
    },
    Gauntlet: {
        Gauntlet:                     {type: ItemType.Gauntlet,      name:'Gauntlets',                        weight:500,   bulk:2000,   buy:105,          sell:60,     sprite:CoTWSprites.Items.Gauntlet,                     ac:5     },
        GauntletOfProtection:         {type: ItemType.Gauntlet,      name:'Gauntlets of Protection',          weight:500,   bulk:2000,   buy:2625,         sell:1500,   sprite:CoTWSprites.Items.GauntletEnchanted,         ac:10   },
        GauntletOfProtectionS:        {type: ItemType.Gauntlet,      name:'Gauntlets of Protection',          weight:500,   bulk:2000,   buy:6300,         sell:3600,   sprite:CoTWSprites.Items.GauntletEnchanted,        ac:15   },
        GauntletOfProtectionVS:       {type: ItemType.Gauntlet,      name:'Gauntlets of Protection',          weight:500,   bulk:2000,   buy:12420,        sell:6900,   sprite:CoTWSprites.Items.GauntletEnchanted,       ac:20    },
        GauntletOfSlaying:            {type: ItemType.Gauntlet,      name:'Gauntlets of Slaying',             weight:500,   bulk:2000,   buy:3780,         sell:2100,   sprite:CoTWSprites.Items.GauntletOfSlaying,            ac:0     },
        GauntletOfSlayingS_S:         {type: ItemType.Gauntlet,      name:'Gauntlets of Slaying',             weight:500,   bulk:2000,   buy:7560,         sell:4200,   sprite:CoTWSprites.Items.GauntletOfSlaying,         ac:0     },
        GauntletOfSlayingVS_VS:       {type: ItemType.Gauntlet,      name:'Gauntlets of Slaying',             weight:500,   bulk:2000,   buy:13125,        sell:7500,   sprite:CoTWSprites.Items.GauntletOfSlaying,       ac:0     },
        GauntletOfDexterity:          {type: ItemType.Gauntlet,      name:'Gauntlets of Dexterity',           weight:500,   bulk:2000,   buy:3240,         sell:1800,   sprite:CoTWSprites.Items.GauntletEnchanted,          ac:5     },
        GauntletOfDexterityS:         {type: ItemType.Gauntlet,      name:'Gauntlets of Dexterity',           weight:500,   bulk:2000,   buy:7020,         sell:3900,   sprite:CoTWSprites.Items.GauntletEnchanted,         ac:5     },
        GauntletOfDexterityVS:        {type: ItemType.Gauntlet,      name:'Gauntlets of Dexterity',           weight:500,   bulk:2000,   buy:12960,        sell:7200,   sprite:CoTWSprites.Items.GauntletEnchanted,        ac:5     },
        GauntletOfStrength:           {type: ItemType.Gauntlet,      name:'Gauntlets Of Strength',            weight:500,   bulk:2000,   buy:3240,         sell:1800,   sprite:CoTWSprites.Items.GauntletEnchanted,           ac:5     },
        GauntletOfStrengthS:          {type: ItemType.Gauntlet,      name:'Gauntlets Of Strength',            weight:500,   bulk:2000,   buy:0,            sell:0,      sprite:CoTWSprites.Items.GauntletEnchanted,          ac:5     },
        GauntletOfStrengthVS:         {type: ItemType.Gauntlet,      name:'Gauntlets Of Strength',            weight:500,   bulk:2000,   buy:12960,        sell:7200,   sprite:CoTWSprites.Items.GauntletEnchanted,         ac:5     }
    },
    Belt:  {
        TwoSlotbelt:                  {type: ItemType.Belt,          name:'Two slot belt',                    weight:300,   bulk:300,    buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.SlotBelt,                  level:NaN, weightCap:2100,   bulkCap:3100, slot:2},
        ThreeSlotbelt:                {type: ItemType.Belt,          name:'Three slot belt',                  weight:300,   bulk:300,    buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.SlotBelt,                level:NaN, weightCap:2600,   bulkCap:3600, slot:3},
        FourSlotbelt:                 {type: ItemType.Belt,          name:'Four slot belt',                   weight:300,   bulk:300,    buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.SlotBelt,                 level:NaN, weightCap:3100,   bulkCap:4100, slot:4},
        UtilityBelt:                  {type: ItemType.Belt,          name:'Utility Belt',                     weight:1350,  bulk:1800,   buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.UtilityBelt,                  level:NaN, weightCap:3100,   bulkCap:4100, slot:2, slotScroll:4, slotPotion:4},
        WandQuiverBelt:               {type: ItemType.Belt,          name:'Wand Quiver Belt',                 weight:300,   bulk:300,    buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.WandQuiverBelt,               level:NaN, weightCap:3100,   bulkCap:4100, slot:2, slotWand:4}
    },
    Container: {
        Purse:                        {type: ItemType.Purse,         name:'Purse',                            weight:300,   bulk:300,    buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.Purse,                        level:NaN, weightCap:100300, bulkCap:100300},
        SmallBag:                     {type: ItemType.Bag,           name:'Small Bag',                        weight:300,   bulk:500,    buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.Bag,                     level:NaN, weightCap:5000,   bulkCap:6000},
        MediumBag:                    {type: ItemType.Bag,           name:'Medium Bag',                       weight:500,   bulk:700,    buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.Bag,                    level:NaN, weightCap:10000,  bulkCap:12000},
        LargeBag:                     {type: ItemType.Bag,           name:'Large Bag',                        weight:900,   bulk:900,    buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.Bag,                     level:NaN, weightCap:15000,  bulkCap:18000},
        SmallPack:                    {type: ItemType.Pack,          name:'Small Pack',                       weight:1000,  bulk:1000,   buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.Pack,                    level:NaN, weightCap:12000,  bulkCap:50000},
        MediumPack:                   {type: ItemType.Pack,          name:'Medium Pack',                      weight:2000,  bulk:1500,   buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.Pack,                   level:NaN, weightCap:22000,  bulkCap:75000},
        LargePack:                    {type: ItemType.Pack,          name:'Large Pack',                       weight:4000,  bulk:100000, buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.Pack,                    level:NaN, weightCap:35000,  bulkCap:100000},
        SmallChest:                   {type: ItemType.Chest,         name:'Small Chest',                      weight:5000,  bulk:100000, buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.Chest,                   level:NaN, weightCap:100000, bulkCap:50000},
        MediumChest:                  {type: ItemType.Chest,         name:'Medium Chest',                     weight:15000, bulk:150000, buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.Chest,                  level:NaN, weightCap:100000, bulkCap:150000},
        LargeChest:                   {type: ItemType.Chest,         name:'Large Chest',                      weight:25000, bulk:250000, buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.Chest,                   level:NaN, weightCap:100000, bulkCap:250000},
        EnchantedSmallPackofHolding:  {type: ItemType.PackOfHolding, name:'Enchanted Small Pack of Holding',  weight:5000,  bulk:75000,  buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.EnchantedPack,  level:NaN, weightCap:50000,  bulkCap:150000},
        EnchantedMediumPackofHolding: {type: ItemType.PackOfHolding, name:'Enchanted Medium Pack of Holding', weight:7500,  bulk:100000, buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.EnchantedPack, level:NaN, weightCap:75000,  bulkCap:200000},
        EnchantedLargePackofHolding:  {type: ItemType.PackOfHolding, name:'Enchanted Large Pack of Holding',  weight:10000, bulk:125000, buy:NaN,          sell:NaN,    sprite:CoTWSprites.Items.EnchantedPack,  level:NaN, weightCap:100000, bulkCap:250000}
    }
};
 
// chests have fixed bulk
// pack of holdings have fixed bulk and weight
//Trinklets

//{type:Potion, weight:200,   bulk:200}
//{type:Scroll,  weight:150,   bulk:200}
//{type:Amulet,  weight:200,   bulk:350}
//{type:Staff,   weight:750,   bulk:5000}
//{type:Boots,   weight:1500,  bulk:4000}
//{type:Cloak,   weight:500,   bulk:6000}
//{type:Ring,    weight:50,    bulk:30}
