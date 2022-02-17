namespace Template {
    export async function lifesaving_bad_ending(): ƒS.SceneReturn {


        ƒS.Text.setClass("stylebox");
        ƒS.Text.print("<p> Der Helikopter sieht die Überlebenden und landet in der Nähe... </p> <p> Ihr wartet stundenlang auf Ben, aber von ihm fehlt jeder Spur...</p>");
        await ƒS.Speech.tell(null, null, true);

        await ƒS.Character.hideAll();

        await ƒS.Location.show(locations.helicopter);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);

        ƒS.Text.setClass("stylebox");
        ƒS.Text.print("<p> Bevor es dunkel wird, entscheiden die Zwei ins Helikopter einzusteigen. Der Helikopter hebt ab und fliegt zum nächsten Flughafen.</p> ");
        await ƒS.Speech.tell(null, null, true);

        ƒS.Sound.fade(sound.waterfall, 0, 0.1);
        ƒS.Sound.fade(sound.helicopter, 0, 0.1);
        ƒS.Sound.fade(sound.flare_gun, 0, 0.1);


        await ƒS.Location.show(locations.end);
        await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
        ƒS.Text.setClass("stylebox");
        ƒS.Text.print("<p> Die Jungendliche haben in der Wildnis überlebt.<br> War es die wirklich richtige Entscheidung, den alten Mann alleine gegen das Krokodil kämpfen zu lassen?</p>");
        await ƒS.Speech.tell(null, null, true);
        await ƒS.update(4);
        return "END";
    }

}

