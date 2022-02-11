namespace Template {
  export async function waterfall(): ƒS.SceneReturn {
    console.log("Boat river");

    let action_choice = {
      fish: "Fischen",
      explore: "Erkunden",
      back: "Zurück",
    };

    let text = {
      boy: {
        T0000: "Mal sehen, ob wir was zu essen finden.",
        T0001: "Die Fische schwimmen viel zu schnell.",
        T0002: "Aye! Geschafft!",
        T0003: "<i>Anscheinend fehlt mir ein Werkzeug oder ich brauche mehr Übungen...</i>",
      }
    };

    ƒS.Speech.setTickerDelays(20, 2);

    ƒS.Sound.play(sound.waterfall, 1);
    await ƒS.Location.show(locations.jungle_lake);
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Character.show(characters.boy, characters.boy.pose.standby, ƒS.positionPercent(50, 140));
    await ƒS.update(1);

    let random_boolean = Math.random() < 0.75;

    let action_request = await ƒS.Menu.getInput(action_choice, "location_options");

    switch (action_request) {
      case action_choice.fish:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Character.hideAll();

        if (random_boolean == true && dataForSave.item_spear > 0) {

          await ƒS.Character.show(characters.boy, characters.boy.pose.laughing, ƒS.positionPercent(50, 140));
          await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
          await ƒS.update(1);
          ƒS.Inventory.add(items.fish_1);
          dataForSave.item_fish += 1;
          dataForSave.power -= 5,
            ƒS.Inventory.open;
        } else {
          await ƒS.Character.show(characters.boy, characters.boy.pose.disappointed, ƒS.positionPercent(50, 140));
          await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
          await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);
          await ƒS.update(1);
        }
        ƒS.Character.hideAll();
        ƒS.Sound.fade(sound.waterfall, 0, 1, false);
        return "Map";
        // return "Ende";   
        break;

      case action_choice.explore:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Character.hideAll();

        if (random_boolean == true) {
          ƒS.Character.hideAll();
          ƒS.Sound.fade(sound.waterfall, 0, 1, false);
          return "Waterfall_End";
        } else {
          await ƒS.Speech.tell(characters.narrator, "Hier gibt es nichts zu sehen. Vielleicht wann anders.", true);
          ƒS.Character.hideAll();
          ƒS.Sound.fade(sound.waterfall, 0, 1, false);
          await ƒS.update(1);
          return "Map";
        }

      case action_choice.back:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Character.hide(characters.boy);
        ƒS.Sound.fade(sound.waterfall, 0, 1, false);
        return "Map";
        break;

    }
  }

}

