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
            { scene: Template.boat_trip, name: "VN begins" },
            { scene: Template.rain, name: "rain" },
            { scene: Template.heavy_rain, name: "heavy_rain" },
            { scene: Template.rain_stops, name: "rain stops" },
            { id: "Labyrinth_Beginning", scene: Template.Labyrinth_Beginning, name: "Labyrinth1" },
            { id: "Labyrinth2", scene: Template.Labyrinth2, name: "Labyrinth2" },
            { id: "Labyrinth3", scene: Template.Labyrinth3, name: "Labyrinth3" },
            { id: "Labyrinth4", scene: Template.Labyrinth4, name: "Labyrinth4" },
            { id: "Labyrinth_End", scene: Template.Labyrinth_Ending, name: "LabyrinthEnd" },
            { id: "Shelter_Uncle_pain", scene: Template.shelter_uncle_unconscious, name: "shelter injured uncle" },
            { id: "OpenSuitcase", scene: Template.Unlocksuitcase, name: "Random number" },
            { id: "Map", scene: Template.jungle_map, name: "overview" },
            { id: "Shelter", scene: Template.shelter, name: "shelter" },
            { id: "build_tools", scene: Template.build_tools, name: "tools" },
            { id: "Eat", scene: Template.Eat, name: "Food" },
            { id: "Waterfall", scene: Template.waterfall, name: "waterfall" },
            { id: "Shrubs", scene: Template.shrubs, name: "Shrubs" },
            { id: "Jungle", scene: Template.jungle, name: "deeep jungle" },
            { id: "River", scene: Template.river, name: "River" },
            { id: "Waterfall_final", scene: Template.waterfall_final, name: "Waterfall_endscene" },
            { id: "unforeseen_encounter_crocodile", scene: Template.waterfall_crocodile, name: "encounter crocodile" },
            { id: "victory_fight", scene: Template.victory_fight_crocodile, name: "victory_fight" },
            { id: "lost_fight", scene: Template.lost_fight_crocodile_ending, name: "lost_fight" },
            { id: "general_ending", scene: Template.general_end, name: "no energy" },
            { id: "livesaving_ending", scene: Template.lifesaving_ending, name: "Helicopter saving" },
            { id: "livesaving_bad_ending", scene: Template.lifesaving_bad_ending, name: "Helicopter saving without uncle" },
            { id: "END", scene: Template.End, name: "Endgültiges Ende" },
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
            start: { translation: Template.ƒS.positionPercent(25, 140), color: Template.ƒS.Color.CSS("white", 0) },
            end: { translation: Template.ƒS.positionPercent(-20, 140), color: Template.ƒS.Color.CSS("red") },
            duration: 1.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Template.LeftFightAnimation = LeftFightAnimation;
    function shakingRightSide1() {
        return {
            start: { translation: Template.ƒS.positionPercent(80, 140) },
            end: { translation: Template.ƒS.positionPercent(78, 140) },
            duration: 0.25,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Template.shakingRightSide1 = shakingRightSide1;
    function fromOutofCanvasToLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(0, 140) },
            end: { translation: Template.ƒS.positionPercent(15, 140) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromOutofCanvasToLeft = fromOutofCanvasToLeft;
    //Crocodile
    function EscapeAnimationCrocodile() {
        return {
            start: { translation: Template.ƒS.positionPercent(70, 80) },
            end: { translation: Template.ƒS.positionPercent(180, 80) },
            duration: 1.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.EscapeAnimationCrocodile = EscapeAnimationCrocodile;
    function CentershakingAnimationCrocodile() {
        return {
            start: { translation: Template.ƒS.positionPercent(70, 80) },
            end: { translation: Template.ƒS.positionPercent(72, 80) },
            duration: 0.25,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.REVERSELOOP
        };
    }
    Template.CentershakingAnimationCrocodile = CentershakingAnimationCrocodile;
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
                neutral: "./Images/Characters/uncle_neutral.png",
                serious: "./Images/Characters/uncle_serious.png",
                pointing: "./Images/Characters/uncle_pointing.png",
                backpain: "./Images/Characters/uncle_backpain.png",
                fit: "./Images/Characters/uncle_annoyed.png",
            }
        },
        girl: {
            name: "Jenna",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/girl_neutral.png",
                angry_arm_crossed: "./Images/Characters/girl_angry_arm_across.png",
                annoyed: "./Images/Characters/girl_annoyed.png",
                desperate: "./Images/Characters/girl_desperate.png",
                thinking: "./Images/Characters/girl_thinking.png",
                searching: "./Images/Characters/girl_searching.png",
                pointing: "./Images/Characters/girl_discuss_sideview.png"
            }
        },
        boy: {
            name: "my name",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/boy.png",
                discuss: "./Images/Characters/boy_discuss.png",
                discuss_sideview: "./Images/Characters/boy_discuss_sideview.png",
                pointing: "./Images/Characters/boy_pointing.png",
                laughing: "./Images/Characters/boy_laughing.png",
                disappointed: "./Images/Characters/boy_disappointed.png",
                idea: "./Images/Characters/boy_idea.png",
            }
        },
        crocodile: {
            name: "Krokogil",
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
        energy: 100,
        fitnessUncle: false,
        //scorefishing: 0,
        item_lighter: false,
        no_water: false,
        item_acaiberry: false,
        item_fish: false,
        item_spear: false,
        item_liane: false,
        item_axe: false,
        number_branch: 0,
        number_stone: 0,
        item_suitcase: false,
        open_suitcase: false,
        uncle_alive: false,
        mission: 1
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
        Template.ƒS.Text.print(" Lebensenergie: " + Template.dataForSave.energy + "<br> Aktuelle Mission: " + Template.dataForSave.mission + "/6");
    }
    Template.showStatistic = showStatistic;
    ;
    function showCredits() {
        Template.ƒS.Text.setClass("statistic");
        Template.ƒS.Text.print("Programming: Romtham Gebhardt <br> Characters: Sims 3 <br> Music and Sound : https://www.zapsplat.com <br> Pictures: Pexels, Pixabay, bearbeitet von Romtham Gebhardt <br>");
    }
    Template.showCredits = showCredits;
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
                showCredits();
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
        fishing_area: {
            name: "Ende",
            background: "./Images/Backgrounds/fishing.jpg"
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
        lightning: "./Audio/lightning.ogg",
        motorboat: "./Audio/motorboat.ogg",
        rain: "./Audio/rain.ogg",
        storm: "./Audio/storm.ogg",
        waterfall: "./Audio/rainforest_waterfall.mp3",
        helicopter: "./Audio/helicopter.mp3",
        flare_gun: "./Audio/fireworks_screamers.mp3",
        gunshot: "./Audio/gunshot.ogg"
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
            edge: 1
        },
        diagonal: {
            duration: 1,
            alpha: "./Images/transitions/24.png",
            edge: 0.5
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
            edge: 0.3
        },
        cwtop: {
            duration: 1,
            alpha: "./Images/transitions/circlewipe-ccw.jpg",
            edge: 3
        },
        blur: {
            duration: 1,
            alpha: "./Images/transitions/blur.jpg",
            edge: 0.5
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
            duration: 0.5,
            alpha: "./Images/transitions/snakes.png",
            edge: 0.5
        },
        snake3: {
            duration: 0.5,
            alpha: "./Images/transitions/snake2.png",
            edge: 0.5
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
        let action_choice = {
            eat: "Essen",
            bbQ: "Fisch grillen",
            //drink: "Trinken",
            back: "Zurück"
        };
        let build_tools_request = await Template.ƒS.Menu.getInput(action_choice, "options");
        switch (build_tools_request) {
            case action_choice.eat:
                if (Template.dataForSave.item_acaiberry == true && Template.dataForSave.mission == 1) {
                    Template.dataForSave.energy += 15;
                    await Template.ƒS.Speech.tell(Template.characters.boy, "Hmm... Lecker", true);
                    Template.dataForSave.mission += 1;
                    return "Shelter";
                }
                if (Template.dataForSave.item_acaiberry == true) {
                    Template.dataForSave.energy += 15;
                    await Template.ƒS.Speech.tell(Template.characters.boy, "Hmm... Lecker", true);
                    return "Shelter";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Du hast kein Essen.", true);
                    return "Shelter";
                }
            case action_choice.bbQ:
                if (Template.dataForSave.mission == 5) {
                    await Template.ƒS.Speech.tell(Template.characters.boy, "Hmm... Lecker. Allerdings fehlen Getränke. Am Wasserfall gibt es frisches, sauberes Wasser. Ich könnte es schnell holen.", true);
                    Template.dataForSave.mission += 1;
                    return "Shelter";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Du kannst noch nicht grillen. Erledige zuerst die anderen Aufgaben.", true);
                    return "Shelter";
                }
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                return "Shelter";
        }
    }
    Template.Eat = Eat;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Fishing_Meter() {
        // console.log("Text");
        // await ƒS.Location.show(locations.fishing_area);
        // await ƒS.update(transitions.goslow.duration, transitions.goslow.alpha, transitions.goslow.edge);
        // await ƒS.update(1);
        // await ƒS.Speech.tell(characters.narrator, " ", true);
        // document.getElementsByName("scoreRyu").forEach(meterStuff => meterStuff.hidden = true);
        // document.getElementsByName("scoreForRyu").forEach(meterStuff => meterStuff.hidden = true);
        // dataForSave.scorefishing += 10;
        // // let fishing = {
        //     push: "",
        // }
        // ƒS.Speech.hide();
        //await ƒS.Location.show(locations.fishing_area);
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(30, 100));
        //await ƒS.update(1);
        //ƒS.Speech.show();
        //document.getElementsByName("scoreRyu").forEach(meterStuff => meterStuff.hidden = false);
        //document.getElementsByName("scoreForRyu").forEach(meterStuff => meterStuff.hidden = false);
        //dataForSave.scorefishing = "You earned 50 points on Ryus bar",
        // dataForSave.scoreAoi += 15;
        // dataForSave.scoreForAoi = "You earned 15 points on Aois bar",
        //await ƒS.update(1);
        //await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0001);
        // document.getElementById("meterli").hidden = true;
        // document.getElementById("meterInput").hidden = true;
        // beide auf einmal hiden
        // document.getElementsByName("a").forEach(meterStuff => meterStuff.hidden = true);
        //await ƒS.Character.hide(characters.Ryu);
        // dataForSave.state.scoreAoi += 100;
    }
    Template.Fishing_Meter = Fishing_Meter;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Unlocksuitcase() {
        let text = {
            narrator: {
                T0000: "Es ist eine Zahl zwischen 1 und 100. Wie könnte die Zahl sein?<br>",
                T0001: "Falsche Zahl. Die Zahl ist zu groß.",
                T0002: "Falsche Zahl. Die Zahl ist zu klein.",
                T0003: "Es scheint unmöglich diesen Koffer zu öffnen.",
                T0004: "Geschafft! Eine Wasserflasche, ein Feuerzeug, eine Erste-Hilfe Box und sogar eine Leuchtpistole liegen im Koffer.",
            }
        };
        const randomInt = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        //ƒS.Text.print(randomInt.toString());
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
                Template.dataForSave.item_lighter = true;
                Template.dataForSave.open_suitcase = true;
                return "Shelter_Uncle_pain";
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
            bonfire: "Lagerfeuer",
            back: "Zurück"
        };
        let build_tools_request = await Template.ƒS.Menu.getInput(produce_tools, "options");
        switch (build_tools_request) {
            case produce_tools.axe:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                if (Template.dataForSave.number_branch >= 1 && Template.dataForSave.number_branch >= 1) {
                    Template.ƒS.Inventory.add(Template.items.axe);
                    Template.dataForSave.item_axe = true;
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Axt ist hergestellt und liegt nun im Inventar.", true);
                    return "Shelter";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Es fehlt die benötigte Materialien: Mindestens 1x Holz, Mindestens 1x Stein", true);
                    return "Shelter";
                }
                break;
            case produce_tools.spear:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                if (Template.dataForSave.number_branch >= 1 && Template.dataForSave.item_liane == true && Template.dataForSave.mission == 2) {
                    Template.ƒS.Inventory.add(Template.items.spear);
                    Template.dataForSave.item_spear = true;
                    Template.dataForSave.mission += 1;
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Holz Speer ist hergestellt und liegt nun im Inventar.", true);
                    return "Shelter";
                }
                if (Template.dataForSave.number_branch >= 1 && Template.dataForSave.item_liane == true) {
                    Template.ƒS.Inventory.add(Template.items.spear);
                    Template.dataForSave.item_spear = true;
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Holz Speer ist hergestellt und liegt nun im Inventar.", true);
                    return "Shelter";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Es fehlt die benötigte Materialien: Mindestens 1x Holz, Mindestens 1x Liane", true);
                    return "Shelter";
                }
            case produce_tools.bonfire:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                if (Template.dataForSave.number_stone >= 3 && Template.dataForSave.number_branch >= 3 && Template.dataForSave.item_lighter == true && Template.dataForSave.mission == 4) {
                    Template.ƒS.Inventory.add(Template.items.spear);
                    Template.dataForSave.mission += 1;
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Das Lagerfeuer ist gebaut. Du kannst jetzt die Fische grillen.", true);
                    return "Shelter";
                }
                if (Template.dataForSave.number_stone >= 3 && Template.dataForSave.number_branch >= 3 && Template.dataForSave.item_lighter == true) {
                    Template.ƒS.Inventory.add(Template.items.spear);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Das Lagerfeuer ist gebaut.", true);
                    return "Shelter";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Du brauchst mindestens 3x Holz, 3x Steine und ein Feuerzeug", true);
                    return "Shelter";
                }
            case produce_tools.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
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
                T0000: "1x Holz gesammelt und wurde im Inventar abgelegt!",
                T0001: "1x Stein gesammelt und wurde im Inventar abgelegt!",
            }
        };
        Template.dataForSave.energy -= 1;
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.jungle_birds, 1, true);
        await Template.ƒS.Location.show(Template.locations.jungle_path_2);
        await Template.ƒS.update(Template.transitions.t13.duration, Template.transitions.t13.alpha, Template.transitions.t13.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "location_options");
        switch (action_request) {
            case action_choice.search_wood:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(50, 140));
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true);
                await Template.ƒS.update(1);
                Template.ƒS.Inventory.add(Template.items.branch);
                Template.dataForSave.number_branch += 1;
                Template.dataForSave.energy -= 5;
                //ƒS.Sound.fade(sound.jungle_birds, 0, 1);
                return "Jungle";
            case action_choice.search_stone:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(50, 140));
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001, true);
                await Template.ƒS.update(1);
                Template.ƒS.Inventory.add(Template.items.stone);
                Template.dataForSave.number_stone += 1;
                Template.dataForSave.energy -= 5;
                //ƒS.Sound.fade(sound.jungle_birds, 0, 1);
                return "Jungle";
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hide(Template.characters.boy);
                Template.ƒS.Sound.fade(Template.sound.jungle_birds, 0, 0.1);
                return "Map";
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
        Template.ƒS.Sound.play(Template.sound.jungle, 1, true);
        await Template.ƒS.Location.show(Template.locations.map);
        await Template.ƒS.update(Template.transitions.goslow.duration, Template.transitions.goslow.alpha, Template.transitions.goslow.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, " ", true);
        if (Template.dataForSave.energy > 0 && Template.dataForSave.energy <= 20) {
            Template.ƒS.Text.setClass("stylebox");
            Template.ƒS.Text.print("<p> Du hast momentan sehr wenig Energie. Um die Energie aufzuladen, kannst du essen.</p> ");
            await Template.ƒS.Speech.tell(null, null, true);
        }
        if (Template.dataForSave.energy <= 0) {
            Template.ƒS.Character.hideAll();
            Template.ƒS.Text.setClass("stylebox");
            Template.ƒS.Text.print("<p> Du hast keine Energie mehr.");
            await Template.ƒS.Speech.tell(null, null, true);
            return "general_ending";
        }
        let location_request = await Template.ƒS.Menu.getInput(location_choice, "location_options");
        switch (location_request) {
            case location_choice.location1:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                if (Template.dataForSave.fitnessUncle == false) {
                    return "Shelter_Uncle_pain";
                }
                else
                    return "Shelter";
            case location_choice.location2:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                return "River";
            case location_choice.location3:
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                Template.ƒS.Sound.play(Template.sound.click, 1);
                return "Jungle";
            case location_choice.location4:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                return "Shrubs";
            case location_choice.location5:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.jungle, 0, 0.1);
                if (Template.dataForSave.mission >= 6) {
                    return "Waterfall_final";
                }
                else {
                    return "Waterfall";
                }
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
        let text = {
            narrator: {
                T0000: "1x Liane gesammelt und wurde im Inventar abgelegt!"
            }
        };
        Template.dataForSave.energy -= 1;
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.river_jungle, 1, true);
        await Template.ƒS.Location.show(Template.locations.jungle_river);
        await Template.ƒS.update(Template.transitions.t12.duration, Template.transitions.t12.alpha, Template.transitions.t12.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "location_options");
        switch (action_request) {
            case action_choice.collect_liane:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(50, 140));
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true);
                await Template.ƒS.update(1);
                Template.ƒS.Inventory.add(Template.items.liane);
                Template.dataForSave.item_liane = true;
                Template.dataForSave.energy -= 5,
                    Template.ƒS.Inventory.open;
                Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.sound.river_jungle, 0, 1, false);
                return "Map";
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hide(Template.characters.boy);
                Template.ƒS.Sound.fade(Template.sound.river_jungle, 0, 1, false);
                return "Map";
        }
    }
    Template.river = river;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function shelter() {
        //console.log("Boat river");
        let action_choice = {
            talk: "Fragen",
            eat: "Nahrung",
            produce: "Herstellen",
            back: "Zurück",
        };
        let text = {
            uncle: {
                T0000: "...",
                Mission1: "Wir brauchen Essen. Im Wald sind genug essbare Beeren.",
                Mission2: "Die Beeren sind langweilig. Beim Wasserfall gibt es Fische. Um Fische zu fangen, brauchen wir Hilfsmittel. <br> Am einfachsten ist es ein Speer herzustellen. Dazu brauchst du ein Holzstück und Liane.",
                Mission3: "Deine Waffe ist einsatzbereit. Es wird sehr schwierig und körperlich anstrengend sein, die Fische zu treffen. Du kannst mehrmals versuchen, die Fische zu fangen.",
                Mission4: "Wir können die Fische nicht roh essen. Wir müssen sie grillen. Dazu brauchen wir Feuer.",
                Mission5: "Lass die Fische grillen.",
                Mission6: "Geh zum Wasserfall. Nimm eine Waffe zur Verteidigung mit. <br> Man weiß nie, welche Tiere hier plötzlich erscheinen. Also pass auf dich!",
            }
        };
        Template.dataForSave.energy -= 1;
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.jungle, 1, true);
        await Template.ƒS.Location.show(Template.locations.jungle_shack);
        await Template.ƒS.update(Template.transitions.diagonal.duration, Template.transitions.diagonal.alpha, Template.transitions.diagonal.edge);
        if (Template.dataForSave.energy > 0 && Template.dataForSave.energy <= 20) {
            Template.ƒS.Text.setClass("stylebox");
            Template.ƒS.Text.print("<p> Du hast momentan sehr wenig Energie. Um die Energie aufzuladen, kannst du essen.</p> ");
            await Template.ƒS.Speech.tell(null, null, true);
        }
        if (Template.dataForSave.energy <= 0) {
            Template.ƒS.Character.hideAll();
            Template.ƒS.Text.setClass("stylebox");
            Template.ƒS.Text.print("<p> Du hast keine Energie mehr.");
            await Template.ƒS.Speech.tell(null, null, true);
            return "general_ending";
        }
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.neutral, Template.ƒS.positionPercent(20, 140));
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.fit, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.update(1);
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "options");
        switch (action_request) {
            case action_choice.talk:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                //ƒS.Sound.fade(sound.jungle, 0, 0.1);
                if (Template.dataForSave.mission == 1) {
                    await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.Mission1, true);
                }
                if (Template.dataForSave.mission == 2) {
                    await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.Mission2, true);
                }
                if (Template.dataForSave.mission == 3) {
                    await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.Mission3, true);
                }
                if (Template.dataForSave.mission == 4) {
                    await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.Mission4, true);
                }
                if (Template.dataForSave.mission == 5) {
                    await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.Mission5, true);
                }
                if (Template.dataForSave.mission == 6) {
                    await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.Mission6, true);
                }
                return "Shelter";
            case action_choice.eat:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                return "Eat";
            case action_choice.produce:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                return "build_tools";
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                //ƒS.Sound.fade(sound.jungle, 0, 0.1);
                Template.ƒS.Character.hideAll();
                return "Map";
        }
    }
    Template.shelter = shelter;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function shelter_uncle_unconscious() {
        //console.log("Boat river");
        let text = {
            boy: {
                T0000: "Aufwachen! Wir brauchen deine Hilfe! ",
                T0001: "<i>Vielleicht finde ich etwas, was uns weiterhilft.<i>"
            },
            girl: {
                T0000: "Keine Chance. Er schläft tief und fest. Wir brauchen Medizin, um ihn aufzuwecken.",
                T0001: "Hey! Schau mal ich habe hier eine Karte gefunden. Sie ist bestimmt nützlich. ",
                T0002: "Lass mich mal ansehen. Der Koffer ist mit einer Zahlencode verschlossen worden.<br>Es ist eine Zahl zwischen 1 und 100. Du hast 10 Versuchen den Koffer zu öffnen. Wenn du es mit 10 Versuchen nicht schaffst, wird eine neue Zahl generieren. Versuche dich strategisch der Zahl zu nähern.",
            },
            uncle: {
                T0000: "...",
                T0001: Template.characters.boy.name + ", du bist mein Lebensretter."
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.jungle, 1, true);
        await Template.ƒS.Location.show(Template.locations.jungle_shack);
        await Template.ƒS.update(Template.transitions.diagonal.duration, Template.transitions.diagonal.alpha, Template.transitions.diagonal.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.neutral, Template.ƒS.positionPercent(20, 140));
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.backpain, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        if (Template.dataForSave.open_suitcase == true) {
            let action_choice_uncle_pain = {
                heal_uncle: "Onkel heilen",
                back: "Landkarte"
            };
            let action_request_pain_uncle = await Template.ƒS.Menu.getInput(action_choice_uncle_pain, "options");
            switch (action_request_pain_uncle) {
                case action_choice_uncle_pain.heal_uncle:
                    Template.ƒS.Sound.play(Template.sound.click, 1);
                    Template.ƒS.Text.setClass("stylebox");
                    Template.ƒS.Text.print("<p> Du leistest erste Hilfe.</p>");
                    await Template.ƒS.Speech.tell(null, null, true);
                    Template.ƒS.Character.hide(Template.characters.uncle);
                    Template.ƒS.Text.setClass("stylebox");
                    Template.ƒS.Text.print("<p> Dein Onkel gehts wieder besser.</p>");
                    await Template.ƒS.Speech.tell(null, null, true);
                    await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.fit, Template.ƒS.positionPercent(80, 140));
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
                    Template.dataForSave.fitnessUncle = true;
                    //await ƒS.Character.hide(characters.girl);
                    //ƒS.Sound.fade(sound.jungle, 0, 1, false);
                    return "Shelter";
                case action_choice_uncle_pain.back:
                    Template.ƒS.Sound.play(Template.sound.click, 1);
                    Template.ƒS.Character.hideAll();
                    //ƒS.Sound.fade(sound.jungle, 0, 0)
                    return "Map";
            }
        }
        else {
            let action_choice_uncle_pain = {
                arouse_uncle: "versuchen den Onkel aufzuwecken",
                open_suitcase: "Koffer öffnen",
                back: "Landkarte"
            };
            let action_request_pain_uncle = await Template.ƒS.Menu.getInput(action_choice_uncle_pain, "options");
            switch (action_request_pain_uncle) {
                case action_choice_uncle_pain.arouse_uncle:
                    Template.ƒS.Sound.play(Template.sound.click, 1);
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
                    await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
                    await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
                    //ƒS.Sound.fade(sound.jungle, 0,0 );
                    return "Shelter_Uncle_pain";
                case action_choice_uncle_pain.open_suitcase:
                    if (Template.dataForSave.item_suitcase == true && Template.dataForSave.open_suitcase == false) {
                        Template.ƒS.Sound.play(Template.sound.click, 1);
                        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0002, true);
                        //ƒS.Sound.fade(sound.jungle, 0,0 );
                        return "OpenSuitcase";
                    }
                    return "Shelter_Uncle_pain";
                case action_choice_uncle_pain.back:
                    Template.ƒS.Sound.play(Template.sound.click, 1);
                    Template.ƒS.Character.hideAll();
                    //ƒS.Sound.fade(sound.jungle, 0, 0)
                    return "Map";
            }
        }
    }
    Template.shelter_uncle_unconscious = shelter_uncle_unconscious;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function shrubs() {
        console.log("Boat river");
        let text = {
            boy: {
                T0000: "Mal sehen, ob wir was zu essen finden.",
                T0001: "Es gibts leider nichts",
                T0002: "Yes. Hier sind die Beeren!",
                T0003: "<i>Vielleicht finde ich was beim nächsten Mal.</i>",
            }
        };
        let action_choice = {
            search_berries: "Beeren sammeln",
            back: "Zurück",
        };
        Template.dataForSave.energy -= 1;
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.jungle_insects, 1, true);
        await Template.ƒS.Location.show(Template.locations.ferns);
        await Template.ƒS.update(Template.transitions.fur.duration, Template.transitions.fur.alpha, Template.transitions.fur.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        let random_boolean = Math.random() < 0.8;
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "options");
        switch (action_request) {
            case (action_choice.search_berries):
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                if (random_boolean == true) {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.laughing, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
                    await Template.ƒS.update(1);
                    Template.ƒS.Inventory.add(Template.items.acaiberry);
                    Template.dataForSave.item_acaiberry = true;
                    Template.dataForSave.energy -= 5,
                        Template.ƒS.Inventory.open;
                }
                else {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.disappointed, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
                    Template.dataForSave.energy -= 5,
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
        console.log("Wasser");
        let action_choice = {
            fish: "Fischen",
            back: "Zurück",
        };
        let text = {
            boy: {
                T0000: "Mal sehen, ob wir was zu essen finden.",
                T0001: "Ui! Die Fische schwimmen viel zu schnell.",
                T0002: "Aye! Geschafft!",
                T0003: "<i>Anscheinend fehlt mir ein Werkzeug...</i>",
                T0004: "<i>Leider habe ich den Fisch verfehlt. Versuch's gleich nochmal.</i>"
            }
        };
        Template.dataForSave.energy -= 1;
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.waterfall, 1, true);
        await Template.ƒS.Location.show(Template.locations.jungle_lake);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        let random_boolean = Math.random() < 0.5;
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "options");
        switch (action_request) {
            case action_choice.fish:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                if (random_boolean == true && Template.dataForSave.item_spear == true && Template.dataForSave.mission == 3) {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.laughing, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
                    await Template.ƒS.update(1);
                    Template.ƒS.Inventory.add(Template.items.fish_1);
                    Template.dataForSave.mission += 1;
                    Template.dataForSave.item_fish = true;
                    Template.dataForSave.energy -= 5,
                        Template.ƒS.Inventory.open;
                }
                if (random_boolean == false && Template.dataForSave.item_spear == true && Template.dataForSave.mission == 3) {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.disappointed, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0004, true);
                    Template.ƒS.Character.hideAll();
                    await Template.ƒS.update(1);
                    return "Map";
                }
                if (random_boolean == true && Template.dataForSave.item_spear == true) {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.laughing, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
                    await Template.ƒS.update(1);
                    Template.ƒS.Inventory.add(Template.items.fish_1);
                    Template.dataForSave.item_fish = true;
                    Template.dataForSave.energy -= 5,
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
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hide(Template.characters.boy);
                Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 1, false);
                return "Map";
        }
    }
    Template.waterfall = waterfall;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function waterfall_final() {
        let action_choice = {
            explore: "Erkunden",
            fish: "Fischen",
            back: "Zurück"
        };
        let text = {
            boy: {
                T0000: "Mal sehen, ob wir was zu essen finden.",
                T0001: "Die Fische schwimmen viel zu schnell.",
                T0002: "Aye! Geschafft!",
                T0003: "<i>Anscheinend fehlt mir ein Werkzeug </i>",
            }
        };
        Template.dataForSave.energy -= 1;
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.waterfall, 1);
        await Template.ƒS.Location.show(Template.locations.jungle_lake);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        let random_boolean = Math.random() < 0.75;
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "options");
        switch (action_request) {
            case action_choice.explore:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hide(Template.characters.boy);
                if (random_boolean == true) {
                    Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 0.1);
                    return "unforeseen_encounter_crocodile";
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Hier gibt es nichts zu sehen. Vielleicht komme ich wann anders vorbei.", true);
                    Template.ƒS.Character.hideAll();
                    Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 0.1);
                    await Template.ƒS.update(1);
                    return "Map";
                }
            case action_choice.fish:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hideAll();
                if (random_boolean == true && Template.dataForSave.item_spear == true) {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.laughing, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
                    await Template.ƒS.update(1);
                    Template.ƒS.Inventory.add(Template.items.fish_1);
                    Template.dataForSave.item_fish = true;
                    Template.dataForSave.energy -= 5,
                        Template.ƒS.Inventory.open;
                }
                else {
                    await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.disappointed, Template.ƒS.positionPercent(50, 140));
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
                    await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
                    await Template.ƒS.update(1);
                }
                Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 0.1);
                return "Map";
                // return "Ende";   
                break;
            case action_choice.back:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Character.hide(Template.characters.boy);
                Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 0.1);
                return "Map";
                break;
        }
    }
    Template.waterfall_final = waterfall_final;
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
        Template.ƒS.update(1);
        let pathchoice = await Template.ƒS.Menu.getInput(PathDecision, "location_options");
        switch (pathchoice) {
            case PathDecision.left:
                return "Labyrinth3";
            case PathDecision.right:
                return "Labyrinth4";
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
        Template.ƒS.update(1);
        let pathchoice = await Template.ƒS.Menu.getInput(PathDecision, "location_options");
        switch (pathchoice) {
            case PathDecision.left:
                return "Labyrinth_End";
            case PathDecision.right:
                return "Labyrinth4";
        }
    }
    Template.Labyrinth3 = Labyrinth3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Labyrinth4() {
        let PathDecision = {
            left: "⟵ links",
            right: "rechts ⟶"
        };
        await Template.ƒS.Location.show(Template.locations.jungle_path_3);
        await Template.ƒS.update(Template.transitions.wipe.duration, Template.transitions.wipe.alpha, Template.transitions.wipe.edge);
        Template.ƒS.update(1);
        let pathchoice = await Template.ƒS.Menu.getInput(PathDecision, "location_options");
        switch (pathchoice) {
            case PathDecision.left:
                return "Labyrinth3";
            case PathDecision.right:
                return "Labyrinth2";
        }
    }
    Template.Labyrinth4 = Labyrinth4;
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
                T0000: "<i>So... in welcher Richtung soll ich gehen?</i>"
            },
        };
        await Template.ƒS.Location.show(Template.locations.jungle_path);
        await Template.ƒS.update(Template.transitions.snake2.duration, Template.transitions.snake2.alpha, Template.transitions.snake2.edge);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        let pathchoice = await Template.ƒS.Menu.getInput(PathDecision, "location_options");
        switch (pathchoice) {
            case PathDecision.left:
                return "Labyrinth3";
            case PathDecision.right:
                return "Labyrinth2";
        }
    }
    Template.Labyrinth_Beginning = Labyrinth_Beginning;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Labyrinth_Ending() {
        let text = {
            boy: {
                T0000: "AH! Ich habe das Boot gefunden.",
                T0001: "<i>Mist! Es ist beschädigt. Wir können so nicht zurückfahren.</i>",
                T0002: "<i>Oh was ist das? Ein Koffer?!</i>",
                T0003: "<i>Er lässt sich nicht öffnen...<br> Ist er verschlossen? Vielleicht kann Jenna mir weiterhelfen.</i>",
            }
        };
        await Template.ƒS.Location.show(Template.locations.sunken_boat);
        await Template.ƒS.update(Template.transitions.swipe.duration, Template.transitions.swipe.alpha, Template.transitions.swipe.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(15, 140));
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
    async function End() {
        Template.ƒS.Text.print("<p>Das Spiel ist hier zu Ende.");
        await Template.ƒS.Speech.tell(null, null, true);
        await Template.ƒS.update(4);
    }
    Template.End = End;
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
        Template.ƒS.Text.print("<p> Willkommen zum Jungle Survival! </p> <p> In dieser Visual Novel triffst du Entscheidungen, die dann deine Geschichte beeinflussen.<br>Ereignisse können in dem Spiel zufällig passieren. Bei einigen Aufgaben werden bestimmte Gegenstände vorausgesetzt,<br> die ihr vorher erwerben müsst. Es ist möglich die Szenen mehrmals durchzuführen, um ein bestimmtes Ziel zu erreichen.<br> Achte auf deine Lebensenergie, weil sie für bestimmten Handlungen berücksichtigt werden.<br> Hier sind Shortcuts, die das Spielerlebnis erleichtern.</p><p>Spielsteuerung: rechte Maustaste für weiter bzw. klicke auf die Buttons<br>Vollbildschirm Windows: F11 <br>Vollbildschirm  Mac: Ctrl - Cmd – F <br> Inventar: F2 <br> Menu öffnen/schlließen: M </p>  </p> <p> Viel Spaß! </p>");
        await Template.ƒS.Speech.tell(null, null, true);
        Template.ƒS.Text.print("<p> Du spielst die Rolle von einem Jungen, der mit seinen Verwandten nach Chalana fliegt.<br>Dort befindet sich ein Regenwald. Dieser ist ein Naturschutzgebiet und ist seit kurzem für Tourismus geöffnet.<br> Gemeinsam mit deinem Onkel und deiner Cousine leiht ihr ein Boot aus und fahrt in den Dschungel.</p>");
        await Template.ƒS.Speech.tell(null, null, true);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Wie möchtest du im Spiel genannt werden?<br>", true);
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        Template.characters.boy.name = Template.dataForSave.nameProtagonist;
        Template.ƒS.Text.print("<p>Das Spiel beginnt!</p> <p>Tipp:</p> <p>Um weiterzukommen, kannst du dem Onkel fragen. Du kannst dich an der Statistik (in Menu) orientieren.</p>");
        await Template.ƒS.Speech.tell(null, null, true);
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function boat_trip() {
        console.log("Game starts");
        let text = {
            boy: {
                T0000: "Endlich sind wir da! Die Reise war lang und anstrengend.",
                T0001: "Die Bootsfahrt ist entspannend.",
                T0002: "Ich bin gespannt, was wir heute sehen werden. Ich hoffe, wir haben Glück und können Tiere sehen.",
                T0003: "Es ist schön hier zu sein.",
            },
            girl: {
                T0000: "Aye! Schönes Wetter heute.",
                T0001: "Ja, das stimmt.",
                T0002: "Da bin ich ganz deiner Meinung.",
            },
            uncle: {
                T0000: "Heute ist ein perfekter Tag den Regenwald zu besuchen.",
                T0001: "Das hoffe ich auch.",
                T0002: "Da es hier ein Naturschutzgebiet ist, leben hier sehr viele Tiere.",
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.fade(Template.sound.motorboat, 0.2, 1, true);
        await Template.ƒS.Location.show(Template.locations.jungle_boat);
        await Template.ƒS.update(Template.transitions.theatre_opening.duration, Template.transitions.theatre_opening.alpha, Template.transitions.theatre_opening.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.pointing, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.update(1);
        //Animation girl
        await Template.ƒS.Character.animate(Template.characters.girl, Template.characters.girl.pose.neutral, Template.fromOutofCanvasToLeft());
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.neutral, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.sound.motorboat, 0, 0.1, true);
        await Template.ƒS.update(1);
    }
    Template.boat_trip = boat_trip;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function general_end() {
        await Template.ƒS.Location.show(Template.locations.game_over);
        await Template.ƒS.update(Template.transitions.t19.duration, Template.transitions.t19.alpha, Template.transitions.t19.edge);
        Template.ƒS.Text.setClass("stylebox");
        Template.ƒS.Text.print("<p>Deine Mitreisende müssen jetzt leider ohne dich auskommen.<br> Versuch beim nächsten Mal besser.");
        await Template.ƒS.Speech.tell(null, null, true);
        await Template.ƒS.update(4);
        return "END";
    }
    Template.general_end = general_end;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function heavy_rain() {
        console.log("Rain");
        let text = {
            boy: {
                T0000: "Was ein starker Regen! Es wird immer schlimmer!",
                T0001: "Ich habe auch hier kein Empfang...",
                T0002: "Abgesehen vom Bootsverleiher weiß keiner, wo wir sind. Ich hoffe er hat mitbekommen, wohin wir fahren wollen.",
                T0003: "Hat jemand eine Idee?"
            },
            girl: {
                T0000: "Oh nein! Was sollen wir nur machen?! So habe ich mein Urlaub nicht vorgestellt.",
                T0001: "Ja, habe ich dabei. Wir sollten den Notruf anrufen.",
                T0002: "OH Mist! Im Urwald hat mein Handy kein Signal.",
                T0003: "Was sollen wir nur machen? Weiß jemand, dass wir hier sind?!",
                T0004: "Sieh mal da drüben! Da ist eine kleine Hütte. Lass uns dahin gehen!"
            },
            uncle: {
                T0000: "Wir sollten Schutz suchen. Der Regen ist viel heftiger, als ich vermutet habe.",
                T0001: "So ist es unmöglich mit dem Boot weiterzufahren. Warten wir solange ab, bis der Regen aufhört.",
                T0002: "Die Wellen sind viel zu stark. Wir sollten abwarten.",
                T0003: "Habt ihr Handyempfang? Mein Handy habe ich wohl während der Bootsfahrt verloren.",
                T0004: "Hmm... Wir sollten uns überlegen, was wir jetzt tun.",
                T0005: "Aua! Langsam bekomme ich starke Rückenschmerzen. Das muss wohl an der langen Bootsfahrt liegen. Lass uns dahin gehen!"
            }
        };
        Template.dataForSave.energy -= 5;
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.lightning, 1);
        await Template.ƒS.Location.show(Template.locations.jungle_rain_1);
        await Template.ƒS.update(Template.transitions.t21.duration, Template.transitions.t21.alpha, Template.transitions.t21.edge);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.storm, 2, 0.2, false);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.discuss, Template.ƒS.positionPercent(15, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.annoyed, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.Character.animate(Template.characters.girl, Template.characters.girl.pose.annoyed, Template.shakingRightSide1());
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.serious, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
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
        await Template.ƒS.Character.hide(Template.characters.girl);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.pointing, Template.ƒS.positionPercent(85, 130));
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0004, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0005, true);
        Template.ƒS.Sound.play(Template.sound.lightning, 1);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.sound.storm, 0, 0.1);
        await Template.ƒS.Location.show(Template.locations.jungle_shack_rain);
        await Template.ƒS.update(Template.transitions.t26.duration, Template.transitions.t26.alpha, Template.transitions.t26.edge);
        await Template.ƒS.update(1);
    }
    Template.heavy_rain = heavy_rain;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function lifesaving_bad_ending() {
        Template.ƒS.Text.setClass("stylebox");
        //Der Bootsverleih hatte nur bemerkt, dass Touristen verschwunden sind, weil ihm ein Boot gefehlt hat. Er informierte daraufhin ein Rettungsteam. <br> Das Rettungteam sieht die Überlebenden und bringt sie in die Zivilisation zurück.Der Bootsverleih hatte nur bemerkt, dass Touristen verschwunden sind, weil ihm ein Boot gefehlt hat. Er informierte daraufhin ein Rettungsteam. <br> Das Rettungteam sieht die Überlebenden und bringt sie in die Zivilisation zurück
        Template.ƒS.Text.print("<p>Der Bootsverleih hatte nur bemerkt, dass Touristen verschwunden sind, weil ihm ein Boot gefehlt hat. Er informierte daraufhin ein Rettungsteam. <br> Das Rettungteam entdeckt die Beiden. Ihr wartet stundenlang auf Onkel Ben, aber von ihm fehlt jeder Spur... </p>");
        await Template.ƒS.Speech.tell(null, null, true);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.helicopter);
        await Template.ƒS.update(Template.transitions.swipe.duration, Template.transitions.swipe.alpha, Template.transitions.swipe.edge);
        Template.ƒS.Text.setClass("stylebox");
        Template.ƒS.Text.print("<p> Bevor es dunkel wird, entscheiden die Beiden in den Helikopter einzusteigen. Der Helikopter bringt die Jugendlichen in die Zivilisation zurück.</p> ");
        await Template.ƒS.Speech.tell(null, null, true);
        Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 0.1);
        Template.ƒS.Sound.fade(Template.sound.helicopter, 0, 0.1);
        Template.ƒS.Sound.fade(Template.sound.flare_gun, 0, 0.1);
        await Template.ƒS.Location.show(Template.locations.end);
        await Template.ƒS.update(Template.transitions.t19.duration, Template.transitions.t19.alpha, Template.transitions.t19.edge);
        Template.ƒS.Text.setClass("stylebox");
        Template.ƒS.Text.print("<p> Die Jungendliche haben in der Wildnis überlebt.<br> War es die wirklich richtige Entscheidung, den alten Mann alleine gegen das Krokodil kämpfen zu lassen?</p>");
        await Template.ƒS.Speech.tell(null, null, true);
        await Template.ƒS.update(4);
        return "END";
    }
    Template.lifesaving_bad_ending = lifesaving_bad_ending;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function lifesaving_ending() {
        let text = {
            boy: {
                T0000: "Oh man! Hier ist es echt gefährlich. Was sollen wir jetzt machen?",
                T0001: "Ja, mach ich ...",
                T0002: "Auf jeden Fall!"
            },
            girl: {
                T0000: "Sei still... hörst du das auch? Das klingt nach einem Helikopter? <br> ",
                T0001: "Warte, hier ist die Leuchtpistole. Lass sie mich schnell abfeuern, damit das Rettungsteam uns wahrnehmen kann.",
                T0002: "Wo ist Onkel Ben? Sollen wir auf ihn warten?",
                T0003: "Ich hoffe er kommt bald.",
                T0004: "Ja, du hast überlebt.",
            },
            uncle: {
                T0000: "Hey! Ich bin da!",
                T0001: "Sehr gut! Was für ein Timing, dass der Helicopter genau jetzt kommt, um uns zu retten.",
                T0002: "Lass uns von hier verschwinden! Wir haben für heute genug Abenteuer erlebt.",
            }
        };
        let shoot_flare_gun = {
            shoot: "Abfeuern",
        };
        Template.ƒS.Sound.play(Template.sound.helicopter, 1);
        await Template.ƒS.Location.show(Template.locations.jungle_shack);
        await Template.ƒS.update(Template.transitions.blur.duration, Template.transitions.blur.alpha, Template.transitions.blur.edge);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(75, 140));
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.searching, Template.ƒS.positionPercent(15, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.helicopter2);
        await Template.ƒS.update(Template.transitions.wipe.duration, Template.transitions.wipe.alpha, Template.transitions.wipe.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        await Template.ƒS.Location.show(Template.locations.jungle_shack);
        await Template.ƒS.update(Template.transitions.wipe.duration, Template.transitions.wipe.alpha, Template.transitions.wipe.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(75, 140));
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.pointing, Template.ƒS.positionPercent(15, 130));
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        let shoot_action = await Template.ƒS.Menu.getInput(shoot_flare_gun, "options");
        switch (shoot_action) {
            case (shoot_flare_gun.shoot):
                Template.ƒS.Sound.play(Template.sound.gunshot, 2);
                Template.ƒS.Sound.fade(Template.sound.flare_gun, 0.5, 0.5);
                break;
        }
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0003, true);
        if (Template.dataForSave.uncle_alive == false) {
            await Template.ƒS.Character.hideAll();
            return "livesaving_bad_ending";
        }
        else {
            await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.backpain, Template.ƒS.positionPercent(45, 140));
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
            await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0004, true);
            await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
            await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0002, true);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Location.show(Template.locations.helicopter);
            await Template.ƒS.update(Template.transitions.diagonal.duration, Template.transitions.diagonal.alpha, Template.transitions.diagonal.edge);
            Template.ƒS.Text.setClass("stylebox");
            Template.ƒS.Text.print("<p>Der Bootsverleih hatte nur bemerkt, dass Touristen verschwunden sind, weil ihm ein Boot gefehlt hat. Er informierte daraufhin ein Rettungsteam. <br> Das Rettungteam sieht die Überlebenden und bringt sie in die Zivilisation zurück.</p>");
            await Template.ƒS.Speech.tell(null, null, true);
            await Template.ƒS.Character.hide(Template.characters.crocodile);
            await Template.ƒS.Location.show(Template.locations.end);
            await Template.ƒS.update(Template.transitions.t19.duration, Template.transitions.t19.alpha, Template.transitions.t19.edge);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Glückwunsch! Alle haben dank deiner Hilfe überlebt.", true);
            await Template.ƒS.update(4);
            return "END";
        }
    }
    Template.lifesaving_ending = lifesaving_ending;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function lost_fight_crocodile_ending() {
        let text = {
            boy: {
                T0000: "ONKEL BEN! ICH MACHE DICH FERTIG!",
                T0001: "EY YEAHH!",
            },
            uncle: {
                T0000: "AYY YAAAA!!!",
                T0001: "Willst du sehen, wie ich ein Krokodil verjage, dann schau zu und lerne...",
                T0002: "Gleich nochmal...",
            },
            girl: {
                T0000: "NEIN! " + Template.dataForSave.nameProtagonist,
                T0001: "UGHHH.......",
            }
        };
        Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 0.1);
        Template.ƒS.Sound.play(Template.sound.fight, 1);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.pointing, Template.ƒS.positionPercent(25, 140));
        await Template.ƒS.Character.show(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.ƒS.positionPercent(70, 80));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
        await Template.ƒS.Character.hide(Template.characters.crocodile);
        await Template.ƒS.Character.animate(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.CentershakingAnimationCrocodile());
        await Template.ƒS.Character.animate(Template.characters.uncle, Template.characters.uncle.pose.pointing, Template.LeftFightAnimation());
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(25, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        await Template.ƒS.Character.animate(Template.characters.boy, Template.characters.boy.pose.neutral, Template.LeftFightAnimation());
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.pointing, Template.ƒS.positionPercent(25, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        await Template.ƒS.Character.animate(Template.characters.girl, Template.characters.girl.pose.pointing, Template.LeftFightAnimation());
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        Template.ƒS.Text.setClass("stylebox");
        Template.ƒS.Text.print("<p> Leider waren alle körperlich zu schwach. Niemand hat den Krokodilangriff überlebt. Ein Axt wäre hilfreich gewesen.</p>");
        await Template.ƒS.Speech.tell(null, null, true);
        await Template.ƒS.Character.hide(Template.characters.crocodile);
        Template.ƒS.Sound.fade(Template.sound.fight, 0, 0.1);
        await Template.ƒS.Location.show(Template.locations.game_over);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Versuch es beim nächsten Mal besser!", true);
        await Template.ƒS.update(Template.transitions.t19.duration, Template.transitions.t19.alpha, Template.transitions.t19.edge);
        await Template.ƒS.update(4);
        return "END";
    }
    Template.lost_fight_crocodile_ending = lost_fight_crocodile_ending;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function rain() {
        console.log("Rain");
        let text = {
            narrator: {
                T0000: "Nach einer Weile wird es langsam dunkel und es beginnt zu regnen... ",
            },
            boy: {
                T0000: "So ein Mist?! Es fängt an zu regnen...",
                T0001: "Hoffentlich, darauf war ich nicht vorbereitet.",
                T0002: "Das ist echt blöd. Ich hoffe, wir müssen unseren Ausflug nicht abbrechen.",
                T0003: "OK! Da vorne können wir unser Boot anlegen."
            },
            girl: {
                T0000: "Oh jeh! Das sieht für die heutige Tour nicht gut aus...",
                T0001: "Bin auch nicht vorbereitet.",
                T0002: "Das wäre ziemlich schade. Wir sind so weit gereist.",
                T0003: "Ist besser so. Mir wird langsam von der Bootsfahrt schlecht."
            },
            uncle: {
                T0000: "Zur Zeit ist Regenzeit. Es ist normal, dass es plötzlich regnet.",
                T0001: "Mach euch keine Sorgen. Es ist bald wieder vorbei.",
                T0003: "Die Wellen werden immer stärker. Vielleicht ist es besser, wenn wir an dieser Stelle eine Pause einlegen und an Land gehen. Mit diesen Wellen ist es zu gefährlich."
            }
        };
        Template.dataForSave.energy -= 5;
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.lightning, 1);
        await Template.ƒS.Location.show(Template.locations.thunderstorm_1);
        await Template.ƒS.update(Template.transitions.t24.duration, Template.transitions.t24.alpha, Template.transitions.t24.edge);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.rain, 5, 0.2, true);
        await Template.ƒS.Location.show(Template.locations.jungle_boat_rain);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.discuss, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.desperate, Template.ƒS.positionPercent(20, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.fit, Template.ƒS.positionPercent(50, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0003, true);
        Template.ƒS.Character.hide(Template.characters.boy);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.pointing, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0003, true);
        Template.dataForSave.energy -= 10;
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.thunderstorm_2);
        Template.ƒS.Sound.fade(Template.sound.rain, 0, 0.1);
        await Template.ƒS.update(1);
    }
    Template.rain = rain;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function rain_stops() {
        console.log("Rain");
        let text = {
            boy: {
                T0000: "Was ist mit ihm los?",
                T0001: "Onkel Ben, wach auf!",
                T0002: "Nein! Das Wasser hat unser Boot weg getrieben.",
                T0003: "Ok... Ich habe eine Idee. Ich schaue mal nach dem Boot. Vielleicht gibt es etwas, was uns weiterhilft.",
                T0004: "Nicht wirklich, aber ich werde ihn schon finden.",
            },
            girl: {
                T0000: "Onkel Ben, ist bei dir alles gut? ",
                T0001: "Er braucht wohl seine Ruhe. Was sollen wir machen?",
                T0002: "Wir sind hier in der Wildnis gefangen.",
                T0003: "Lass ihn! Er ist körperlich erschöpft. Wir sollten ihn ausruhen lassen.",
                T0004: "Lass uns einen Plan überlegen.",
                T0005: "Alles klar! Sei bitte vorsichtig. Ich bleibe hier und passe auf Onkel Ben auf. Kennst du noch den Weg zum Boot?"
            },
            uncle: {
                T0000: "..."
            }
        };
        Template.dataForSave.energy -= 5;
        Template.ƒS.Speech.setTickerDelays(20, 2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Langsam hört es auf zu regnen", true);
        await Template.ƒS.Location.show(Template.locations.jungle_shack);
        await Template.ƒS.update(Template.transitions.cwtop.duration, Template.transitions.cwtop.alpha, Template.transitions.cwtop.edge);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.backpain, Template.ƒS.positionPercent(45, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.neutral, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.neutral, Template.ƒS.positionPercent(15, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        Template.ƒS.Character.hide(Template.characters.girl);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.thinking, Template.ƒS.positionPercent(80, 140));
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0004, true);
        Template.ƒS.Character.hide(Template.characters.boy);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.idea, Template.ƒS.positionPercent(15, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0005, true);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0004, true);
        Template.ƒS.Character.hideAll();
    }
    Template.rain_stops = rain_stops;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function victory_fight_crocodile() {
        let text = {
            boy: {
                T0000: "ONKEL BEN! ICH MACHE DICH FERTIG!",
                T0001: "EY YEAHH!",
            },
            uncle: {
                T0000: "AYY YAAAA!!!",
                T0001: "Willst du sehen, wie ich ein Krokodil verjage, dann schau zu und lerne...",
                T0002: "Gleich nochmal...",
            },
            girl: {
                T0000: "NEIN! " + Template.dataForSave.nameProtagonist,
                T0001: "UGHHH.......",
            }
        };
        Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 0.1);
        Template.ƒS.Sound.play(Template.sound.fight, 1);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.pointing, Template.ƒS.positionPercent(15, 140));
        await Template.ƒS.Character.show(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.ƒS.positionPercent(70, 80));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.Character.hide(Template.characters.crocodile);
        await Template.ƒS.Character.animate(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.CentershakingAnimationCrocodile());
        await Template.ƒS.Character.hide(Template.characters.crocodile);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0002, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.Character.hide(Template.characters.crocodile);
        await Template.ƒS.Character.animate(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.EscapeAnimationCrocodile());
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Das Krokodil geht wieder ins Wasser und lässt euch in Ruhe", true);
        Template.dataForSave.uncle_alive = true;
        Template.ƒS.Sound.fade(Template.sound.fight, 0, 0.1);
        await Template.ƒS.Character.hideAll();
        return "livesaving_ending";
    }
    Template.victory_fight_crocodile = victory_fight_crocodile;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function waterfall_crocodile() {
        console.log("Endscene");
        let text = {
            narrator: {
                T0000: "Dein Onkel und Cousine haben vor deinen Schreien gehört und eilen dir zur Hilfe.",
            },
            boy: {
                T0000: "Hier gibt es frisches Wasser.",
                T0001: "OH SCHRECK?! EIN GROßES KROKODIL!"
            },
            uncle: {
                T0000: "Es sieht gefährlich und hungrig aus. Lass uns lieber abhauen.",
                T0001: "Oh, geht schnell zurück zur Hütte! Es ist ziemlich aggressiv. Ich kümmere mich um das Krokodil und komme dann nach."
            },
            girl: {
                T0000: "Oh nein. Das hat uns noch gerade gefehlt.",
                T0001: "Lass uns schnell weggehen, " + Template.characters.boy.name,
                T0002: "Wir haben keine Waffe. Das Krokodil will uns fressen.",
                T0003: "",
            }
        };
        Template.ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.play(Template.sound.waterfall, 1);
        // await ƒS.Location.show(locations.jungle_lake);
        // await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
        // await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(50, 140));
        // await ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000, true);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.crocodile_water);
        await Template.ƒS.update(Template.transitions.swipe.duration, Template.transitions.swipe.alpha, Template.transitions.swipe.edge);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001, true);
        await Template.ƒS.Location.show(Template.locations.jungle_lake);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.show(Template.characters.crocodile, Template.characters.crocodile.pose.aggressiv, Template.ƒS.positionPercent(90, 80));
        await Template.ƒS.update(1);
        //await ƒS.Character.show(characters.boy, characters.boy.pose.explain, ƒS.positionPercent(10, 130));
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true);
        await Template.ƒS.Character.show(Template.characters.uncle, Template.characters.uncle.pose.fit, Template.ƒS.positionPercent(30, 130));
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.desperate, Template.ƒS.positionPercent(10, 140));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0000, true);
        await Template.ƒS.Speech.tell(Template.characters.uncle, text.uncle.T0001, true);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.girl.T0001, true);
        let action_choice = {
            stay: "Mit Onkel bleiben",
            flee: "Mit der Cousine weggehen",
        };
        let action_request = await Template.ƒS.Menu.getInput(action_choice, "options");
        switch (action_request) {
            case (action_choice.stay):
                if (Template.dataForSave.energy > 20 && Template.dataForSave.item_axe == true) {
                    await Template.ƒS.Character.hideAll();
                    return "victory_fight";
                }
                else {
                    await Template.ƒS.Character.hideAll();
                    return "lost_fight";
                }
            case action_choice.flee:
                Template.ƒS.Sound.play(Template.sound.click, 1);
                await Template.ƒS.Character.hideAll();
                Template.ƒS.Sound.fade(Template.sound.waterfall, 0, 0.1);
                if (Template.dataForSave.energy > 25) {
                    Template.dataForSave.uncle_alive = true;
                    return "livesaving_ending";
                }
                else {
                    Template.dataForSave.uncle_alive = false;
                    return "livesaving_ending";
                }
        }
    }
    Template.waterfall_crocodile = waterfall_crocodile;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map