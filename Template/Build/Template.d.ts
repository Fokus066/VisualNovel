declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
}
declare namespace Template {
    function LeftFightAnimation(): ƒS.AnimationDefinition;
    function shakingRightSide1(): ƒS.AnimationDefinition;
    function fromOutofCanvasToLeft(): ƒS.AnimationDefinition;
    function EscapeAnimationCrocodile(): ƒS.AnimationDefinition;
    function CentershakingAnimationCrocodile(): ƒS.AnimationDefinition;
}
declare namespace Template {
    let characters: {
        narrator: {
            name: string;
        };
        uncle: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                serious: string;
                pointing: string;
                backpain: string;
                fit: string;
            };
        };
        girl: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                angry_arm_crossed: string;
                annoyed: string;
                desperate: string;
                thinking: string;
                searching: string;
                pointing: string;
            };
        };
        boy: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                discuss: string;
                discuss_sideview: string;
                pointing: string;
                laughing: string;
                disappointed: string;
                idea: string;
            };
        };
        crocodile: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                aggressiv: string;
            };
        };
    };
}
declare namespace Template {
    let dataForSave: {
        nameProtagonist: string;
        energy: number;
        fitnessUncle: boolean;
        item_lighter: boolean;
        no_water: boolean;
        item_acaiberry: boolean;
        item_fish: boolean;
        item_spear: boolean;
        item_liane: boolean;
        item_axe: boolean;
        number_branch: number;
        number_stone: number;
        item_suitcase: boolean;
        open_suitcase: boolean;
        uncle_alive: boolean;
        mission: number;
    };
}
declare namespace Template {
    let inGameMenu: {
        save: string;
        load: string;
        close: string;
        statistic: string;
        credit: string;
    };
    function showStatistic(): void;
    function showCredits(): void;
    let gameMenu: ƒS.Menu;
    let inventory: boolean;
    let menu: boolean;
    function buttonFunctionalities(_option: string): Promise<void>;
    function hndKeyPress(_event: KeyboardEvent): Promise<void>;
}
declare namespace Template {
    let items: {
        liane: {
            name: string;
            description: string;
            image: string;
        };
        acaiberry: {
            name: string;
            description: string;
            image: string;
        };
        redberries: {
            image: string;
        };
        berries: {
            name: string;
            description: string;
            image: string;
        };
        bonfire_fish: {
            name: string;
            description: string;
            image: string;
        };
        branch: {
            name: string;
            description: string;
            image: string;
        };
        fish_1: {
            name: string;
            description: string;
            image: string;
        };
        fish_2: {
            name: string;
            description: string;
            image: string;
        };
        stone: {
            name: string;
            description: string;
            image: string;
        };
        waterbottle: {
            name: string;
            description: string;
            image: string;
        };
        axe: {
            name: string;
            description: string;
            image: string;
        };
        lighter: {
            name: string;
            description: string;
            image: string;
        };
        first_aid_kit: {
            name: string;
            description: string;
            image: string;
        };
        spear: {
            name: string;
            description: string;
            image: string;
        };
        suitcase: {
            name: string;
            description: string;
            image: string;
        };
    };
}
declare namespace Template {
    let locations: {
        thunderstorm_1: {
            name: string;
            background: string;
        };
        thunderstorm_2: {
            name: string;
            background: string;
        };
        jungle_rain_1: {
            name: string;
            background: string;
        };
        jungle_rain_2: {
            name: string;
            background: string;
        };
        jungle_rain_3: {
            name: string;
            background: string;
        };
        ferns: {
            name: string;
            background: string;
        };
        jungle_startscreen: {
            name: string;
            background: string;
        };
        jungle_boat: {
            name: string;
            background: string;
        };
        jungle_boat_rain: {
            name: string;
            background: string;
        };
        jungle_path_2: {
            name: string;
            background: string;
        };
        jungle_path_3: {
            name: string;
            background: string;
        };
        jungle_path_4: {
            name: string;
            background: string;
        };
        path_rainforest: {
            name: string;
            background: string;
        };
        jungle_path: {
            name: string;
            background: string;
        };
        jungle_lake: {
            name: string;
            background: string;
        };
        jungle_river: {
            name: string;
            background: string;
        };
        jungle_shack: {
            name: string;
            background: string;
        };
        jungle_shack_rain: {
            name: string;
            background: string;
        };
        map: {
            name: string;
            background: string;
        };
        sunken_boat: {
            name: string;
            background: string;
        };
        crocodile_water: {
            name: string;
            background: string;
        };
        helicopter: {
            name: string;
            background: string;
        };
        helicopter2: {
            name: string;
            background: string;
        };
        game_over: {
            name: string;
            background: string;
        };
        end: {
            name: string;
            background: string;
        };
        fishing_area: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
    let sound: {
        relax: string;
        jungle: string;
        fight: string;
        deep_jungle: string;
        jungle_birds: string;
        river_jungle: string;
        jungle_insects: string;
        click: string;
        lightning: string;
        motorboat: string;
        rain: string;
        storm: string;
        waterfall: string;
        helicopter: string;
        flare_gun: string;
        gunshot: string;
    };
}
declare namespace Template {
    let transitions: {
        t12: {
            duration: number;
            alpha: string;
            edge: number;
        };
        t13: {
            duration: number;
            alpha: string;
            edge: number;
        };
        t19: {
            duration: number;
            alpha: string;
            edge: number;
        };
        diagonal: {
            duration: number;
            alpha: string;
            edge: number;
        };
        waves: {
            duration: number;
            alpha: string;
            edge: number;
        };
        fur: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
        t21: {
            duration: number;
            alpha: string;
            edge: number;
        };
        t24: {
            duration: number;
            alpha: string;
            edge: number;
        };
        t26: {
            duration: number;
            alpha: string;
            edge: number;
        };
        theatre_opening: {
            duration: number;
            alpha: string;
            edge: number;
        };
        cwtop: {
            duration: number;
            alpha: string;
            edge: number;
        };
        blur: {
            duration: number;
            alpha: string;
            edge: number;
        };
        goslow: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swipe: {
            duration: number;
            alpha: string;
            edge: number;
        };
        snake2: {
            duration: number;
            alpha: string;
            edge: number;
        };
        snake3: {
            duration: number;
            alpha: string;
            edge: number;
        };
        water: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wipe: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Template {
    function Eat(): ƒS.SceneReturn;
}
declare namespace Template {
    function Fishing_Meter(): ƒS.SceneReturn;
}
declare namespace Template {
    function Unlocksuitcase(): ƒS.SceneReturn;
}
declare namespace Template {
    function build_tools(): ƒS.SceneReturn;
}
declare namespace Template {
    function jungle(): ƒS.SceneReturn;
}
declare namespace Template {
    function jungle_map(): ƒS.SceneReturn;
}
declare namespace Template {
    function river(): ƒS.SceneReturn;
}
declare namespace Template {
    function shelter(): ƒS.SceneReturn;
}
declare namespace Template {
    function shelter_uncle_unconscious(): ƒS.SceneReturn;
}
declare namespace Template {
    function shrubs(): ƒS.SceneReturn;
}
declare namespace Template {
    function waterfall(): ƒS.SceneReturn;
}
declare namespace Template {
    function waterfall_final(): ƒS.SceneReturn;
}
declare namespace Template {
    function Labyrinth2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Labyrinth3(): ƒS.SceneReturn;
}
declare namespace Template {
    function Labyrinth_Beginning(): ƒS.SceneReturn;
}
declare namespace Template {
    function Labyrinth_Ending(): ƒS.SceneReturn;
}
declare namespace Template {
    function End(): ƒS.SceneReturn;
}
declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace Template {
    function boat_trip(): ƒS.SceneReturn;
}
declare namespace Template {
    function general_end(): ƒS.SceneReturn;
}
declare namespace Template {
    function heavy_rain(): ƒS.SceneReturn;
}
declare namespace Template {
    function lake_crocodile(): ƒS.SceneReturn;
}
declare namespace Template {
    function lifesaving_bad_ending(): ƒS.SceneReturn;
}
declare namespace Template {
    function lifesaving_ending(): ƒS.SceneReturn;
}
declare namespace Template {
    function lost_fight_crocodile_ending(): ƒS.SceneReturn;
}
declare namespace Template {
    function rain_shelter(): ƒS.SceneReturn;
}
declare namespace Template {
    function rain_stops(): ƒS.SceneReturn;
}
declare namespace Template {
    function victory_fight_crocodile(): ƒS.SceneReturn;
}
