/// <reference path="references.ts"/>
var CoTWSprites = {
    Actors: {
        MaleHero: { type: ResourceType.Monsters, offset: { x: 0, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        FemaleHero: { type: ResourceType.Monsters, offset: { x: 32, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Kobold: { type: ResourceType.Monsters, offset: { x: 64, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        GiantRat: { type: ResourceType.Monsters, offset: { x: 96, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        LargeSnake: { type: ResourceType.Monsters, offset: { x: 128, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        GiantAnt: { type: ResourceType.Monsters, offset: { x: 160, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WildDog: { type: ResourceType.Monsters, offset: { x: 192, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Skeleton: { type: ResourceType.Monsters, offset: { x: 224, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        GiantTrapdoorSpider: { type: ResourceType.Monsters, offset: { x: 256, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        GiantBat: { type: ResourceType.Monsters, offset: { x: 288, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        CarrionCreeper: { type: ResourceType.Monsters, offset: { x: 320, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        GiantScorpion: { type: ResourceType.Monsters, offset: { x: 352, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        GreenSlime: { type: ResourceType.Monsters, offset: { x: 384, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Viper: { type: ResourceType.Monsters, offset: { x: 416, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Ogre: { type: ResourceType.Monsters, offset: { x: 0, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WalkingCorpse: { type: ResourceType.Monsters, offset: { x: 32, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        HugeLizard: { type: ResourceType.Monsters, offset: { x: 64, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Goblin: { type: ResourceType.Monsters, offset: { x: 96, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Hobgoblin: { type: ResourceType.Monsters, offset: { x: 128, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Spectre: { type: ResourceType.Monsters, offset: { x: 160, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Thief: { type: ResourceType.Monsters, offset: { x: 192, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Wolf: { type: ResourceType.Monsters, offset: { x: 224, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        DireWolf: { type: ResourceType.Monsters, offset: { x: 256, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        BrownBear: { type: ResourceType.Monsters, offset: { x: 288, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        CaveBear: { type: ResourceType.Monsters, offset: { x: 320, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        GelatinousGlob: { type: ResourceType.Monsters, offset: { x: 352, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Troll: { type: ResourceType.Monsters, offset: { x: 384, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Manticore: { type: ResourceType.Monsters, offset: { x: 416, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        BronzeGolem: { type: ResourceType.Monsters, offset: { x: 0, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        IronGolem: { type: ResourceType.Monsters, offset: { x: 32, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        DiamondGolem: { type: ResourceType.Monsters, offset: { x: 64, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WoodenGolem: { type: ResourceType.Monsters, offset: { x: 96, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Bandit: { type: ResourceType.Monsters, offset: { x: 128, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Warrior: { type: ResourceType.Monsters, offset: { x: 160, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Wizard: { type: ResourceType.Monsters, offset: { x: 192, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Necromancer: { type: ResourceType.Monsters, offset: { x: 224, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Wight: { type: ResourceType.Monsters, offset: { x: 256, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Wraith: { type: ResourceType.Monsters, offset: { x: 288, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Ghost: { type: ResourceType.Monsters, offset: { x: 320, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Shadow: { type: ResourceType.Monsters, offset: { x: 352, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Vampire: { type: ResourceType.Monsters, offset: { x: 384, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        IceDevil: { type: ResourceType.Monsters, offset: { x: 416, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        RatMan: { type: ResourceType.Monsters, offset: { x: 0, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WolfMan: { type: ResourceType.Monsters, offset: { x: 32, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        BearMan: { type: ResourceType.Monsters, offset: { x: 64, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        BullMan: { type: ResourceType.Monsters, offset: { x: 96, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        SpikedDevil: { type: ResourceType.Monsters, offset: { x: 128, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        HornedDevil: { type: ResourceType.Monsters, offset: { x: 160, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        AbyssFiend: { type: ResourceType.Monsters, offset: { x: 192, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WindElemental: { type: ResourceType.Monsters, offset: { x: 224, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        DustElemental: { type: ResourceType.Monsters, offset: { x: 256, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        FireElemental: { type: ResourceType.Monsters, offset: { x: 288, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WaterElemental: { type: ResourceType.Monsters, offset: { x: 320, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        MagmaElemental: { type: ResourceType.Monsters, offset: { x: 352, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        IceElemental: { type: ResourceType.Monsters, offset: { x: 384, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        EarthElemental: { type: ResourceType.Monsters, offset: { x: 416, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        HillGiant: { type: ResourceType.Monsters, offset: { x: 0, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        TwoHeadGiant: { type: ResourceType.Monsters, offset: { x: 32, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        FrostGiant: { type: ResourceType.Monsters, offset: { x: 64, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        StoneGiant: { type: ResourceType.Monsters, offset: { x: 96, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        FireGiant: { type: ResourceType.Monsters, offset: { x: 128, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Surtur: { type: ResourceType.Monsters, offset: { x: 160, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        FireGiantKing: { type: ResourceType.Monsters, offset: { x: 192, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        FrostGiantKing: { type: ResourceType.Monsters, offset: { x: 224, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        HillGiantKing: { type: ResourceType.Monsters, offset: { x: 256, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        StoneGiantKing: { type: ResourceType.Monsters, offset: { x: 288, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        RedDragon: { type: ResourceType.Monsters, offset: { x: 320, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        BlueDragon: { type: ResourceType.Monsters, offset: { x: 352, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WhiteDragon: { type: ResourceType.Monsters, offset: { x: 384, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        GreenDragon: { type: ResourceType.Monsters, offset: { x: 416, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 }
    },
    Tiles: {
        Rock: { type: ResourceType.Tiles, offset: { x: 0, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Grass: { type: ResourceType.Tiles, offset: { x: 0, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        DarkDgn: { type: ResourceType.Tiles, offset: { x: 0, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Water: { type: ResourceType.Tiles, offset: { x: 0, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Path: { type: ResourceType.Tiles, offset: { x: 0, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        LitDgn: { type: ResourceType.Tiles, offset: { x: 0, y: 160 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        PathRock: { type: ResourceType.Tiles, offset: { x: 32, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        PathGrass: { type: ResourceType.Tiles, offset: { x: 32, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WallDarkDgnSW: { type: ResourceType.Tiles, offset: { x: 32, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WallDarkDgnNW: { type: ResourceType.Tiles, offset: { x: 32, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: Math.PI / 2 },
        WallDarkDgnNE: { type: ResourceType.Tiles, offset: { x: 32, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: Math.PI },
        WallDarkDgnSE: { type: ResourceType.Tiles, offset: { x: 32, y: 64 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: Math.PI * 3 / 2 },
        WaterGrass: { type: ResourceType.Tiles, offset: { x: 32, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WaterPath: { type: ResourceType.Tiles, offset: { x: 32, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WallLitDgnSW: { type: ResourceType.Tiles, offset: { x: 32, y: 160 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        WallLitDgnNW: { type: ResourceType.Tiles, offset: { x: 32, y: 160 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: Math.PI / 2 },
        WallLitDgnNE: { type: ResourceType.Tiles, offset: { x: 32, y: 160 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: Math.PI },
        WallLitDgnSE: { type: ResourceType.Tiles, offset: { x: 32, y: 160 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: Math.PI * 3 / 2 },
        Grass50Cave50: { type: ResourceType.Tiles, offset: { x: 0, y: 192 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Grass10Cave90: { type: ResourceType.Tiles, offset: { x: 32, y: 192 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        White50Cave50: { type: ResourceType.Tiles, offset: { x: 0, y: 224 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        White90Cave10: { type: ResourceType.Tiles, offset: { x: 32, y: 224 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        StairsUp: { type: ResourceType.Tiles, offset: { x: 64, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        StairsDown: { type: ResourceType.Tiles, offset: { x: 96, y: 128 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        DoorClosed: { type: ResourceType.Tiles, offset: { x: 64, y: 160 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        DoorOpen: { type: ResourceType.Tiles, offset: { x: 96, y: 160 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Crop: { type: ResourceType.Tiles, offset: { x: 64, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        VegePatch: { type: ResourceType.Tiles, offset: { x: 128, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Well: { type: ResourceType.Tiles, offset: { x: 160, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Wagon: { type: ResourceType.Tiles, offset: { x: 192, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Fountain: { type: ResourceType.Tiles, offset: { x: 96, y: 96 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Entry: { type: ResourceType.Tiles, offset: { x: 0, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Building: { type: ResourceType.Tiles, offset: { x: 0, y: 32 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        Sign: { type: ResourceType.Tiles, offset: { x: 160, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        MineEntrance: { type: ResourceType.Tiles, offset: { x: 64, y: 0 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 },
        TreasurePile: { type: ResourceType.Items, offset: { x: 128, y: 640 }, size: { w: TILE_SIZE, h: TILE_SIZE }, turn: 0 }
    },
    Buildings: {
        Gate_NS: { type: ResourceType.buildings_1x, offset: { x: 0, y: 0 }, size: { w: 96, h: 32 }, turn: 0 },
        StrawHouse_EF: { type: ResourceType.buildings_3x, offset: { x: 0, y: 0 }, size: { w: 96, h: 96 }, turn: 0 },
        StrawHouse_WF: { type: ResourceType.buildings_3x, offset: { x: 192, y: 0 }, size: { w: 96, h: 96 }, turn: 0 },
        Hut_EF: { type: ResourceType.buildings_2x, offset: { x: 0, y: 0 }, size: { w: 64, h: 64 }, turn: 0 },
        HutTemple_NF: { type: ResourceType.buildings_5x, offset: { x: 0, y: 0 }, size: { w: 160, h: 160 }, turn: 0 },
        BurntStrawHouse_WF: { type: ResourceType.buildings_3x, offset: { x: 288, y: 0 }, size: { w: 96, h: 96 }, turn: 0 }
    },
    Items: {
        BrokenSword: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 800 } },
        BrokenArmour: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 800 } },
        BrokenShield: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 800 } },
        BrokenHelmet: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 96, y: 800 } },
        BrokenBelt: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 128, y: 800 } },
        BrokenGauntlet: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 160, y: 800 } },
        BrokenBracer: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 192, y: 800 } },
        BrokenCloak: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 224, y: 800 } },
        BrokenPack: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 256, y: 800 } },
        BrokenBoot: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 288, y: 800 } },
        Club: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 896 } },
        ClubCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 896 } },
        ClubEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 896 } },
        Hammer: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 768 } },
        HammerCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 768 } },
        HammerEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 768 } },
        Spear: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 864 } },
        SpearCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 864 } },
        SpearEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 864 } },
        Sword: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 192 } },
        SwordCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 192 } },
        SwordEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 192 } },
        Mace: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 224 } },
        MaceCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 224 } },
        MaceEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 224 } },
        Flail: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 736 } },
        FlailCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 736 } },
        FlailEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 736 } },
        Axe: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 160 } },
        AxeCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 160 } },
        AxeEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 160 } },
        MorningStar: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 832 } },
        MorningStarCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 832 } },
        MorningStarEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 832 } },
        LeatherArmour: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 256 } },
        LeatherArmourCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 256 } },
        LeatherArmourEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 256 } },
        MetalArmour: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 288 } },
        MetalArmourCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 288 } },
        MetalArmourEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 288 } },
        WoodShield: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 352 } },
        WoodShieldCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 352 } },
        WoodShieldEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 352 } },
        MetalShield: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 320 } },
        MetalShieldCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 320 } },
        MetalShieldEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 320 } },
        LeatherHelmet: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 416 } },
        LeatherHelmetCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 416 } },
        LeatherHelmetEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 416 } },
        MetalHelmet: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 384 } },
        MetalHelmetCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 384 } },
        MetalHelmetEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 384 } },
        HelmetOfDetectMonsters: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 98, y: 384 } },
        Bracers: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 448 } },
        BracersCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 448 } },
        BracersEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 448 } },
        Gauntlet: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 480 } },
        GauntletCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 480 } },
        GauntletEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 480 } },
        GauntletOfSlaying: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 92, y: 480 } },
        SlotBelt: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 672 } },
        WandQuiverBelt: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 672 } },
        UtilityBelt: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 672 } },
        Boots: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 544 } },
        BootsCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 544 } },
        BootsOfSpeed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 544 } },
        BootsOfLevitation: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 96, y: 544 } },
        Cloak: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 512 } },
        CloakCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 512 } },
        CloakEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 512 } },
        Ring: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 576 } },
        RingCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 576 } },
        RingEnchanted: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 576 } },
        Amulet: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 128 } },
        AmuletCursed: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 128 } },
        AmuletResistFire: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 128 } },
        AmuletResistLightning: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 96, y: 128 } },
        AmuletResistCold: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 128, y: 128 } },
        AmuletResistDrain: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 160, y: 128 } },
        Wand: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 96 } },
        WandOfFireBall: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 96 } },
        WandOfLightningBall: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 96 } },
        WandOfLight: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 96, y: 96 } },
        WandOfDivination: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 128, y: 96 } },
        WandOfNothing: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 160, y: 96 } },
        WandOfColdBall: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 192, y: 96 } },
        WandOfColdBolt: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 224, y: 96 } },
        WandOfFireBolt: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 256, y: 96 } },
        WandOfLightning: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 288, y: 96 } },
        Staff: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 64 } },
        StaffFire: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 64 } },
        StaffSmoke: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 64 } },
        StaffMinor: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 96, y: 64 } },
        StaffMedium: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 128, y: 64 } },
        StaffMajor: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 160, y: 64 } },
        StaffGreen: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 192, y: 64 } },
        StaffLight: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 224, y: 64 } },
        Scroll: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 256, y: 32 } },
        SpellBook: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 32 } },
        Potion: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 0 } },
        PotionWater: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 0 } },
        PotionMinorHeal: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 0 } },
        PotionMediumHeal: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 96, y: 0 } },
        PotionMajorHeal: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 128, y: 0 } },
        PotionGainAttribute: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 160, y: 0 } },
        PotionLoseAttribute: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 192, y: 0 } },
        PotionDivination: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 224, y: 0 } },
        Purse: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 608 } },
        Bag: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 608 } },
        Pack: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 96, y: 608 } },
        Chest: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 608 } },
        EnchantedPack: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 128, y: 608 } },
        CoinsCopper: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 640 } },
        CoinsSilver: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 640 } },
        CoinsGold: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 640 } },
        CoinsPlatinum: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 96, y: 640 } },
        TreasurePile: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 128, y: 640 } },
        Parchment: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 0, y: 704 } },
        EnchantedHelmOfStorms: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 32, y: 704 } },
        ElementalPortal: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 64, y: 704 } },
        AmuletOfKings: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 96, y: 704 } },
        Apple: { type: ResourceType.Items, size: { w: TILE_SIZE, h: TILE_SIZE }, offset: { x: 128, y: 704 } }
    }
};
//# sourceMappingURL=sprites.js.map
