namespace Template {
    export async function Eat(): ƒS.SceneReturn {
        console.log("Boat river");

        let produce_tools = {
            eat: "Essen",
            drink: "Trinken",
            back: "Zurück"
        };

        let build_tools_request = await ƒS.Menu.getInput(produce_tools, "options");

        switch (build_tools_request) {

            case produce_tools.eat:
                if (dataForSave.item_acaiberry > 0) {
                    dataForSave.health += 5;
                    await ƒS.Speech.tell(characters.narrator, "Lecker", true);
                    ƒS.Sound.fade(sound.jungle, 0, 0.1);
                    return "Shelter";
                } else {
                    await ƒS.Speech.tell(characters.narrator, "Du hast kein Essen.", true);
                    ƒS.Sound.fade(sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                break;

            case produce_tools.drink:
                if (dataForSave.item_waterbottle > 0) {
                    dataForSave.health += 2;
                    await ƒS.Speech.tell(characters.narrator, "Erfrischend!", true);
                    ƒS.Sound.fade(sound.jungle, 0, 0.1);
                    return "Shelter";
                } else {
                    await ƒS.Speech.tell(characters.narrator, "Du hast kein Wasser mehr.", true);
                    ƒS.Sound.fade(sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                break;

            case produce_tools.back:
                ƒS.Sound.play(sound.click, 1);
                ƒS.Sound.fade(sound.jungle, 0, 0.1);
                return "Shelter";
        }

    }

}



