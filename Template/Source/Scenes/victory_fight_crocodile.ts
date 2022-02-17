namespace Template {
    export async function victory_fight_crocodile(): ƒS.SceneReturn {


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

        await ƒS.Character.show(characters.uncle, characters.uncle.pose.pointing, ƒS.positionPercent(15, 140));
        await ƒS.Character.show(characters.crocodile, characters.crocodile.pose.aggressiv, ƒS.positionPercent(70, 80));

        await ƒS.update(1);

        await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
        await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);

        await ƒS.Character.hide(characters.crocodile);
        await ƒS.Character.animate(characters.crocodile, characters.crocodile.pose.aggressiv, CentershakingAnimationCrocodile());
        await ƒS.Character.hide(characters.crocodile);

        await ƒS.Speech.tell(characters.uncle, text.uncle.T0002, true);
        await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);

        await ƒS.Character.hide(characters.crocodile);
        await ƒS.Character.animate(characters.crocodile, characters.crocodile.pose.aggressiv, EscapeAnimationCrocodile());

        await ƒS.Speech.tell(characters.narrator, "Das Krokodil geht wieder ins Wasser und lässt euch in Ruhe", true);

        dataForSave.uncle_alive = true;
        ƒS.Sound.fade(sound.fight, 0, 0.1);

        await ƒS.Character.hideAll();
        return "livesaving_ending";

    }

}

