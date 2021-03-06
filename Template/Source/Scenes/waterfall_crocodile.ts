namespace Template {
    export async function waterfall_crocodile(): ƒS.SceneReturn {
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
                T0001: "Lass uns schnell weggehen, " + characters.boy.name,
                T0002: "Wir haben keine Waffe. Das Krokodil will uns fressen.",
                T0003: "",
            }
        };

        ƒS.Speech.setTickerDelays(20, 2);

        ƒS.Sound.play(sound.waterfall, 1);
        // await ƒS.Location.show(locations.jungle_lake);
        // await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
        // await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(50, 140));
        // await ƒS.update(1);

        await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);

        await ƒS.Character.hideAll()
        await ƒS.Location.show(locations.crocodile_water);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);

        await ƒS.Location.show(locations.jungle_lake);
        await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
        await ƒS.Character.show(characters.crocodile, characters.crocodile.pose.aggressiv, ƒS.positionPercent(90, 80));
        await ƒS.update(1);
        //await ƒS.Character.show(characters.boy, characters.boy.pose.explain, ƒS.positionPercent(10, 130));

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true);
        await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(30, 130));
        await ƒS.Character.show(characters.girl, characters.girl.pose.desperate, ƒS.positionPercent(10, 140));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
        await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
        await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
        await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);

        let action_choice = {
            stay: "Mit Onkel bleiben",
            flee: "Mit der Cousine weggehen",
        };


        let action_request = await ƒS.Menu.getInput(action_choice, "options");

        switch (action_request) {

            case (action_choice.stay):
                if (dataForSave.energy > 20 && dataForSave.item_axe == true) {
                    await ƒS.Character.hideAll();
                    return "victory_fight";
                } else {
                    await ƒS.Character.hideAll();
                    return "lost_fight";
                }

            case action_choice.flee:
                ƒS.Sound.play(sound.click, 1);
                await ƒS.Character.hideAll();
                ƒS.Sound.fade(sound.waterfall, 0, 0.1);

                if (dataForSave.energy > 25) {
                    dataForSave.uncle_alive = true;
                    return "livesaving_ending";
                } else {
                    dataForSave.uncle_alive = false;
                    return "livesaving_ending";
                }

        }

    }
}



