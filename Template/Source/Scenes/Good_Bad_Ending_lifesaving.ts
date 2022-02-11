namespace Template {
    export async function Good_Bad_Ending_lifesaving(): ƒS.SceneReturn {

        ƒS.Sound.play(sound.jungle, 1);
        await ƒS.Location.show(locations.jungle_shack);
        await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);

        await ƒS.Character.show(characters.boy, characters.boy.pose.standby, ƒS.positionPercent(15, 140));
        await ƒS.Character.show(characters.girl, characters.girl.pose.angry_arm_crossed, ƒS.positionPercent(75, 140));
        await ƒS.update(1);

        if( dataForSave.uncle_alive == true ){

        await ƒS.Character.hideAll();

        await ƒS.Location.show(locations.helicopter);
        await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);        

        await ƒS.Speech.tell(characters.narrator, "Der Junge und das Mädchen konnten von dem Tiger fliehen. Aber von dem alten Mann fehlt jeder Spur...", true);

        await ƒS.Character.hide(characters.crocodile);

        await ƒS.Location.show(locations.end);
        await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
        await ƒS.Speech.tell(characters.narrator, "Deine Cousine und du konnten überleben. Hätte der Onkel auch überleben können?", true);
        await ƒS.update(1);

        } else {

        await ƒS.Character.show(characters.uncle, characters.uncle.pose.backpain, ƒS.positionPercent(45, 140));
            
        await ƒS.Character.hideAll();

        await ƒS.Location.show(locations.helicopter);
        await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);        

        await ƒS.Speech.tell(characters.narrator, "Alle konnten sich von dem Tiger schützen. Die Helicopter kommt genau zur richtigen Zeit. Das Rettungteam sieht die Überlebenden und bringen nach Hause.", true);

        await ƒS.Character.hide(characters.crocodile);

        await ƒS.Location.show(locations.end);
        await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);
        await ƒS.Speech.tell(characters.narrator, "Glückwunsch! Alle haben dank deine Hilfe die Wildnis überlebt.", true);
        await ƒS.update(1);

        }

        
      










    }

}

