namespace Template {
    export async function fight_crocodile(): ƒS.SceneReturn {
        
        ƒS.Sound.fade(sound.waterfall, 0, 0.1);
    
        if (dataForSave.health > 75 && dataForSave.power > 75 && dataForSave.fitnessUncle == true && dataForSave.item_axe > 0) {

            ƒS.Sound.play(sound.fight, 1);

            await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(15, 140));
            await ƒS.Character.show(characters.crocodile, characters.crocodile.pose.aggressiv, ƒS.positionPercent(70, 80));
            
            await ƒS.update(1);

            await ƒS.Character.animate(characters.crocodile, characters.crocodile.pose.aggressiv, RightFightAnimationCrocodile());
            await ƒS.Character.hide(characters.crocodile);
            
            await ƒS.Character.show(characters.crocodile, characters.crocodile.pose.aggressiv, ƒS.positionPercent(70, 80));
            await ƒS.update(2);
            
            await ƒS.Character.animate(characters.crocodile, characters.crocodile.pose.aggressiv, EscapeAnimationCrocodile());
            
            await ƒS.Speech.tell(characters.narrator, "Das Krokodil geht wieder ins Wasser und lässt euch in Ruhe", true);
            
            await ƒS.Character.hide(characters.crocodile);
            
            dataForSave.uncle_alive = true;
            ƒS.Sound.fade(sound.fight, 0, 0.1);

            await ƒS.Character.hideAll();
            return "Ending2";

        }else {
            ƒS.Sound.fade(sound.fight, 0, 0.1);

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

            await ƒS.Speech.tell(characters.narrator, "Leider waren alle körperlich zu schwach, um gegen das Krokodil zu verteidigen.", true);

            await ƒS.Character.hide(characters.crocodile);
            ƒS.Sound.fade(sound.fight, 0, 0.1);

            await ƒS.Location.show(locations.game_over);
            await ƒS.Speech.tell(characters.narrator, "Versuch es beim nächsten Mal besser!", true);
            await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
            await ƒS.update(1);

        }











    }

}

