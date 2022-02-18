namespace Template {
    export async function lifesaving_ending(): ƒS.SceneReturn {


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

        ƒS.Sound.play(sound.helicopter, 1);
        await ƒS.Location.show(locations.jungle_shack);
        await ƒS.update(transitions.blur.duration, transitions.blur.alpha, transitions.blur.edge);

        await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(75, 140));
        await ƒS.Character.show(characters.girl, characters.girl.pose.searching, ƒS.positionPercent(15, 140));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);

        await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);

        await ƒS.Character.hideAll();

        await ƒS.Location.show(locations.helicopter);
        await ƒS.update(transitions.wipe.duration, transitions.wipe.alpha, transitions.wipe.edge);
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);

        await ƒS.Location.show(locations.jungle_shack);
        await ƒS.update(transitions.wipe.duration, transitions.wipe.alpha, transitions.wipe.edge);
        await ƒS.update(1);

        await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(75, 140));
        await ƒS.Character.show(characters.girl, characters.girl.pose.pointing, ƒS.positionPercent(15, 130));
        await ƒS.update(2);

        await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);

        let shoot_action = await ƒS.Menu.getInput(shoot_flare_gun, "options");

        switch (shoot_action) {

            case (shoot_flare_gun.shoot):
                ƒS.Sound.play(sound.gunshot, 2);
                ƒS.Sound.fade(sound.flare_gun, 0.5, 0.5);
                break;
        }

        await ƒS.update(2);
        await ƒS.Speech.tell(characters.girl, text.girl.T0002, true);
        await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
        await ƒS.Speech.tell(characters.girl, text.girl.T0003, true);
        

        if (dataForSave.uncle_alive == false) {

            await ƒS.Character.hideAll();
            return "livesaving_bad_ending";
        }

        else {

            await ƒS.Character.show(characters.uncle, characters.uncle.pose.backpain, ƒS.positionPercent(45, 140));
            await ƒS.update(1);
    
            await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
            await ƒS.Speech.tell(characters.girl, text.girl.T0004, true);
            await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
            await ƒS.Speech.tell(characters.uncle, text.uncle.T0002, true);
    
            await ƒS.Character.hideAll();
    
            await ƒS.Location.show(locations.helicopter);
            await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);
    
            ƒS.Text.setClass("stylebox");
            ƒS.Text.print("<p>Der Bootsverleih hatte nur bemerkt, dass Touristen verschwunden sind, weil ihm ein Boot gefehlt hat. Er informierte daraufhin ein Rettungsteam. <br> Das Rettungteam sieht die Überlebenden und bringt sie in die Zivilisation zurück.</p>");
            await ƒS.Speech.tell(null, null, true);
    
            await ƒS.Character.hide(characters.crocodile);
    
            await ƒS.Location.show(locations.end);
            await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
            await ƒS.Speech.tell(characters.narrator, "Glückwunsch! Alle haben dank deiner Hilfe überlebt.", true);
            await ƒS.update(4);
            return "END";
        }
    }

}

