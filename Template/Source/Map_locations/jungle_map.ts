namespace Template {
  export async function jungle_map(): ƒS.SceneReturn {
    console.log("Boat river");

    let location_choice = {
      location1: "1 Unterschlupf ",
      location2: "2 Fluss",
      location3: "3 Wald",
      location4: "4 Gebüsch",
      location5: "5 Wasserfall"
    };

    ƒS.Speech.setTickerDelays(20, 2);
    
    ƒS.Sound.play(sound.jungle, 1, true); 
    await ƒS.Location.show(locations.map);
    await ƒS.update(transitions.goslow.duration, transitions.goslow.alpha, transitions.goslow.edge);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, " ", true);
    
    if (dataForSave.energy > 0 && dataForSave.energy <= 20) {
      ƒS.Text.setClass("stylebox");
      ƒS.Text.print("<p> Du hast momentan sehr wenig Energie. Um die Energie aufzuladen, kannst du essen.</p> ");
      await ƒS.Speech.tell(null, null, true);
    }
    if (dataForSave.energy <= 0) {
      ƒS.Character.hideAll();
      ƒS.Text.setClass("stylebox");
      ƒS.Text.print("<p> Du hast keine Energie mehr.");
      await ƒS.Speech.tell(null, null, true);
      return "general_ending";
    }
    
    let location_request = await ƒS.Menu.getInput(location_choice, "location_options");
    
    switch (location_request) {
      case location_choice.location1:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0, 0.1); 
        if (dataForSave.fitnessUncle == false){
          
          return "Shelter_Uncle_pain";
        }
        else 
        return "Shelter";
        
      case location_choice.location2:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0, 0.1); 
        return "River";
       
      case location_choice.location3:
        ƒS.Sound.fade(sound.jungle, 0, 0.1); 
        ƒS.Sound.play(sound.click, 1);
        
        return "Jungle";
       
      case location_choice.location4:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0, 0.1); 
        return "Shrubs";
      
      case location_choice.location5:        
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0, 0.1);  
        if (dataForSave.mission >= 6){
          return "Waterfall_final";
        }
        else {

          return "Waterfall";
        }
      
    }
  }

}

