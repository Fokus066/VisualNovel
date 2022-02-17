namespace Template {
    export async function general_end(): ƒS.SceneReturn {

        await ƒS.Location.show(locations.game_over);
        await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
        ƒS.Text.setClass("stylebox");
        ƒS.Text.print("<p>Deine Mitreisende müssen ohne dich auskommen.<br> Versuch beim nächsten Mal besser.");
        await ƒS.Speech.tell(null, null, true);
        await ƒS.update(4);
        return "END";
    }

}

