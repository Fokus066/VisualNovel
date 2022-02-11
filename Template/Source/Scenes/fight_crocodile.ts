namespace Template {
    export async function fight_crocodile(): ƒS.SceneReturn {

        if (dataForSave.health < 75 && dataForSave.power < 75) {

            await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(15, 140));
            await ƒS.Character.show(characters.crocodile, characters.crocodile.pose.aggressiv, ƒS.positionPercent(70, 80));

            await ƒS.update(1);

            await ƒS.Character.animate(characters.uncle, characters.uncle.pose.fit, LeftFightAnimation());

            await ƒS.Character.show(characters.boy, characters.boy.pose.standby, ƒS.positionPercent(15, 140));
            await ƒS.update(1);

            await ƒS.Character.animate(characters.boy, characters.boy.pose.standby, LeftFightAnimation());
            await ƒS.update(1);

            await ƒS.Character.show(characters.girl, characters.girl.pose.angry_arm_crossed, ƒS.positionPercent(15, 140));
            await ƒS.update(1);

            await ƒS.Character.animate(characters.girl, characters.girl.pose.angry_arm_crossed, LeftFightAnimation());
            await ƒS.update(1);

            await ƒS.Speech.tell(characters.narrator, "Leider waren alle körperlich zu schwach, um gegen den Tiger zu verteidigen.", true);

            await ƒS.Character.hide(characters.crocodile);

            await ƒS.Location.show(locations.game_over);
            await ƒS.Speech.tell(characters.narrator, "Versuch es nächstes Mal besser!", true);
            await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
            await ƒS.update(1);


        }else {
            dataForSave.uncle_alive = true;

            await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(15, 140));
            await ƒS.Character.show(characters.crocodile, characters.crocodile.pose.aggressiv, ƒS.positionPercent(80, 100));

            await ƒS.update(1);

            await ƒS.Character.animate(characters.crocodile, characters.crocodile.pose.aggressiv, RightFightAnimationTiger());

            await ƒS.Character.animate(characters.crocodile, characters.crocodile.pose.aggressiv, EscapeAnimationTiger());

            await ƒS.Speech.tell(characters.narrator, "Das Krokodil ist geflüchtet", true);

            await ƒS.Character.hide(characters.crocodile);

            await ƒS.Location.show(locations.game_over);
            await ƒS.Speech.tell(characters.narrator, "Versuch es nächstes Mal besser!", true);
            await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
            await ƒS.update(1);

            return "Ending2";
        }











    }

}

