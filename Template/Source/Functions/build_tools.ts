namespace Template {
    export async function build_tools(): ƒS.SceneReturn {
      console.log("Boat river");
  
      let produce_tools = {
        axe: "Axt",
        spear: "Speer",
        back: "Zurück",
      };

      let build_tools_request = await ƒS.Menu.getInput(produce_tools, "options");  
   
          switch (build_tools_request) {
  
            case produce_tools.axe:
              if (dataForSave.item_branch > 0 && dataForSave.item_stone > 0) {
                ƒS.Inventory.add(items.axe);
                await ƒS.Speech.tell(characters.narrator, "Axt ist hergestellt und ist im Inventar.", true);
                ƒS.Sound.fade(sound.jungle, 0, 0.1);
                return "Shelter";
              } else {
                await ƒS.Speech.tell(characters.narrator, "Es fehlt die benötigte Materialien: Mindestens 1x Holz, Mindestens 1x Stein", true);
                ƒS.Sound.fade(sound.jungle, 0, 0.1);
                return "Shelter";
              }
              break;
  
            case produce_tools.spear:
              if (dataForSave.item_branch > 0 && dataForSave.item_liane > 0) {
                ƒS.Inventory.add(items.spear);
                await ƒS.Speech.tell(characters.narrator, "Holz Speer ist hergestellt und ist im Inventar.", true);
                ƒS.Sound.fade(sound.jungle, 0, 0.1);
                return "Shelter";
              } else {
                await ƒS.Speech.tell(characters.narrator, "Es fehlt die benötigte Materialien: Mindestens 1x Holz, Mindestens 1x Liane", true);
                ƒS.Sound.fade(sound.jungle, 0, 0.1);
                return "Shelter";
              }

            case produce_tools.back:
              ƒS.Sound.play(sound.click, 1);
              ƒS.Sound.fade(sound.jungle, 0, 0.1);
              return "Shelter";
          }

      }
  
    }


  
  