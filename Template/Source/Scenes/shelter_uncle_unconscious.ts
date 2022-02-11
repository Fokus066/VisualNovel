namespace Template {
    export async function shelter_uncle_unconscious(): ƒS.SceneReturn {
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
                T0004: characters.boy.name + ", Du bist ein Lebensretter.",
            },
            uncle: {
                T0000: "...",
                T0001: "Ihr sollte euch keine Sorgen machen. Der Regen ist schnell wieder vorbei.",
                T0002: "Wie gesagt es wird bald vorbei sein. Mach euch keinen Kopf. Wir haben genug Zeit.",
                T0003: "Wir sollten vielleicht eine Pause einlegen. Auf dem Wasser ist es gefährlich wegen den Wellen",
            }
        };

        ƒS.Speech.setTickerDelays(20, 2);

        ƒS.Sound.fade(sound.jungle, 1, 6);
        await ƒS.Location.show(locations.jungle_shack);
        await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);

        await ƒS.Character.show(characters.girl, characters.girl.pose.angry_arm_crossed, ƒS.positionPercent(20, 140));
        //await ƒS.Character.animate(characters.girl, characters.girl.pose.angry_arm_crossed, shakingLeftSide());

        await ƒS.Character.show(characters.uncle, characters.uncle.pose.backpain, ƒS.positionPercent(80, 140));
        await ƒS.update(1);


        if (dataForSave.open_suitcase == true) {
            let action_choice_uncle_pain = {
                heal_uncle: "Onkel heilen",
                back: "Zurück"               
            };

            let action_request_pain_uncle = await ƒS.Menu.getInput(action_choice_uncle_pain, "location_options");

            switch (action_request_pain_uncle) {
                case action_choice_uncle_pain.heal_uncle:
                    ƒS.Sound.play(sound.click, 1);
                    await ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.girl, characters.girl.pose.laughing, ƒS.positionPercent(20, 140));
                    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true);
                    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001, true);
                    await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(80, 140));
                    await ƒS.Speech.tell(characters.girl, text.girl.T0004, true);
                    dataForSave.fitnessUncle = true;
                    ƒS.Sound.fade(sound.jungle, 0, 1, false);
                    ƒS.Character.hideAll();
                    return "Shelter";
                    break;
                    
                case action_choice_uncle_pain.back:
                    ƒS.Sound.play(sound.click, 1);
                    ƒS.Character.hideAll();
                    ƒS.Sound.fade(sound.jungle, 0, 1, false);
                    return "Map";
                    break;
            }
        } 
        else{

            let action_choice_uncle_pain = {
                arouse_uncle: "Onkel aufwecken",
                open_suitcase: "Über den Koffer sprechen.",
                
            };

            let action_request_pain_uncle = await ƒS.Menu.getInput(action_choice_uncle_pain, "location_options");

            switch (action_request_pain_uncle) {
                case action_choice_uncle_pain.arouse_uncle:
                    ƒS.Sound.play(sound.click, 1);
                    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
                    await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
                    await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
                    await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
                    ƒS.Sound.fade(sound.jungle, 0, 1, false);
                    return "Shelter_Uncle_pain";
                    break;
    
                case action_choice_uncle_pain.open_suitcase:
    
                    if (dataForSave.item_suitcase == true && dataForSave.open_suitcase == false) {
                    ƒS.Sound.play(sound.click, 1);
                    await ƒS.Speech.tell(characters.girl, text.girl.T0003, true);
                    ƒS.Sound.fade(sound.jungle, 0, 1, false);
                    return "OpenSuitcase";
                    }
                    else await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true);
                    return "Shelter_Uncle_pain";
    
                    break;
              
            }

        }


    }
}

