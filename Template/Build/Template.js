"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    // Branching path zeigen, wie's geht; Szenenstruktur erklären
    window.addEventListener("load", start);
    function start(_event) {
        // Menü
        Template.gameMenu = Template.ƒS.Menu.create(Template.inGameMenu, Template.buttonFunctionalities, "gameMenu");
        let scenes = [
            { scene: Template.Introduction, name: "Introduction" },
            { scene: Template.boat_trip, name: "Visual_Novel begins" },
            { scene: Template.heavy_rain, name: "Catastrophe begins" },
            { scene: Template.rain_shelter, name: "Adventures begins" },
            { scene: Template.rain_stops, name: "rain stops" },
            { id: "Labyrinth_Beginning", scene: Template.Labyrinth_Beginning, name: "Labyrinth_Beginning" },
            { id: "Labyrinth2", scene: Template.Labyrinth2, name: "Labyrinth2" },
            { id: "Labyrinth3", scene: Template.Labyrinth3, name: "Labyrinth3" },
            { id: "Labyrinth_End", scene: Template.Labyrinth_Ending, name: "Labyrinth_End" },
            { id: "Shelter_Uncle_pain", scene: Template.shelter_uncle_unconscious, name: "Unterschlupf" },
            { id: "OpenSuitcase", scene: Template.Unlocksuitcase, name: "Minigame" },
            { id: "Map", scene: Template.jungle_map, name: "overview" },
            { id: "Shelter", scene: Template.shelter, name: "Unterschlupf" },
            { id: "Waterfall_End", scene: Template.lake_crocodile, name: "Wasserfall mit Krokodil" },
            { id: "build_tools", scene: Template.build_tools, name: "Wasserfall mit Krokodil" },
            { id: "Eat", scene: Template.Eat, name: "Essen" },
            { id: "Waterfall", scene: Template.waterfall, name: "Wasserfall" },
            { id: "Shrubs", scene: Template.shrubs, name: "Gebüsch" },
            { id: "Jungle", scene: Template.jungle, name: "Regenwald" },
            { id: "River", scene: Template.river, name: "Fluss" },
            { id: "Ending1", scene: Template.fight_crocodile, name: "Kampf Krokodil" },
            { id: "Ending2", scene: Template.Good_Bad_Ending_lifesaving, name: "Helicopter" }
            //{ scene: jungle_night, name: "rain stops" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Animationen für alle Szenen
    function LeftFightAnimation() {
        return {
            start: { translation: Template.ƒS.positionPercent(15, 140), color: Template.ƒS.Color.CSS("white", 0) },
            end: { translation: Template.ƒS.positionPercent(70, 140), color: Template.ƒS.Color.CSS("red") },
            duration: 1.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Template.LeftFightAnimation = LeftFightAnimation;
    function RightFightAnimationTiger() {
        return {
            start: { translation: Template.ƒS.positionPercent(80, 100), color: Template.ƒS.Color.CSS("white", 0) },
            end: { translation: Template.ƒS.positionPercent(20, 140), color: Template.ƒS.Color.CSS("red") },
            duration: 1.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Template.RightFightAnimationTiger = RightFightAnimationTiger;
    function EscapeAnimationTiger() {
        return {
            start: { translation: Template.ƒS.positionPercent(80, 100) },
            end: { translation: Template.ƒS.positionPercent(180, 140) },
            duration: 1.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Template.EscapeAnimationTiger = EscapeAnimationTiger;
    function shakingRightSide1() {
        return {
            start: { translation: Template.ƒS.positionPercent(80, 130) },
            end: { translation: Template.ƒS.positionPercent(78, 130) },
            duration: 0.25,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Template.shakingRightSide1 = shakingRightSide1;
    function shakingRightSide2() {
        return {
            start: { translation: Template.ƒS.positionPercent(78, 130) },
            end: { translation: Template.ƒS.positionPercent(82, 130) },
            duration: 0.25,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Template.shakingRightSide2 = shakingRightSide2;
    function fromOutofCanvasToLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(0, 140) },
            end: { translation: Template.ƒS.positionPercent(10, 140) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromOutofCanvasToLeft = fromOutofCanvasToLeft;
    function fromOutofCanvasToRight() {
        return {
            start: { translation: Template.ƒS.positionPercent(100, 140) },
            end: { translation: Template.ƒS.positionPercent(80, 140) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromOutofCanvasToRight = fromOutofCanvasToRight;
    function fromOutofCanvasToCenter() {
        return {
            start: { translation: Template.ƒS.positionPercent(40, 180) },
            end: { translation: Template.ƒS.positionPercent(40, 140) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromOutofCanvasToCenter = fromOutofCanvasToCenter;
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Stilfrage - Eigenen Styleguide für FS veröffentlichen? 
    Template.characters = {
        narrator: {
            name: " "
        },
        uncle: {
            name: "Onkel Ben",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/grandpa_angry.png",
                explain_angry: "./Images/Characters/grandpa_explains_2.png",
                explain: "./Images/Characters/grandpa_explains_2.png",
                discuss: "./Images/Characters/grandpa_discuss.png",
                pointing: "./Images/Characters/grandpa_pointing.png",
                backpain: "./Images/Characters/grandpa_backpain.png",
                disappointed: "./Images/Characters/grandpa_disappointed.png",
                fit: "./Images/Characters/grandpa_annoyed.png",
            }
        },
        girl: {
            name: "Jenna",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/girl_angry.png",
                angry_arm_crossed: "./Images/Characters/girl_angry_arm_across.png",
                annoyed: "./Images/Characters/girl_annoyed.png",
                desperate: "./Images/Characters/girl_desperate.png",
                laughing: "./Images/Characters/girl_laughing.png",
                pointing: "./Images/Characters/girl_discuss_sideview.png",
                discuss_angry: "./Images/Characters/girl_discuss_angry.png",
                explain: "./Images/Characters/girl_discuss.png ",
                discuss_2: "./Images/Characters/girl_discuss_2.png ",
                pointing_side: "./Images/Characters/girl_pointing.png",
                deny: "./Images/Characters/girl_no.png"
            }
        },
        boy: {
            name: "my name",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standby: "./Images/Characters/boy.png",
                discuss: "./Images/Characters/boy_discuss.png",
                discuss_sideview: "./Images/Characters/boy_discuss_sideview.png",
                discuss_angry: "./Images/Characters/boy_discuss_angry.png",
                explain: "./Images/Characters/boy_explains.png",
                pointing: "./Images/Characters/boy_pointing.png",
                laughing: "./Images/Characters/boy_laughing.png",
                disappointed: "./Images/Characters/boy_disappointed.png"
            }
        },
        crocodile: {
            name: "Tiger",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                aggressiv: "./Images/Characters/crocodile.png",
            }
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.dataForSave = {
        nameProtagonist: "",
        health: 100,
        power: 100,
        fitnessUncle: false,
        item_waterbottle: 0,
        item_acaiberry: 0,
        item_branch: 0,
        item_stone: 0,
        item_fish: 0,
        item_spear: 0,
        item_liane: 0,
        item_suitcase: false,
        open_suitcase: false,
        uncle_alive: true
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Menü 
    Template.inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        statistic: "Statistic",
        credit: "Credits"
    };
    function showStatistic() {
        Template.ƒS.Text.setClass("statistic");
        Template.ƒS.Text.print("Lebensenergie: " + Template.dataForSave.health + "<br>Lebenskraft: " + Template.dataForSave.power + "<br>");
    }
    Template.showStatistic = showStatistic;
    ;
    Template.inventory = false;
    // true = offen; false = geschlossen
    Template.menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Template.inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case Template.inGameMenu.close:
                Template.gameMenu.close();
                Template.menu = false;
                break;
            case Template.inGameMenu.statistic:
                showStatistic();
                break;
            case Template.inGameMenu.credit:
                console.log("Credits: XY");
                break;
        }
    }
    Template.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts für's Menü
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (Template.menu) {
                    console.log("Close");
                    Template.gameMenu.close();
                    Template.menu = false;
                }
                else {
                    console.log("Open");
                    Template.gameMenu.open();
                    Template.menu = true;
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.F2:
                if (Template.inventory) {
                    console.log("inventory close");
                    Template.ƒS.Inventory.close();
                    Template.inventory = false;
                }
                else {
                    console.log("inventory Open");
                    Template.ƒS.Inventory.open();
                    Template.inventory = true;
                }
                break;
        }
    }
    Template.hndKeyPress = hndKeyPress;
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Items
    Template.items = {
        liane: {
            name: "Liane",
            description: "liane",
            image: "./Images/Items/liane.png"
        },
        acaiberry: {
            name: "Acai Beeren",
            description: "acaiberry",
            image: "./Images/Items/blueberry.png"
        },
        redberries: {
            image: "./Images/Items/redberries.png"
        },
        berries: {
            name: "Blaubeeren",
            description: "blueberries",
            image: "./Images/Items/berries.png"
        },
        bonfire_fish: {
            name: "Fisch gebraten",
            description: "red berries",
            image: "./Images/Items/bonfire_fish.png"
        },
        branch: {
            name: "Holz",
            description: "branches",
            image: "./Images/Items/branch.png"
        },
        fish_1: {
            name: "Fisch 1",
            description: "fish_1",
            image: "./Images/Items/fish_1.png"
        },
        fish_2: {
            name: "Fisch 2",
            description: "fish_2",
            image: "./Images/Items/fish_23.png"
        },
        stone: {
            name: "Steine",
            description: "stone",
            image: "./Images/Items/stone.png"
        },
        waterbottle: {
            name: "Wasserflasche",
            description: "waterbottle",
            image: "./Images/Items/drink-water.png"
        },
        axe: {
            name: "Axt",
            description: "axe",
            image: "./Images/Items/axe.png"
        },
        lighter: {
            name: "Feuerzeug",
            description: "lighter",
            image: "./Images/Items/feuerzeug.png"
        },
        first_aid_kit: {
            name: "Erste Hilfe Kasten",
            description: "first-aid-kit",
            image: "./Images/Items/first-aid-kit.png"
        },
        spear: {
            name: "Speer",
            description: "spear",
            image: "./Images/Items/spear.png"
        },
        suitcase: {
            name: "Koffer",
            description: "spear",
            image: "./Images/Items/suitcase.png"
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.locations = {
        thunderstorm_1: {
            name: "jungle_1",
            background: "./Images/Backgrounds/thunderstorm_1.jpg"
        },
        thunderstorm_2: {
            name: "jungle_1",
            background: "./Images/Backgrounds/thunderstorm_2.jpg"
        },
        jungle_rain_1: {
            name: "jungle_1",
            background: "./Images/Backgrounds/jungle_path_rain_effect.jpg"
        },
        jungle_rain_2: {
            name: "jungle_1",
            background: "./Images/Backgrounds/jungle_path_rain_effect_2.jpg"
        },
        jungle_rain_3: {
            name: "jungle_1",
            background: "./Images/Backgrounds/jungle_path_rain_effect_3.jpg"
        },
        ferns: {
            name: "jungle_3",
            background: "./Images/Backgrounds/ferns.jpg"
        },
        jungle_startscreen: {
            name: "jungle_in_boat",
            background: "./Images/Backgrounds/jungle_3.jpg"
        },
        jungle_boat: {
            name: "jungle_in_boat",
            background: "./Images/Backgrounds/jungle_in_boat.jpg"
        },
        jungle_boat_rain: {
            name: "jungle_in_boat",
            background: "./Images/Backgrounds/boat_rain.jpg"
        },
        jungle_path_2: {
            name: "jungle_path_2",
            background: "./Images/Backgrounds/jungle_path_2.jpg"
        },
        jungle_path_3: {
            name: "jungle_path_3",
            background: "./Images/Backgrounds/jungle_path_3.jpg"
        },
        jungle_path_4: {
            name: "jungle_path_4",
            background: "./Images/Backgrounds/jungle_path_4.jpg"
        },
        path_rainforest: {
            name: "jungle_path_4",
            background: "./Images/Backgrounds/path_rainforest.jpg"
        },
        jungle_path: {
            name: "jungle_path",
            background: "./Images/Backgrounds/jungle_path.jpg"
        },
        jungle_lake: {
            name: "jungle_path",
            background: "./Images/Backgrounds/lake_rainforest.jpg"
        },
        jungle_river: {
            name: "jungle_river",
            background: "./Images/Backgrounds/jungle_river.jpg"
        },
        jungle_shack: {
            name: "jungle_shack",
            background: "./Images/Backgrounds/jungle_shack.jpg"
        },
        jungle_shack_rain: {
            name: "jungle_shack",
            background: "./Images/Backgrounds/jungle_shack_rain.jpg"
        },
        map: {
            name: "jungle",
            background: "./Images/Backgrounds/jungle_map.png"
        },
        sunken_boat: {
            name: "tiger in the lake",
            background: "./Images/Backgrounds/sunken_boat.jpg"
        },
        crocodile_water: {
            name: "crocodile_water",
            background: "./Images/Backgrounds/crocodile_water.jpg"
        },
        helicopter: {
            name: "helicopter",
            background: "./Images/Backgrounds/helicopter.jpg"
        },
        helicopter2: {
            name: "helicopter2",
            background: "./Images/Backgrounds/helicopter_2.jpg"
        },
        game_over: {
            name: "Game over",
            background: "./Images/Backgrounds/Game_Over.jpg"
        },
        end: {
            name: "Ende",
            background: "./Images/Backgrounds/Ende.jpg"
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sound = {
        // music
        relax: "./Audio/just_relax.mp3",
        jungle: "./Audio/jungle.mp3",
        fight: "./Audio/honor-and-sword.mp3",
        //environment
        deep_jungle: "./Audio/deep_jungle.wav",
        jungle_birds: "./Audio/jungle_birds.wav",
        river_jungle: "./Audio/river_jungle.mp3",
        jungle_insects: "./Audio/jungle_insects.mp3",
        // sound
        click: "./Audio/button_click.mp3",
        gunshot: "./Audio/gunshot.ogg",
        lightning: "./Audio/lightning.ogg",
        motorboat: "./Audio/motorboat.ogg",
        rain: "./Audio/rain.ogg",
        storm: "./Audio/storm.ogg",
        waterfall: "./Audio/rainforest_waterfall.mp3",
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.transitions = {
        t12: {
            duration: 1,
            alpha: "./Images/transitions/12.jpg",
            edge: 1
        },
        t13: {
            duration: 1,
            alpha: "./Images/transitions/13.jpg",
            edge: 1
        },
        t19: {
            duration: 1,
            alpha: "./Images/transitions/19.jpg",
            edge: 5
        },
        diagonal: {
            duration: 1,
            alpha: "./Images/transitions/24.png",
            edge: 1
        },
        waves: {
            duration: 1,
            alpha: "./Images/transitions/25.png",
            edge: 1
        },
        fur: {
            duration: 1,
            alpha: "./Images/transitions/fur.jpg",
            edge: 1
        },
        wet: {
            duration: 1,
            alpha: "./Images/transitions/wet.jpg",
            edge: 1
        },
        t21: {
            duration: 1,
            alpha: "./Images/transitions/21.jpg",
            edge: 1
        },
        t24: {
            duration: 1,
            alpha: "./Images/transitions/024.jpg",
            edge: 1
        },
        t26: {
            duration: 1,
            alpha: "./Images/transitions/026.png",
            edge: 1
        },
        theatre_opening: {
            duration: 1,
            alpha: "./Images/transitions/theatre_opening.jpg",
            edge: 2
        },
        cwtop: {
            duration: 1,
            alpha: "./Images/transitions/circlewipe-ccw.jpg",
            edge: 3
        },
        blur: {
            duration: 1,
            alpha: "./Images/transitions/blur.jpg",
            edge: 1
        },
        goslow: {
            duration: 1,
            alpha: "./Images/transitions/goslow.png",
            edge: 1
        },
        swipe: {
            duration: 1,
            alpha: "./Images/transitions/swipe.png",
            edge: 1
        },
        snake2: {
            duration: 1,
            alpha: "./Images/transitions/snakes.png",
            edge: 1
        },
        snake3: {
            duration: 1,
            alpha: "./Images/transitions/snake2.png",
            edge: 1
        },
        water: {
            duration: 1,
            alpha: "./Images/transitions/water.jpg",
            edge: 1
        },
        wipe: {
            duration: 1,
            alpha: "./Images/transitions/wipe.png",
            edge: 1
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Eat() {
        console.log("Boat river");
        let produce_tools = {
            eat: "Essen",
            drink: "Trinken",
            back: "Zurück"
        };
        let build_tools_request = await Template.ƒS.Menu.getInput(produce_tools, "options");
        switch (build_tools_request) {
            case produce_tools.eat:
                if (Template.dataForSave.item_acaiberry > 0) {
                    Template.dataForSave.health += 5;
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Lecker", true);
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Du hast kein Essen.", true);
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                break;
            case produce_tools.drink:
                if (Template.dataForSave.item_waterbottle > 0) {
                    Template.dataForSave.health += 2;
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Erfrischend!", true);
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Du hast kein Wasser mehr.", true);
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                break;
            case produce_tools.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                return "Shelter";
        }
    }
    Template.Eat = Eat;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Unlocksuitcase() {
        let text = {
            narrator: {
                T0000: "Wie ist der Code? <br>",
                T0001: "Die Zahl ist zu groß.",
                T0002: "Die Zahl ist zu klein.",
                T0003: "Es ist unmöglich diesen Koffer zu öffnen.",
                T0004: "Geschafft!. Eine Landkarte, eine Wasserflasche und ein Feuerzeug und eine Erste-Hilfe Kiste liegen im Koffer.",
                T0005: "Du kannst die Landkarte ansehen.",
            }
        };
        const randomInt = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        Template.ƒS.Text.print(randomInt.toString());
        let counter = 10;
        do {
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + "Anzahl der Versuche: " + counter + "<br>", true);
            let inputnumber = await Template.ƒS.Speech.getInput();
            let number = parseInt(inputnumber);
            if (number == randomInt) {
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004, true);
                Template.ƒS.Inventory.add(Template.items.lighter);
                Template.ƒS.Inventory.add(Template.items.waterbottle);
                Template.ƒS.Inventory.add(Template.items.first_aid_kit);
                Template.dataForSave.open_suitcase = true,
                    await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005, true);
                Template.ƒS.Character.hideAll();
                return "Map";
            }
            if (number > randomInt) {
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001, true);
                counter -= 1;
            }
            if (number < randomInt) {
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002, true);
                counter -= 1;
            }
        } while (counter > 0);
        if (counter == 0) {
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003, true);
            Template.ƒS.Character.hideAll();
            Template.dataForSave.open_suitcase = false;
            return "Shelter_Uncle_pain";
        }
    }
    Template.Unlocksuitcase = Unlocksuitcase;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function build_tools() {
        console.log("Boat river");
        let produce_tools = {
            axe: "Axt",
            spear: "Speer",
            back: "Zurück",
        };
        let build_tools_request = await Template.ƒS.Menu.getInput(produce_tools, "options");
        switch (build_tools_request) {
            case produce_tools.axe:
                if (Template.dataForSave.item_branch > 0 && Template.dataForSave.item_stone > 0) {
                    Template.ƒS.Inventory.add(Template.items.axe);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Axt ist hergestellt und ist im Inventar.", true);
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Es fehlt die benötigte Materialien: Mindestens 1x Holz, Mindestens 1x Stein", true);
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                break;
            case produce_tools.spear:
                if (Template.dataForSave.item_branch > 0 && Template.dataForSave.item_liane > 0) {
                    Template.ƒS.Inventory.add(Template.items.spear);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Holz Speer ist hergestellt und ist im Inventar.", true);
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Es fehlt die benötigte Materialien: Mindestens 1x Holz, Mindestens 1x Liane", true);
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                    return "Shelter";
                }
            case produce_tools.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                return "Shelter";
        }
    }
    Template.build_tools = build_tools;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function jungle() {
        console.log("Boat river");
        let action_choice = {
            search_wood: "Holz suchen",
            search_stone: "Steine suchen",
            back: "Zurück"
        };
        let text = {
            narrator: {
                T0000: "Holz gesammelt!",
                T0001: "Stein gesammelt!",
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.jungle_birds, 1);
        await Template.ƒS.Location.show(Template.locations.jungle_path_2);
        await Template.ƒS.update(Template.transitions.t13.duration, Template.transitions.t13.alpha, Template.transitions.t13.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "location_options");
        switch (action_request) {
            case action_choice.search_wood:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(50, 140));
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true);
                await Template.ƒS.update(1);
                Template.ƒS.Inventory.add(Template.items.branch);
                Template.ƒS.Text.print(Template.ƒS.Inventory.getAmount(Template.items.branch).toString());
                Template.dataForSave.item_branch += 1;
                Template.dataForSave.power -= 5,
                    Template.ƒS.Inventory.open;
                Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.sound.jungle_birds, 0, 1, false);
                return "Map";
                break;
            case action_choice.search_stone:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(50, 140));
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001, true);
                await Template.ƒS.update(1);
                Template.ƒS.Inventory.add(Template.items.stone);
                Template.dataForSave.item_stone += 1;
                Template.dataForSave.power -= 5,
                    Template.ƒS.Inventory.open;
                Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.sound.jungle_birds, 0, 1, false);
                return "Map";
                break;
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hide(Template.characters.boy);
                Template.ƒS.Sound.fade(Template.sound.jungle_birds, 0, 0.1);
                return "Map";
                break;
        }
    }
    Template.jungle = jungle;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function jungle_map() {
        console.log("Boat river");
        let location_choice = {
            location1: "1 Unterschlupf ",
            location2: "2 Fluss",
            location3: "3 Wald",
            location4: "4 Gebüsch",
            location5: "5 Wasserfall"
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.fade(Template.sound.jungle, 1, 6, true);
        await Template.ƒS.Location.show(Template.locations.map);
        await Template.ƒS.update(Template.transitions.goslow.duration, Template.transitions.goslow.alpha, Template.transitions.goslow.edge);
        await Template.ƒS.update(1);
        let location_request = await Template.ƒS.Menu.getInput(location_choice, "location_options");
        switch (location_request) {
            case location_choice.location1:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0.1, 6);
                return "Shelter";
                break;
            case location_choice.location2:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                return "River";
                break;
            case location_choice.location3:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                return "Jungle";
                break;
            case location_choice.location4:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                return "Shrubs";
                break;
            case location_choice.location5:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                return "Waterfall";
                break;
        }
    }
    Template.jungle_map = jungle_map;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function river() {
        console.log("Boat river");
        let action_choice = {
            collect_liane: "Liane sammeln",
            back: "Zurück"
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.river_jungle, 1);
        await Template.ƒS.Location.show(Template.locations.jungle_river);
        await Template.ƒS.update(Template.transitions.t12.duration, Template.transitions.t12.alpha, Template.transitions.t12.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "location_options");
        switch (action_request) {
            case action_choice.collect_liane:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Inventory.add(Template.items.liane);
                Template.dataForSave.item_liane += 1;
                Template.dataForSave.power -= 5,
                    Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.sound.river_jungle, 0, 1, false);
                return "Map";
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hide(Template.characters.boy);
                Template.ƒS.Sound.fade(Template.sound.river_jungle, 0, 1, false);
                return "Map";
                break;
        }
    }
    Template.river = river;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function shelter() {
        console.log("Boat river");
        let action_choice = {
            talk: "Unterhalten",
            eat: "Essen",
            produce: "Herstellen",
            back: "Zurück",
        };
        let text = {
            narrator: {
                T0000: "",
                T0001: "Das Land ist sehr gekannt für seine Natur und heißes Wetter.",
                T0002: "Nach dem langen Flug und stressigen Reise seid ihr endlich angekommmen.",
                T0003: "Am nächsten Tag macht deine Familie einen Bootausflug in den Regenwald. Da gibt es sehr viele Tiere und exotische Pflanzen.",
                T0004: "Wie ist dein Name?<br>",
            },
            boy: {
                T0000: "Aufwachen! Wir brauchen dich. ",
                T0001: "<i>Vielleicht gibt es eine Pflanze, die hilft.</i>",
                T0002: "Das ist echt blöd. Ich hoffe wir werden unseren Ausflug nicht abbrechen.",
                T0003: "Einverstanden. Mir wird es auch langsam schlecht.",
                T0004: "Du bist der Beste Onkel Ben.",
            },
            girl: {
                T0000: "Ich habe Hunger. Was gibt es hier zum essen?",
                T0001: "Ich habe leider keinen Regenschirm mitgenommen.",
                T0002: "Das wäre ziemlich schade. Wir sind so weit gereist.",
            },
            uncle: {
                T0000: "...",
                T0001: "Wir sollten was zum essen holen.",
                T0002: "Wie gesagt es wird bald vorbei sein. Mach euch keinen Kopf. Wir haben genug Zeit.",
                T0003: "Wir sollten vielleicht eine Pause einlegen. Auf dem Wasser ist es gefährlich wegen den Wellen",
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.jungle, 1);
        await Template.ƒS.Location.show(Template.locations.jungle_shack);
        await Template.ƒS.update(Template.transitions.diagonal.duration, Template.transitions.diagonal.alpha, Template.transitions.diagonal.edge);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.angry_arm_crossed, Template.ƒS.positionPercent(20, 140));
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.fit, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.update(1);
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "location_options");
        switch (action_request) {
            case action_choice.talk:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
                return "Shelter";
                break;
            case action_choice.eat:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                return "Eat";
                break;
            case action_choice.produce:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                return "build_tools";
                break;
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                Template.ƒS.Character.hideAll();
                return "Map";
                break;
        }
    }
    Template.shelter = shelter;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function shrubs() {
        console.log("Boat river");
        let text = {
            boy: {
                T0000: "Mal sehen, ob wir was zu essen finden.",
                T0001: "Es gibts leider nichts",
                T0002: "Yes. Wenigstens etwas Beeren!",
                T0003: "<i>Vielleicht finde ich was beim nächsten Mal.</i>",
            }
        };
        let action_choice = {
            search_berries: "Beeren sammeln",
            back: "Zurück",
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.jungle_insects, 1);
        await Template.ƒS.Location.show(Template.locations.ferns);
        await Template.ƒS.update(Template.transitions.fur.duration, Template.transitions.fur.alpha, Template.transitions.fur.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.update(1);
        let random_boolean = Math.random() < 0.5;
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "location_options");
        switch (action_request) {
            case (action_choice.search_berries):
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                if (random_boolean == true) {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.laughing, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
                    await Template.ƒS.update(1);
                    Template.ƒS.Inventory.add(Template.items.acaiberry);
                    Template.dataForSave.item_acaiberry += 1;
                    Template.dataForSave.power -= 5,
                        Template.ƒS.Inventory.open;
                }
                else {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.disappointed, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
                    Template.dataForSave.power -= 5,
                        await Template.ƒS.update(1);
                }
                Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.sound.jungle_insects, 0, 0.1);
                return "Map";
            // return "Ende";     
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.sound.jungle_insects, 0, 0.1);
                return "Map";
                break;
        }
    }
    Template.shrubs = shrubs;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function waterfall() {
        console.log("Boat river");
        let action_choice = {
            fish: "Fischen",
            explore: "Erkunden",
            back: "Zurück",
        };
        let text = {
            boy: {
                T0000: "Mal sehen, ob wir was zu essen finden.",
                T0001: "Die Fische schwimmen viel zu schnell.",
                T0002: "Aye! Geschafft!",
                T0003: "<i>Anscheinend fehlt mir ein Werkzeug oder ich brauche mehr Übungen...</i>",
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.waterfall, 1);
        await Template.ƒS.Location.show(Template.locations.jungle_lake);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        let random_boolean = Math.random() < 0.75;
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "location_options");
        switch (action_request) {
            case action_choice.fish:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                if (random_boolean == true && Template.dataForSave.item_spear > 0) {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.laughing, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
                    await Template.ƒS.update(1);
                    Template.ƒS.Inventory.add(Template.items.fish_1);
                    Template.dataForSave.item_fish += 1;
                    Template.dataForSave.power -= 5,
                        Template.ƒS.Inventory.open;
                }
                else {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.disappointed, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
                    await Template.ƒS.update(1);
                }
                Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 1, false);
                return "Map";
                // return "Ende";   
                break;
            case action_choice.explore:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                if (random_boolean == true) {
                    Template.ƒS.Character.hideAll();
                    Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 1, false);
                    return "Waterfall_End";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Hier gibt es nichts zu sehen. Vielleicht wann anders.", true);
                    Template.ƒS.Character.hideAll();
                    Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 1, false);
                    await Template.ƒS.update(1);
                    return "Map";
                }
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hide(Template.characters.boy);
                Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 1, false);
                return "Map";
                break;
        }
    }
    Template.waterfall = waterfall;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Labyrinth2() {
        let PathDecision = {
            left: "⟵ links",
            right: "rechts ⟶"
        };
        await Template.ƒS.Location.show(Template.locations.jungle_path_2);
        await Template.ƒS.update(Template.transitions.snake3.duration, Template.transitions.snake3.alpha, Template.transitions.snake3.edge);
        let pathchoice = await Template.ƒS.Menu.getInput(PathDecision, "location_options");
        switch (pathchoice) {
            case PathDecision.left:
                return "Labyrinth3";
                break;
            case PathDecision.right:
                return "Labyrinth_End";
                break;
        }
    }
    Template.Labyrinth2 = Labyrinth2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Labyrinth3() {
        let PathDecision = {
            left: "⟵ links",
            right: "rechts ⟶"
        };
        await Template.ƒS.Location.show(Template.locations.jungle_path_3);
        await Template.ƒS.update(Template.transitions.wipe.duration, Template.transitions.wipe.alpha, Template.transitions.wipe.edge);
        let pathchoice = await Template.ƒS.Menu.getInput(PathDecision, "location_options");
        switch (pathchoice) {
            case PathDecision.left:
                return "Labyrinth2";
                break;
            case PathDecision.right:
                return "Labyrinth_Beginning";
                break;
        }
    }
    Template.Labyrinth3 = Labyrinth3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Labyrinth_Beginning() {
        let PathDecision = {
            left: "⟵ links",
            right: "rechts ⟶"
        };
        let text = {
            boy: {
                T0000: "<i>Wie war nochmal der Weg? Es ist so verwirrend.</i>"
            },
        };
        await Template.ƒS.Location.show(Template.locations.jungle_path);
        await Template.ƒS.update(Template.transitions.snake2.duration, Template.transitions.snake2.alpha, Template.transitions.snake2.edge);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        let pathchoice = await Template.ƒS.Menu.getInput(PathDecision, "location_options");
        switch (pathchoice) {
            case PathDecision.left:
                return "Labyrinth3";
                break;
            case PathDecision.right:
                return "Labyrinth2";
                break;
        }
    }
    Template.Labyrinth_Beginning = Labyrinth_Beginning;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Labyrinth_Ending() {
        let text = {
            boy: {
                T0000: "AH! iCh habe die Stelle gefunden.",
                T0001: "<i>Mist! Das Wasser hat unser Boot weg getrieben.</i>",
                T0002: "<i>Oh was ist das? Ein Koffer?!</i>",
                T0003: "<i>Ein Koffer?! Oh, er ist mit Zahlen verschlossen. Vielleicht kann Jenna mir weiterhelfen. Lass zurück gehen.</i>",
            }
        };
        Template.ƒS.Location.show(Template.locations.sunken_boat);
        Template.ƒS.update(Template.transitions.waves.duration, Template.transitions.waves.alpha, Template.transitions.waves.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(15, 140));
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        //animation
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
        Template.ƒS.Inventory.add(Template.items.suitcase);
        Template.dataForSave.item_suitcase = true;
        Template.dataForSave.open_suitcase = false,
            Template.ƒS.Inventory.open;
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
        Template.ƒS.Character.hideAll();
    }
    Template.Labyrinth_Ending = Labyrinth_Ending;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Good_Bad_Ending_lifesaving() {
        Template.ƒS.Sound.play(Template.sound.jungle, 1);
        await Template.ƒS.Location.show(Template.locations.jungle_shack);
        await Template.ƒS.update(Template.transitions.diagonal.duration, Template.transitions.diagonal.alpha, Template.transitions.diagonal.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(15, 140));
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.angry_arm_crossed, Template.ƒS.positionPercent(75, 140));
        await Template.ƒS.update(1);
        if (Template.dataForSave.uncle_alive == true) {
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Location.show(Template.locations.helicopter);
            await Template.ƒS.update(Template.transitions.diagonal.duration, Template.transitions.diagonal.alpha, Template.transitions.diagonal.edge);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Der Junge und das Mädchen konnten von dem Tiger fliehen. Aber von dem alten Mann fehlt jeder Spur...", true);
            await Template.ƒS.Character.hide(Template.characters.crocodile);
            await Template.ƒS.Location.show(Template.locations.end);
            await Template.ƒS.update(Template.transitions.t19.duration, Template.transitions.t19.alpha, Template.transitions.t19.edge);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Deine Cousine und du konnten überleben. Hätte der Onkel auch überleben können?", true);
            await Template.ƒS.update(1);
        }
        else {
            await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.backpain, Template.ƒS.positionPercent(45, 140));
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Location.show(Template.locations.helicopter);
            await Template.ƒS.update(Template.transitions.diagonal.duration, Template.transitions.diagonal.alpha, Template.transitions.diagonal.edge);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Alle konnten sich von dem Tiger schützen. Die Helicopter kommt genau zur richtigen Zeit. Das Rettungteam sieht die Überlebenden und bringen nach Hause.", true);
            await Template.ƒS.Character.hide(Template.characters.crocodile);
            await Template.ƒS.Location.show(Template.locations.end);
            await Template.ƒS.update(Template.transitions.t19.duration, Template.transitions.t19.alpha, Template.transitions.t19.edge);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Glückwunsch! Alle haben dank deine Hilfe die Wildnis überlebt.", true);
            await Template.ƒS.update(1);
        }
    }
    Template.Good_Bad_Ending_lifesaving = Good_Bad_Ending_lifesaving;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function boat_trip() {
        console.log("Game starts");
        let text = {
            boy: {
                T0000: "Endlich sind wir da! Die Reise war anstrengend.",
                T0001: "Durch die Bootsfahrt ist angenehmner wegen dem Gegenwind.",
                T0002: "Ich bin gespannt, was wir heute sehen werden. Ich hoffe wir haben Glück und können Tiere sehen.",
                T0003: "Oh nein. Das habe ich im Zimmer vergessen.",
                T0004: "Du bist der Beste, Onkel Ben."
            },
            girl: {
                T0000: "Ich freue mich, dass wir endlich hier sind. Das Wetter hier habe ich komplett unterschätzt. Es ist viel zu heiß.",
                T0001: "Oh ja. Das tut gut.",
                T0002: "Da bin ich ganz deiner Meinung.",
                T0003: "Das ist wieder mal typisch von dir. Ich werde dir nichts geben. Du bist selber schuld.",
            },
            uncle: {
                T0000: "Schönes Wetter heute. Wenn wir schonmal hier sind, sollten unbedingt den Regenwald sehen.",
                T0001: "Das hoffe ich auch.",
                T0002: "Da es hier ein Naturschutzgebiet ist, leben hier viele Tiere friedlich miteinander.",
                T0003: "Ihr sollte auf eure Gesundheit achten. Bei diesem Wetter solltet ihr viel Wasser trinken. Ich hoffe ihr habt eure Wasserflasche dabei.",
                T0004: "Beruhigt euch. Gott sei dank habe ich zwei Wasserflasche dabei."
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.fade(Template.sound.motorboat, 0.2, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.jungle_boat);
        await Template.ƒS.update(Template.transitions.theatre_opening.duration, Template.transitions.theatre_opening.alpha, Template.transitions.theatre_opening.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.pointing, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.update(1);
        //Animation girl
        await Template.ƒS.Character.animate(Template.characters.girl, Template.characters.girl.pose.angry_arm_crossed, Template.fromOutofCanvasToLeft());
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.explain, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0004, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0004, true);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.sound.motorboat, 0, 0.1, true);
        await Template.ƒS.update(1);
    }
    Template.boat_trip = boat_trip;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function fight_crocodile() {
        if (Template.dataForSave.health < 75 && Template.dataForSave.power < 75) {
            await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.fit, Template.ƒS.positionPercent(15, 140));
            await Template.ƒS.Character.show(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.ƒS.positionPercent(70, 80));
            await Template.ƒS.update(1);
            await Template.ƒS.Character.animate(Template.characters.uncle, Template.characters.uncle.pose.fit, Template.LeftFightAnimation());
            await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(15, 140));
            await Template.ƒS.update(1);
            await Template.ƒS.Character.animate(Template.characters.boy, Template.characters.boy.pose.standby, Template.LeftFightAnimation());
            await Template.ƒS.update(1);
            await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.angry_arm_crossed, Template.ƒS.positionPercent(15, 140));
            await Template.ƒS.update(1);
            await Template.ƒS.Character.animate(Template.characters.girl, Template.characters.girl.pose.angry_arm_crossed, Template.LeftFightAnimation());
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Leider waren alle körperlich zu schwach, um gegen den Tiger zu verteidigen.", true);
            await Template.ƒS.Character.hide(Template.characters.crocodile);
            await Template.ƒS.Location.show(Template.locations.game_over);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Versuch es nächstes Mal besser!", true);
            await Template.ƒS.update(Template.transitions.t19.duration, Template.transitions.t19.alpha, Template.transitions.t19.edge);
            await Template.ƒS.update(1);
        }
        else {
            Template.dataForSave.uncle_alive = true;
            await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.fit, Template.ƒS.positionPercent(15, 140));
            await Template.ƒS.Character.show(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.ƒS.positionPercent(80, 100));
            await Template.ƒS.update(1);
            await Template.ƒS.Character.animate(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.RightFightAnimationTiger());
            await Template.ƒS.Character.animate(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.EscapeAnimationTiger());
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Das Krokodil ist geflüchtet", true);
            await Template.ƒS.Character.hide(Template.characters.crocodile);
            await Template.ƒS.Location.show(Template.locations.game_over);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Versuch es nächstes Mal besser!", true);
            await Template.ƒS.update(Template.transitions.t19.duration, Template.transitions.t19.alpha, Template.transitions.t19.edge);
            await Template.ƒS.update(1);
            return "Ending2";
        }
    }
    Template.fight_crocodile = fight_crocodile;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function heavy_rain() {
        console.log("Rain");
        let text = {
            narrator: {
                T0000: "Wie aus dem Nichts wird der Himmel dunkel. ",
                T0001: "Das Land ist sehr gekannt für seine Natur und heißes Wetter.",
                T0002: "Nach dem langen Flug und stressigen Reise seid ihr endlich angekommmen.",
                T0003: "Am nächsten Tag macht deine Familie einen Bootausflug in den Regenwald. Da gibt es sehr viele Tiere und exotische Pflanzen.",
                T0004: "Wie ist dein Name?<br>"
            },
            boy: {
                T0000: "Hä! was ist los. Auf einmal ist es dunkel.",
                T0001: "Hoffentlich darauf war ich nicht vorbereitet.",
                T0002: "Das ist echt blöd. Ich hoffe wir werden unseren Ausflug nicht abbrechen.",
                T0003: "Einverstanden. Mir wird es auch langsam schlecht.",
                T0004: "Du bist der Beste Onkel Ben."
            },
            girl: {
                T0000: "Oh jee! Ich verstehe das nicht. Warum gibt es so ein Wetterumschwung.",
                T0001: "Ich habe leider keinen Regenschirm mitgenommen.",
                T0002: "Das wäre ziemlich schade. Wir sind so weit gereist.",
                T0003: "Ja bitte."
            },
            uncle: {
                T0000: "Da es hier zur Zeit Regenzeit ist, ist es normal das es auf einmal regnet.",
                T0001: "Ihr sollte euch keine Sorgen machen. Der Regen ist schnell wieder vorbei.",
                T0002: "Wie gesagt es wird bald vorbei sein. Mach euch keinen Kopf. Wir haben genug Zeit.",
                T0003: "Wir sollten vielleicht eine Pause einlegen. Auf dem Wasser ist es gefährlich wegen den Wellen",
                T0004: "Beruhigt euch. Gott sei dank habe ich zwei Wasserflasche dabei."
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.lightning, 1);
        await Template.ƒS.Location.show(Template.locations.thunderstorm_1);
        await Template.ƒS.update(Template.transitions.t24.duration, Template.transitions.t24.alpha, Template.transitions.t24.edge);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.rain, 5, 0.2, false);
        await Template.ƒS.Location.show(Template.locations.jungle_boat_rain);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.explain, Template.ƒS.positionPercent(80, 130));
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.desperate, Template.ƒS.positionPercent(20, 130));
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.explain, Template.ƒS.positionPercent(50, 130));
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0003, true);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.thunderstorm_2);
        Template.ƒS.Sound.fade(Template.sound.rain, 0, 0.1);
        await Template.ƒS.update(1);
    }
    Template.heavy_rain = heavy_rain;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Introduction() {
        console.log("Game starts");
        Template.ƒS.Speech.setTickerDelays(20, 2);
        await Template.ƒS.Location.show(Template.locations.jungle_startscreen);
        await Template.ƒS.update(Template.transitions.t19.duration, Template.transitions.t19.alpha, Template.transitions.t19.edge);
        await Template.ƒS.update(1);
        Template.ƒS.Text.setClass("statistic");
        Template.ƒS.Text.print("<p> Willkommen zum Jungle Survival! </p> <p> Diese Visual Novel basiert auf deine Entscheidungen und Fähigkeit.<br> Hier spielt der Zufall eine Rolle, daher kann es sein, dass man bestimmte Szene abspielen,<br>  muss um das gewünschte Ergebnis erreichen.<br> Mit einem Click auf dem Bildschirm, kommt man in der nächsten Szene weiter. <br> Für den Vollbildschirm, könnt ihr Folgendes drücken: </p> <p> Windows: F11 <br> Mac: Ctrl - Cmd – F </p> </p> <p> Viel Spaß! </p>");
        await Template.ƒS.Speech.tell(null, null, true);
        Template.ƒS.Text.print("<p> Du spielst die Rolle eines Jungen,der gemeinsam <br> mit seinem Onkel und seiner Cousine Urlaub machst.<br>");
        await Template.ƒS.Speech.tell(null, null, true);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Wie möchtest du im Spiel genannt werden?<br> ", true);
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        Template.characters.boy.name = Template.dataForSave.nameProtagonist;
        Template.ƒS.Text.print("<p> Das Spiel beginnt!</p>");
        await Template.ƒS.Speech.tell(null, null, true);
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
// namespace Template {
//     export async function jungle_night(): ƒS.SceneReturn {
//       console.log("Game starts");
//       let text = {
//         narrator: {
//           T0000: "In der Nacht ist es sehr dunkel.Man kann kaum was sehen."
//         },
//         boy: {
//           T0000: "Endlich sind wir da! Die Reise war echt hart.",
//           T0001: "Durch die Bootsfahrt ist angenehmner wegen dem Gegenwind.",
//           T0002: "Ich bin gespannt, was wir heute sehen werden. Ich hoffe wir haben Glück und können Tiere sehen.",
//           T0003: "Oh nein. Das habe ich im Zimmer vergessen.",
//           T0004: "Du bist der Beste, Onkel Ben."
//         },
//         girl: {
//           T0000: "Hier ist ist echt gruselig. Ich kann so nicht schlafen.",
//           T0001: "Oh ja. Das tut gut.",
//           T0002: "Da bin ich ganz deiner Meinung.",
//           T0003: "Das ist wieder mal typisch von dir. Ich werde dir nichts geben. Du bist selber schuld.",
//         },
//         uncle: { 
//           T0000: "Schönes Wetter heute. Wenn wir schonmal hier sind, sollten unbedingt den Regenwald sehen.",
//           T0001: "Das hoffe ich auch.",
//           T0002: "Da es hier ein Naturschutzgebiet ist, leben hier viele Tiere friedlich miteinander.",
//           T0003: "Ihr sollte auf eure Gesundheit achten. Bei diesem Wetter solltet ihr viel Wasser trinken. Ich hoffe ihr habt eure Wasserflasche dabei.",
//           T0004: "Beruhigt euch. Gott sei dank habe ich zwei Wasserflasche dabei."
//         }
//       };
//     ƒS.Speech.setTickerDelays(20, 2);
//     ƒS.Sound.play(sound.deep_jungle, 1, true); 
//     await ƒS.Location.show(locations.jungle_night_1);    
//     await ƒS.update(transitions.t21.duration, transitions.t21.alpha, transitions.t21.edge);
//     await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true);
//     await ƒS.Character.animate(characters.boy, characters.boy.pose.standby, fromOutofCanvasToRight());
//     await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
//     await ƒS.update(1);
//     //Animation girl
//     await ƒS.Character.animate(characters.girl, characters.girl.pose.desperate, fromOutofCanvasToLeft());
//     await ƒS.update(1);
//     await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
//     await ƒS.Character.animate(characters.uncle, characters.uncle.pose.backpain, fromOutofCanvasToCenter());
//     await ƒS.update(1);
//     ƒS.Character.hideAll();
//     ƒS.Sound.fade(sound.motorboat, 0, 0.1, true); 
//     await ƒS.update(1);
//   }
//   }
var Template;
(function (Template) {
    async function lake_crocodile() {
        console.log("Endscene");
        let text = {
            narrator: {
                T0000: "Dein Onkel und deine Cousine kommen dir zu Hilfe.",
                T0001: "",
                T0002: "",
                T0003: "",
            },
            boy: {
                T0000: "Hier gibt es frisches Wasser.",
                T0001: "Was ist das?! Ein TIGER!!",
                T0002: "Aye! Geschafft!",
                T0003: "<i>Anscheinend fehlt mir ein Werkzeug oder ich brauche mehr Übungen...</i>",
            },
            uncle: {
                T0000: "Er will vielleicht nur Wasser trinken. Lass uns abhauen.",
                T0001: "Oh er ist ziemlich aggressiv. Geht ihr zurück. Ich mache das schon.",
                T0002: "",
                T0003: "",
            },
            girl: {
                T0000: "Oh nein. Das hat uns noch gerade gefehlt.",
                T0001: "Lass uns schnell weggehen, " + Template.characters.boy.name,
                T0002: "",
                T0003: "",
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.fade(Template.sound.waterfall, 1, 6);
        await Template.ƒS.Location.show(Template.locations.jungle_lake);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.crocodile_water);
        await Template.ƒS.update(Template.transitions.swipe.duration, Template.transitions.swipe.alpha, Template.transitions.swipe.edge);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        await Template.ƒS.Location.show(Template.locations.jungle_lake);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.show(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.explain, Template.ƒS.positionPercent(10, 150));
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.fit, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.desperate, Template.ƒS.positionPercent(30, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        let action_choice = {
            stay: "Mit Onkel bleiben.",
            flee: "Mit der Schwester wegrennen.",
        };
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "location_options");
        switch (action_request) {
            case (action_choice.stay):
                await Template.ƒS.Character.hideAll();
                return "Ending1";
            // return "Ende";     
            case action_choice.flee:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.sound.jungle_insects, 0, 0.1);
                return "Ending2";
                break;
        }
    }
    Template.lake_crocodile = lake_crocodile;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function rain_shelter() {
        console.log("Rain");
        let text = {
            narrator: {
                T0000: "Wie aus dem Nichts wird der Himmel dunkel. ",
                T0001: "Das Land ist sehr gekannt für seine Natur und heißes Wetter.",
                T0002: "Nach dem langen Flug und stressigen Reise seid ihr endlich angekommmen.",
                T0003: "Am nächsten Tag macht deine Familie einen Bootausflug in den Regenwald. Da gibt es sehr viele Tiere und exotische Pflanzen.",
                T0004: "Wie ist dein Name?<br>"
            },
            boy: {
                T0000: "Was ein starker Regen! Es wird immer schlimmer!",
                T0001: "Ich habe zwar mein Handy dabei. Der Akku ist leer, weil ich die ganze Zeit fotografiert habe.",
                T0002: "Du bist auch nicht viel besser. Du benutzt ein Handy mit einem beschädigten Display. Kein Wunder, dass das Handy Wasserschade hat.",
                T0003: "Was sind denn unsere nächsten Schritte?",
                T0004: "Du bist der Beste Onkel Ben."
            },
            girl: {
                T0000: "Oh nein! Was sollen wir nur machen. So habe ich mein Urlaub nicht vorgestellt.",
                T0001: "Ja zum Glück habe ich meins dabei. Wir sollten den Notruf anrufen.",
                T0002: "Nein, mein Handy hat Wasserschaden. Es lässt sich nicht einschalten.",
                T0003: "Oh Man! Du bist echt nicht mehr zu helfen! Was würdest du nur tun, wenn du alleine verreist wärst.",
                T0004: "Sieh mal da drüben ist Schutz. Lass uns hingehen!"
            },
            uncle: {
                T0000: "Wir sollten uns eine Unterkunft oder Schutz suchen. So können wir nicht zum Hotel fahren!",
                T0001: "Das Motor von dem Boot funktioniert nicht. Wir können das Boot nicht mehr nutzen.",
                T0002: "Die Wellen sind viel zu stark. Wir sollten abwarten.",
                T0003: "Habt ihr vielleicht Handyempfang. Mein Handy habe ich wohl von dem Bootsfahrt verloren.",
                T0004: "Streitet euch nicht. Es hilft keinem weiter. Wir sollten uns auf unsere nächsten Schritte konzentrieren.",
                T0005: "In der Zwischenzeit können wir uns nur nach Unterkunft schauen. Haltet eure Augen offen!",
                T0006: "Gehen wir!"
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.lightning, 1);
        await Template.ƒS.Location.show(Template.locations.jungle_rain_1);
        await Template.ƒS.update(Template.transitions.t21.duration, Template.transitions.t21.alpha, Template.transitions.t21.edge);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.storm, 2, 0.2, false);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.explain, Template.ƒS.positionPercent(15, 130));
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.annoyed, Template.ƒS.positionPercent(80, 130));
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.animate(Template.characters.girl, Template.characters.girl.pose.annoyed, Template.shakingRightSide1());
        //await ƒS.Character.animate(characters.girl, characters.girl.pose.annoyed, shakingRightSide2());
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.explain_angry, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0004, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0005, true);
        await Template.ƒS.Character.hide(Template.characters.girl);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.pointing, Template.ƒS.positionPercent(85, 128));
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0004, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0006, true);
        Template.ƒS.Sound.play(Template.sound.lightning, 1);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.sound.storm, 0, 0.1);
        await Template.ƒS.Location.show(Template.locations.jungle_shack_rain);
        await Template.ƒS.update(Template.transitions.t26.duration, Template.transitions.t26.alpha, Template.transitions.t26.edge);
        await Template.ƒS.update(1);
    }
    Template.rain_shelter = rain_shelter;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function rain_stops() {
        console.log("Rain");
        let text = {
            narrator: {
                T0000: "Der Regen hört langsam auf.",
            },
            boy: {
                T0000: "Genug geschlafen! Lass uns geschlafen. Lass uns endlich zum Hotel zurückfahren.",
                T0001: "",
                T0002: "Nein! Das Wasser hat unser Boot weg getrieben.",
                T0003: "Uncle Ben, wach auf!",
                T0004: "Ruhig bleiben! Ich schaue mal nach dem Boot. Vielleicht gibt es etwas, was uns weiterhilft.",
            },
            girl: {
                T0000: "Was für ein ereignisreicher Tag!",
                T0001: "Ja! Es war ein schreckliches Erlebnis.",
                T0002: "Wir sind hier in der Wildnis gefangen.",
                T0003: "Lass uns zurückgehen und einen Plan überlegen.",
                T0004: "Er ist ohnmächtig geworden. Wir müssen ihn wecken.",
                T0005: "Sei bitte vorsichtig. Ich bleibe hier und passe auf Onkel Ben auf."
            },
            uncle: {
                T0000: "Das war ziemlich anstrengend. Ich bin körperlich fertig.",
                T0001: "Wie sollten uns ausruhen.",
                T0002: "...",
            }
        };
        Template.dataForSave.health = 50;
        Template.dataForSave.power = 50;
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Text.print("Es hat aufgehört zu regnen...");
        await Template.ƒS.Speech.tell(null, null, true);
        await Template.ƒS.Location.show(Template.locations.jungle_shack);
        await Template.ƒS.update(Template.transitions.cwtop.duration, Template.transitions.cwtop.alpha, Template.transitions.cwtop.edge);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.backpain, Template.ƒS.positionPercent(45, 150));
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.angry_arm_crossed, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.standby, Template.ƒS.positionPercent(15, 140));
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0004, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0004, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0005, true);
        await Template.ƒS.update(1);
        Template.ƒS.Character.hideAll();
    }
    Template.rain_stops = rain_stops;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function shelter_uncle_unconscious() {
        console.log("Boat river");
        let text = {
            narrator: {
                T0000: "Du leistest die Erste Hilfe an Onkel an.",
                T0001: "Dein Onkel gehts wieder besser.",
                T0002: "",
                T0003: "",
                T0004: "",
            },
            boy: {
                T0000: "Aufwachen! Wir brauchen dich. ",
                T0001: "<i>Vielleicht gibt es eine Pflanze, die hilft.</i>",
                T0002: "Das ist echt blöd. Ich hoffe wir werden unseren Ausflug nicht abbrechen.",
                T0003: "Einverstanden. Mir wird es auch langsam schlecht.",
                T0004: "Du bist der Beste Onkel Ben.",
            },
            girl: {
                T0000: "Keine Chance. Er schläft tief und fest. Wir brauchen ein Gegenmittel.",
                T0001: "Ich habe leider keinen Regenschirm mitgenommen.",
                T0002: "Das wäre ziemlich schade. Wir sind so weit gereist.",
                T0003: "Ein Koffer, das mit Zahlen verschlossen ist. Es ist eine Zahl zwischen 1 - 100. Versuche es mal. Du hast 10 Chancen.",
                T0004: Template.characters.boy.name + ", Du bist ein Lebensretter.",
            },
            uncle: {
                T0000: "...",
                T0001: "Ihr sollte euch keine Sorgen machen. Der Regen ist schnell wieder vorbei.",
                T0002: "Wie gesagt es wird bald vorbei sein. Mach euch keinen Kopf. Wir haben genug Zeit.",
                T0003: "Wir sollten vielleicht eine Pause einlegen. Auf dem Wasser ist es gefährlich wegen den Wellen",
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.fade(Template.sound.jungle, 1, 6);
        await Template.ƒS.Location.show(Template.locations.jungle_shack);
        await Template.ƒS.update(Template.transitions.diagonal.duration, Template.transitions.diagonal.alpha, Template.transitions.diagonal.edge);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.angry_arm_crossed, Template.ƒS.positionPercent(20, 140));
        //await ƒS.Character.animate(characters.girl, characters.girl.pose.angry_arm_crossed, shakingLeftSide());
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.backpain, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.update(1);
        if (Template.dataForSave.open_suitcase == true) {
            let action_choice_uncle_pain = {
                heal_uncle: "Onkel heilen",
                back: "Zurück"
            };
            let action_request_pain_uncle = await Template.ƒS.Menu.getInput(action_choice_uncle_pain, "location_options");
            switch (action_request_pain_uncle) {
                case action_choice_uncle_pain.heal_uncle:
                    Template.ƒS.Sound.play(Template.sound.click, 1);
                    await Template.ƒS.Character.hideAll();
                    await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.laughing, Template.ƒS.positionPercent(20, 140));
                    await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001, true);
                    await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.fit, Template.ƒS.positionPercent(80, 140));
                    await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0004, true);
                    Template.dataForSave.fitnessUncle = true;
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 1, false);
                    Template.ƒS.Character.hideAll();
                    return "Shelter";
                    break;
                case action_choice_uncle_pain.back:
                    Template.ƒS.Sound.play(Template.sound.click, 1);
                    Template.ƒS.Character.hideAll();
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 1, false);
                    return "Map";
                    break;
            }
        }
        else {
            let action_choice_uncle_pain = {
                arouse_uncle: "Onkel aufwecken",
                open_suitcase: "Über den Koffer sprechen.",
            };
            let action_request_pain_uncle = await Template.ƒS.Menu.getInput(action_choice_uncle_pain, "location_options");
            switch (action_request_pain_uncle) {
                case action_choice_uncle_pain.arouse_uncle:
                    Template.ƒS.Sound.play(Template.sound.click, 1);
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
                    await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
                    await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
                    Template.ƒS.Sound.fade(Template.sound.jungle, 0, 1, false);
                    return "Shelter_Uncle_pain";
                    break;
                case action_choice_uncle_pain.open_suitcase:
                    if (Template.dataForSave.item_suitcase == true && Template.dataForSave.open_suitcase == false) {
                        Template.ƒS.Sound.play(Template.sound.click, 1);
                        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0003, true);
                        Template.ƒS.Sound.fade(Template.sound.jungle, 0, 1, false);
                        return "OpenSuitcase";
                    }
                    else
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true);
                    return "Shelter_Uncle_pain";
                    break;
            }
        }
    }
    Template.shelter_uncle_unconscious = shelter_uncle_unconscious;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map