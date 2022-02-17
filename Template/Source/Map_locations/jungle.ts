namespace Template {
    export async function jungle(): ƒS.SceneReturn {
      console.log("Boat river");
  
      let action_choice = {
        search_wood: "Holz suchen",
        search_stone: "Steine suchen",
        back: "Zurück"
      };

      let text = {
        narrator: {
          T0000: "1x Holz gesammelt und wurde im Inventar abgelegt!",
          T0001: "1x Stein gesammelt und wurde im Inventar abgelegt!",
        }
      };

      dataForSave.energy -= 1;
  
      ƒS.Speech.setTickerDelays(20, 2);
  
      ƒS.Sound.play(sound.jungle_birds, 1); 
      await ƒS.Location.show(locations.jungle_path_2);
      await ƒS.update(transitions.t13.duration, transitions.t13.alpha, transitions.t13.edge);
      await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(50, 140));
      await ƒS.update(1);
      
      let action_request = await ƒS.Menu.getInput(action_choice, "location_options");
      
      switch (action_request) {
        case action_choice.search_wood:
          ƒS.Sound.play(sound.click, 1);
          ƒS.Character.hideAll();
          await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(50, 140));
          await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true);
          await ƒS.update(1);
          ƒS.Inventory.add(items.branch);          
          dataForSave.number_branch += 1;
          dataForSave.energy -= 5,
          ƒS.Inventory.open;        
          
          ƒS.Sound.fade(sound.jungle_birds, 0, 1, false);
          return "Jungle";
          break;
        case action_choice.search_stone:
          ƒS.Sound.play(sound.click, 1);
          ƒS.Character.hideAll();
          await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(50, 140));
          await ƒS.Speech.tell(characters.narrator, text.narrator.T0001, true);
          await ƒS.update(1);
          ƒS.Inventory.add(items.stone);  
          dataForSave.number_stone += 1;
          dataForSave.energy -= 5,
          ƒS.Inventory.open;
         
          ƒS.Sound.fade(sound.jungle_birds, 0, 1, false);
          return "Jungle";
          break;
        case action_choice.back:
          ƒS.Sound.play(sound.click, 1);
          ƒS.Character.hide(characters.boy);
          ƒS.Sound.fade(sound.jungle_birds, 0, 0.1); 
          return "Map";
          break;
      }
    }
  
  }
  
  