namespace Template {
  export async function waterfall(): ƒS.SceneReturn {
    console.log("Wasser");

    let action_choice = {
      fish: "Fischen",
      back: "Zurück",
    };
    let text = {
      boy: {
        T0000: "Mal sehen, ob wir was zu essen finden.",
        T0001: "Die Fische schwimmen viel zu schnell.",
        T0002: "Aye! Geschafft!",
        T0003: "<i>Anscheinend fehlt mir ein Werkzeug...</i>",
        T0004: "<i>Leider habe ich das Ziel verfehlt. Versuche gleich nochmal.</i>"
      }
    };

    dataForSave.energy -= 1;

    ƒS.Speech.setTickerDelays(20, 2);

    ƒS.Sound.play(sound.waterfall, 1);
    await ƒS.Location.show(locations.jungle_lake);
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(50, 140));
    await ƒS.update(1);

    let random_boolean = Math.random() < 0.7;

    let action_request = await ƒS.Menu.getInput(action_choice, "options");

    switch (action_request) {
      case action_choice.fish:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Character.hideAll();

        if (random_boolean == true && dataForSave.item_spear == true && dataForSave.mission == 3) {

          await ƒS.Character.show(characters.boy, characters.boy.pose.laughing, ƒS.positionPercent(50, 140));
          await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
          await ƒS.update(1);
          ƒS.Inventory.add(items.fish_1);
          dataForSave.mission += 1;
          dataForSave.item_fish = true;
          dataForSave.energy -= 5,
            ƒS.Inventory.open;
        }
        if (random_boolean == false && dataForSave.item_spear == true && dataForSave.mission == 3) {

          await ƒS.Character.show(characters.boy, characters.boy.pose.disappointed, ƒS.positionPercent(50, 140));
          await ƒS.Speech.tell(characters.boy, text.boy.T0004, true);
          ƒS.Character.hideAll();
          await ƒS.update(1);
          return "Map";

        }
        if (random_boolean == true && dataForSave.item_spear == true) {

          await ƒS.Character.show(characters.boy, characters.boy.pose.laughing, ƒS.positionPercent(50, 140));
          await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
          await ƒS.update(1);
          ƒS.Inventory.add(items.fish_1);
          dataForSave.item_fish = true;
          dataForSave.energy -= 5,
            ƒS.Inventory.open;
        }

        else {
          await ƒS.Character.show(characters.boy, characters.boy.pose.disappointed, ƒS.positionPercent(50, 140));
          await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
          await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);
          await ƒS.update(1);
        }

        ƒS.Character.hideAll();
        ƒS.Sound.fade(sound.waterfall, 0, 1, false);
        return "Map";
       
     

      case action_choice.back:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Character.hide(characters.boy);
        ƒS.Sound.fade(sound.waterfall, 0, 1, false);
        return "Map";
       
    }
  }

}

