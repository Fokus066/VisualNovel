namespace Template {
    export async function Labyrinth_Ending(): ƒS.SceneReturn {

        let text = {
            boy: {
                T0000: "AH! Ich habe die Stelle gefunden.",
                T0001: "<i>Mist! Das Boot ist beschädigt. Wir können so nicht zurückfahren.</i>",
                T0002: "<i>Oh was ist das? Ein Koffer?!</i>",
                T0003: "<i>Er lässt sich nicht öffnen...<br> Ist er verschlossen? Vielleicht kann Jenna mir weiterhelfen.</i>",
            }
        }

        await ƒS.Location.show(locations.sunken_boat);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.update(1);
        await ƒS.Character.show(characters.boy, characters.boy.pose.standby, ƒS.positionPercent(15, 140));
        await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);  
        ƒS.update(1);

        await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);   
        //animation
        await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);   
        ƒS.Inventory.add(items.suitcase);
        dataForSave.item_suitcase = true;
        dataForSave.open_suitcase = false,
        ƒS.Inventory.open;     
        await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);   

        ƒS.Character.hideAll();


    }

}

