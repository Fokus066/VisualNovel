namespace Template {
    export async function Labyrinth_Ending(): ƒS.SceneReturn {

        let text = {
            boy: {
                T0000: "AH! iCh habe die Stelle gefunden.",
                T0001: "<i>Mist! Das Wasser hat unser Boot weg getrieben.</i>",
                T0002: "<i>Oh was ist das? Ein Koffer?!</i>",
                T0003: "<i>Ein Koffer?! Oh, er ist mit Zahlen verschlossen. Vielleicht kann Jenna mir weiterhelfen. Lass zurück gehen.</i>",
            }
        }

        ƒS.Location.show(locations.sunken_boat);
        ƒS.update(transitions.waves.duration, transitions.waves.alpha, transitions.waves.edge);
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

