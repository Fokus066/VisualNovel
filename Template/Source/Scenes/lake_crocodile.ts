namespace Template {
    export async function lake_crocodile(): ƒS.SceneReturn {
        console.log("Endscene");

        let text = {
            narrator: {
                T0000: "Dein Onkel und deine Cousine kommen dir zu Hilfe.",
                T0001: "",
                T0002: "",
                T0003: "",
            },
            boy: {
                T0000: "Hier gibt es frisches Wasser.",
                T0001: "Was ist das?! Ein KROKODIL!",
                T0002: "Aye! Geschafft!",
                T0003: "<i>Anscheinend fehlt mir ein Werkzeug oder ich brauche mehr Übungen...</i>",
            },
            uncle: {
                T0000: "Er will vielleicht nur Wasser trinken. Lass uns abhauen.",
                T0001: "Oh er ist ziemlich aggressiv. Geht ihr zurück. Ich mache das schon.",
                T0002: "",
                T0003: "",
            },
            girl: {
                T0000: "Oh nein. Das hat uns noch gerade gefehlt.",
                T0001: "Lass uns schnell weggehen, " + characters.boy.name,
                T0002: "",
                T0003: "",
            }
        };

        ƒS.Speech.setTickerDelays(20, 2);

        ƒS.Sound.play(sound.waterfall, 1);
        await ƒS.Location.show(locations.jungle_lake);
        await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
        await ƒS.Character.show(characters.boy, characters.boy.pose.standby, ƒS.positionPercent(50, 140));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
        
        await ƒS.Character.hideAll()
        await ƒS.Location.show(locations.crocodile_water);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);

        await ƒS.Location.show(locations.jungle_lake);
        await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
        await ƒS.Character.show(characters.crocodile, characters.crocodile.pose.aggressiv, ƒS.positionPercent(90, 80));
        await ƒS.update(1);
        //await ƒS.Character.show(characters.boy, characters.boy.pose.explain, ƒS.positionPercent(10, 130));
        
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true);
        await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(30, 130));
        await ƒS.Character.show(characters.girl, characters.girl.pose.desperate, ƒS.positionPercent(10, 130));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
        await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
        await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
        await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);

        let action_choice = {
            stay: "Mit Onkel bleiben.",
            flee: "Mit der Cousine wegrennen.", 
        };

        let action_request = await ƒS.Menu.getInput(action_choice, "options");

        switch (action_request) {

            case (action_choice.stay): 
            await ƒS.Character.hideAll();            
              return "Ending1";
            // return "Ende";     
      
            case action_choice.flee:
              ƒS.Sound.play(sound.click, 1);
              ƒS.Character.hideAll();
              ƒS.Sound.fade(sound.waterfall, 0, 0.1);
              return "Ending2";
              break;
          }





    }
}


