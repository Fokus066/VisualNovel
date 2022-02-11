namespace Template {
    export async function Eat(): ƒS.SceneReturn {
        console.log("Boat river");

        let action_choice = {
            eat: "Essen",
            drink: "Trinken",
            back: "Zurück"
        };

        let build_tools_request = await ƒS.Menu.getInput(action_choice, "options");

        switch (build_tools_request) {

            case action_choice.eat:
                if (dataForSave.item_acaiberry > 0 || dataForSave.item_fish > 0) {
                    dataForSave.health += 5;
                    await ƒS.Speech.tell(characters.boy, "Hmm... Lecker", true);
                    ƒS.Sound.fade(sound.jungle, 0, 0.1);
                    return "Shelter";
                } else {
                    await ƒS.Speech.tell(characters.narrator, "Du hast kein Essen.", true);
                    ƒS.Sound.fade(sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                break;

            case action_choice.drink:
                if (dataForSave.item_waterbottle > 0) {
                    dataForSave.health += 2;
                    await ƒS.Speech.tell(characters.narrator, "Erfrischend!", true);
                    ƒS.Sound.fade(sound.jungle, 0, 0.1);
                    return "Shelter";
                } else {
                    dataForSave.no_water = true,
                    await ƒS.Speech.tell(characters.narrator, "Du hast kein Wasser mehr.", true);
                    await ƒS.Speech.tell(characters.uncle, "Beim Wasserfall gibt es bestimmt frisches, sauberes Wasser...", true);
                    await ƒS.Speech.tell(characters.narrator, "Das sollte ich mir mal ansehen.", true);
                    ƒS.Sound.fade(sound.jungle, 0, 0.1);
                    return "Shelter";
                }
                break;

            case action_choice.back:
                ƒS.Sound.play(sound.click, 1);
                ƒS.Sound.fade(sound.jungle, 0, 0.1);
                return "Shelter";
        }

    }

}



