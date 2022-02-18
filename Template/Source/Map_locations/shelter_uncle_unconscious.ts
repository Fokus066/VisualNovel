namespace Template {
    export async function shelter_uncle_unconscious(): ƒS.SceneReturn {
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
                T0001: characters.boy.name + ", du bist mein Lebensretter."
            }
        };

        ƒS.Speech.setTickerDelays(20, 2);

        ƒS.Sound.play(sound.jungle, 1, true);
        await ƒS.Location.show(locations.jungle_shack);
        await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);
        await ƒS.update(1);

        await ƒS.Character.show(characters.girl, characters.girl.pose.neutral, ƒS.positionPercent(20, 140));
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
    

                    ƒS.Text.setClass("stylebox");
                    ƒS.Text.print("<p> Du leistest erste Hilfe.</p>");
                    await ƒS.Speech.tell(null, null, true);

                    ƒS.Character.hide(characters.uncle);

                    ƒS.Text.setClass("stylebox");
                    ƒS.Text.print("<p> Dein Onkel gehts wieder besser.</p>");
                    await ƒS.Speech.tell(null, null, true);
                    
                    await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(80, 140));
                    await ƒS.update(1);
                    await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
                    dataForSave.fitnessUncle = true;
                    //await ƒS.Character.hide(characters.girl);
                    //ƒS.Sound.fade(sound.jungle, 0, 1, false);
                    
                    return "Shelter";
                 

                case action_choice_uncle_pain.back:
                    ƒS.Sound.play(sound.click, 1);
                    ƒS.Character.hideAll();
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

            let action_request_pain_uncle = await ƒS.Menu.getInput(action_choice_uncle_pain, "options");

            switch (action_request_pain_uncle) {
                case action_choice_uncle_pain.arouse_uncle:
                    ƒS.Sound.play(sound.click, 1);
                    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
                    await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
                    await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
                    await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
                    //ƒS.Sound.fade(sound.jungle, 0,0 );
                    return "Shelter_Uncle_pain";
                 

                case action_choice_uncle_pain.open_suitcase:

                    if (dataForSave.item_suitcase == true && dataForSave.open_suitcase == false) {
                        ƒS.Sound.play(sound.click, 1);
                        await ƒS.Speech.tell(characters.girl, text.girl.T0002, true);
                        //ƒS.Sound.fade(sound.jungle, 0,0 );
                        return "OpenSuitcase";
                    }
                    return "Shelter_Uncle_pain";

                case action_choice_uncle_pain.back:
                    ƒS.Sound.play(sound.click, 1);
                    ƒS.Character.hideAll();
                    //ƒS.Sound.fade(sound.jungle, 0, 0)
                    return "Map";
                  
            }
        }

    }
}

