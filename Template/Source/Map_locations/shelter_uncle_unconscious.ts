namespace Template {
    export async function shelter_uncle_unconscious(): ƒS.SceneReturn {
        console.log("Boat river");

        let text = {
            boy: {
                T0000: "Aufwachen! Wir brauchen dich. ",
                T0001: "<i>Vielleicht finde ich etwas, was uns weiterbringt.<i>"
            },
            girl: {
                T0000: "Keine Chance. Er schläft tief und fest. Wir brauchen ein Gegenmittel.",
                T0001: "Hey! Schau mal ich habe hier eine Karte gefunden. Sie kann uns bestimmt weiterhelfen. ",
                T0002: "Das wäre ziemlich schade. Wir sind so weit gereist.",
                T0003: "Lass mich mal ansehen. Der Koffer ist mit einer Zahlencode verschlossen worden.<br> Es scheint wohl eine Zahl zwischen 1 und 100 zu sein. Du hast allerdings nur 10 Versuchen, dann wird die Zugangszahl neu generiert.",
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

        await ƒS.Character.show(characters.uncle, characters.uncle.pose.backpain, ƒS.positionPercent(80, 140));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);

        if (dataForSave.open_suitcase == true) {
            let action_choice_uncle_pain = {
                heal_uncle: "Onkel heilen",
                back: "Landkarte"
            };

            let action_request_pain_uncle = await ƒS.Menu.getInput(action_choice_uncle_pain, "options");

            switch (action_request_pain_uncle) {
                case action_choice_uncle_pain.heal_uncle:
                    ƒS.Sound.play(sound.click, 1);
                    await ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.girl, characters.girl.pose.laughing, ƒS.positionPercent(20, 140));

                    ƒS.Text.setClass("statistic");
                    ƒS.Text.print("<p> Du leistest die Erste Hilfe an Onkel an.</p>");
                    await ƒS.Speech.tell(null, null, true);

                    ƒS.Text.setClass("statistic");
                    ƒS.Text.print("<p> Dein Onkel gehts wieder besser.</p>");
                    await ƒS.Speech.tell(null, null, true);
                    
                    await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(80, 140));
                    await ƒS.Speech.tell(characters.girl, text.girl.T0004, true);
                    dataForSave.fitnessUncle = true;
                    await ƒS.Character.hide(characters.girl);
                    ƒS.Sound.fade(sound.jungle, 0, 1, false);
                    return "Shelter";
                    break;

                case action_choice_uncle_pain.back:
                    ƒS.Sound.play(sound.click, 1);
                    ƒS.Sound.fade(sound.jungle, 0, 1, false);
                    return "Map";
                    break;
            }
        }
        else {

            let action_choice_uncle_pain = {
                arouse_uncle: "Onkel aufwecken",
                open_suitcase: "Koffer öffnen",
                back: "Landkarte"
            };

            let action_request_pain_uncle = await ƒS.Menu.getInput(action_choice_uncle_pain, "options");

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
                    return "Shelter_Uncle_pain";

                case action_choice_uncle_pain.back:
                    ƒS.Sound.play(sound.click, 1);
                    ƒS.Character.hideAll();
                    ƒS.Sound.fade(sound.jungle, 0, 1, false);
                    return "Map";
                    break;

            }

        }


    }
}

