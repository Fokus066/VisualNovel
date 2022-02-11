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
    
    ƒS.Sound.fade(sound.jungle, 1, 6,true); 
    await ƒS.Location.show(locations.map);
    await ƒS.update(transitions.goslow.duration, transitions.goslow.alpha, transitions.goslow.edge);
    await ƒS.update(1);
    
    let location_request = await ƒS.Menu.getInput(location_choice, "location_options");
    
    switch (location_request) {
      case location_choice.location1:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0.1, 6); 
        return "Shelter";
        break;
   

      case location_choice.location2:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0, 0.1); 
        return "River";
        break;
      case location_choice.location3:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0, 0.1); 
        return "Jungle";
        break;
      case location_choice.location4:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0, 0.1); 
        return "Shrubs";
        break;
      case location_choice.location5:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0, 0.1);  
        return "Waterfall";
        break;
    }
  }

}

