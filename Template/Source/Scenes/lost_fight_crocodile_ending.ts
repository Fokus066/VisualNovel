namespace Template {
    export async function lost_fight_crocodile_ending(): ƒS.SceneReturn {

        let text = {
            boy: {
                T0000: "ONKEL BEN! ICH MACHE DICH FERTIG!",
                T0001: "EY YEAHH!",


            },
            uncle: {
                T0000: "AYY YAAAA!!!",
                T0001: "Schau zu und lerne...",
                T0002: "Gleich nochmal...",


            },
            girl: {
                T0000: "NEIN! " + dataForSave.nameProtagonist,
                T0001: "UGHHH.......",
            }
        };

        
        ƒS.Sound.fade(sound.waterfall, 0, 0.1);

        ƒS.Sound.play(sound.fight, 1);

        await ƒS.Character.show(characters.uncle, characters.uncle.pose.pointing, ƒS.positionPercent(25, 140));
        await ƒS.Character.show(characters.crocodile, characters.crocodile.pose.aggressiv, ƒS.positionPercent(70, 80));

        await ƒS.update(1);

        await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
        await ƒS.Character.hide(characters.crocodile);
        await ƒS.Character.animate(characters.crocodile, characters.crocodile.pose.aggressiv, CentershakingAnimationCrocodile());
        await ƒS.Character.animate(characters.uncle, characters.uncle.pose.pointing, LeftFightAnimation());

        await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(25, 140));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
        await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
        await ƒS.Character.animate(characters.boy, characters.boy.pose.neutral, LeftFightAnimation());
        await ƒS.update(1);


        await ƒS.Character.show(characters.girl, characters.girl.pose.pointing, ƒS.positionPercent(25, 140));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
        await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);
        await ƒS.Character.animate(characters.girl, characters.girl.pose.pointing, LeftFightAnimation());
        await ƒS.update(1);

        await ƒS.Character.hideAll();
        await ƒS.update(1);

        ƒS.Text.setClass("stylebox");
        ƒS.Text.print("<p> Leider waren alle körperlich zu schwach. Niemand hat den Krokodilangriff überlebt. Ein Axt wäre hilfreich gewesen.</p>");
        await ƒS.Speech.tell(null, null, true);

        await ƒS.Character.hide(characters.crocodile);
        ƒS.Sound.fade(sound.fight, 0, 0.1);

        await ƒS.Location.show(locations.game_over);
        await ƒS.Speech.tell(characters.narrator, "Versuch es beim nächsten Mal besser!", true);
        await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
        await ƒS.update(4);
        return "END";

    }
}



