namespace Template {
    export async function Eat(): ƒS.SceneReturn {
        console.log("Boat river");

        let action_choice = {
            eat: "Essen",
            bbQ: " Barbecue",
            //drink: "Trinken",
            back: "Zurück"
        };

        let build_tools_request = await ƒS.Menu.getInput(action_choice, "options");

        switch (build_tools_request) {

            case action_choice.eat:
                if (dataForSave.item_acaiberry == true && dataForSave.mission == 1) {
                    dataForSave.energy += 15;
                    await ƒS.Speech.tell(characters.boy, "Hmm... Lecker", true);
                    dataForSave.mission += 1;
                    return "Shelter";
                } 
                if (dataForSave.item_acaiberry == true) {
                    dataForSave.energy += 15;
                    await ƒS.Speech.tell(characters.boy, "Hmm... Lecker", true);
                    return "Shelter";
                } 
                else {
                    await ƒS.Speech.tell(characters.narrator, "Du hast kein Essen.", true);
                    return "Shelter";
                }

            case action_choice.bbQ:
                if (dataForSave.mission == 5) {

                    await ƒS.Speech.tell(characters.boy, "Hmm... Lecker. Allerdings fehlen Getränke. Am Wasserfall gibt es frisches, sauberes Wasser. Ich könnte es schnell holen.", true);
                    dataForSave.mission += 1;
                    return "Shelter";
                } 
                else {
                    await ƒS.Speech.tell(characters.narrator, "Du kannst noch nicht grillen. Erledige zuerst die anderen Aufgaben.", true);
                    return "Shelter";
                }

            case action_choice.back:
                ƒS.Sound.play(sound.click, 1);
                return "Shelter";
        }

    }

}



