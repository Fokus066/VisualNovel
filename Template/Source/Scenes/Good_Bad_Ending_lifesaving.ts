namespace Template {
    export async function Good_Bad_Ending_lifesaving(): ƒS.SceneReturn {


        let text = {
            boy: {
                T0000: "Oh mann. Hier ist es echt gefährlich. Was sollen wir jetzt machen?",
                T0001: "Ja, mach ich ...",
                T0002: "Auf jeden Fall!"

            },
            girl: {
                T0000: "Warte...Hörst du das auch? Ist es etwa ein Helicopter? <br> Lass schnell die Leuchtpistole abfeuern, damit sie uns bemerken.",
                T0001: "Was machen wir mit Onkel Ben? Sollen wir auf ihn warten?",
                T0002: "Ich hoffe er kommt bald.",
                T0003: "Ja, du hast überlebt."

            },
            uncle: {
                T0000: "Hey! Ich bin da!",
                T0001: "Sehr gut! Ein Helicopter ist da, um uns zu retten. ",
                T0002: "Lass uns nach Hause fliegen!",
            }
        };

        ƒS.Sound.play(sound.helicopter, 1);
        await ƒS.Location.show(locations.jungle_shack);
        await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);

        await ƒS.Character.show(characters.boy, characters.boy.pose.standby, ƒS.positionPercent(15, 140));
        await ƒS.Character.show(characters.girl, characters.girl.pose.angry_arm_crossed, ƒS.positionPercent(75, 140));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
        await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
        await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
        //ƒS.Sound.play(sound.flare_gun, 1);

        let shoot_flare_gun = {
            shoot: "Abfeuern",
        };

        let shoot_action = await ƒS.Menu.getInput(shoot_flare_gun, "options");
        
        switch (shoot_action) {

            case (shoot_flare_gun.shoot):
                ƒS.Sound.play(sound.gunshot, 2);
                ƒS.Sound.fade(sound.flare_gun, 0.5, 0.5);
                break;
        }
        await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);
        await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
        dataForSave.uncle_alive = false;
        if (dataForSave.uncle_alive == false) {

            ƒS.Text.setClass("statistic");
            ƒS.Text.print("<p> Der Helikopter sieht die Überlebenden und landet in der Nähe... </p> <p> Ihr wartet stundenlang auf Ben, aber von ihm fehlt jeder Spur...</p>");
            await ƒS.Speech.tell(null, null, true);

            await ƒS.Character.hideAll();

            await ƒS.Location.show(locations.helicopter);
            await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);

            ƒS.Text.setClass("statistic");
            ƒS.Text.print("<p> Bevor es dunkel wird, entscheiden die Zwei ins Helikopter einzusteigen. Der Helikopter hebt ab und fliegt zum nächsten Flughafen.</p> ");
            await ƒS.Speech.tell(null, null, true);

            ƒS.Sound.fade(sound.waterfall, 0, 0.1);
            ƒS.Sound.fade(sound.helicopter, 0, 0.1);
            ƒS.Sound.fade(sound.flare_gun, 0, 0.1);


            await ƒS.Location.show(locations.end);
            await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
            ƒS.Text.setClass("statistic");
            ƒS.Text.print("<p> Die Jungendliche haben in der Wildnis überlebt.<br> War es die wirklich richtige Entscheidung, den alten Mann alleine gegen das Krokodil kämpfen zu lassen?</p>");
            await ƒS.Speech.tell(null, null, true);
            await ƒS.update(1);



        } else {
           
            await ƒS.Character.show(characters.uncle, characters.uncle.pose.backpain, ƒS.positionPercent(45, 140));
            await ƒS.update(1);

            await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
            await ƒS.Speech.tell(characters.girl, text.girl.T0003, true);
            await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
            await ƒS.Speech.tell(characters.uncle, text.uncle.T0002, true);

            await ƒS.Character.hideAll();

            await ƒS.Location.show(locations.helicopter);
            await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);

            ƒS.Text.setClass("statistic");
            ƒS.Text.print("<p> Die Helicopter kommt genau zur richtigen Zeit. Das Rettungteam sieht die Überlebenden und bringt sie zum nächsten Flughafen.</p>");
            await ƒS.Speech.tell(null, null, true);

            await ƒS.Character.hide(characters.crocodile);

            await ƒS.Location.show(locations.end);
            await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
            await ƒS.Speech.tell(characters.narrator, "Glückwunsch! Alle haben dank deiner Hilfe überlebt.", true);
            await ƒS.update(1);

        }













    }

}

