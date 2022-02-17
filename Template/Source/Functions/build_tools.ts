namespace Template {
  export async function build_tools(): ƒS.SceneReturn {
    console.log("Boat river");

    let produce_tools = {
      axe: "Axt",
      spear: "Speer",
      bonfire: "Lagerfeuer",
      back: "Zurück"
    };

    let build_tools_request = await ƒS.Menu.getInput(produce_tools, "options");

    switch (build_tools_request) {

      case produce_tools.axe:
        if (dataForSave.number_branch >= 1 && dataForSave.number_branch >= 1) {
          ƒS.Inventory.add(items.axe);
          dataForSave.item_axe = true;
          await ƒS.Speech.tell(characters.narrator, "Axt ist hergestellt und liegt nun im Inventar.", true);
          ƒS.Sound.fade(sound.jungle, 0, 0.1);
          return "Shelter";
        } else {
          await ƒS.Speech.tell(characters.narrator, "Es fehlt die benötigte Materialien: Mindestens 1x Holz, Mindestens 1x Stein", true);
          ƒS.Sound.fade(sound.jungle, 0, 0.1);
          return "Shelter";
        }
        break;

      case produce_tools.spear:
        if (dataForSave.number_branch >= 1 && dataForSave.item_liane == true && dataForSave.mission == 2) {
          ƒS.Inventory.add(items.spear);
          dataForSave.item_spear = true;
          dataForSave.mission += 1;
          await ƒS.Speech.tell(characters.narrator, "Holz Speer ist hergestellt und liegt nun im Inventar.", true);
          ƒS.Sound.fade(sound.jungle, 0, 0.1);
          return "Shelter";
        } 
        if (dataForSave.number_branch >= 1 && dataForSave.item_liane == true) {
          ƒS.Inventory.add(items.spear);
          dataForSave.item_spear = true;
          await ƒS.Speech.tell(characters.narrator, "Holz Speer ist hergestellt und liegt nun im Inventar.", true);
          ƒS.Sound.fade(sound.jungle, 0, 0.1);
          return "Shelter";
        }
        else {
          await ƒS.Speech.tell(characters.narrator, "Es fehlt die benötigte Materialien: Mindestens 1x Holz, Mindestens 1x Liane", true);
          ƒS.Sound.fade(sound.jungle, 0, 0.1);
          return "Shelter";
        }

      case produce_tools.bonfire:
        if ( dataForSave.number_stone >= 3 && dataForSave.number_branch >= 3  && dataForSave.item_lighter == true && dataForSave.mission == 4) {
          ƒS.Inventory.add(items.spear);
          dataForSave.mission += 1;
          await ƒS.Speech.tell(characters.narrator, "Das Lagerfeuer ist gebaut. Du kannst jetzt die Fische grillen.", true);
          ƒS.Sound.fade(sound.jungle, 0, 0.1);
          return "Shelter";
        } 
        if ( dataForSave.number_stone >= 3 && dataForSave.number_branch >= 3  && dataForSave.item_lighter == true) {
          ƒS.Inventory.add(items.spear);
          await ƒS.Speech.tell(characters.narrator, "Das Lagerfeuer ist gebaut.", true);
          ƒS.Sound.fade(sound.jungle, 0, 0.1);
          return "Shelter";
        }
        else {
          await ƒS.Speech.tell(characters.narrator, "Du brauchst mindestens 3x Holz, 3x Steine und ein Feuerzeug", true);
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



