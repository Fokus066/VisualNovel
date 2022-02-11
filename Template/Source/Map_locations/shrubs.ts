namespace Template {
  export async function shrubs(): ƒS.SceneReturn {
    console.log("Boat river");

    let text = {
      boy: {
        T0000: "Mal sehen, ob wir was zu essen finden.",
        T0001: "Es gibts leider nichts",
        T0002: "Yes. Wenigstens etwas Beeren!",
        T0003: "<i>Vielleicht finde ich was beim nächsten Mal.</i>",
      }
    };

    let action_choice = {
      search_berries: "Beeren sammeln",
      back: "Zurück",
    };

    ƒS.Speech.setTickerDelays(20, 2);

    ƒS.Sound.play(sound.jungle_insects, 1);
    await ƒS.Location.show(locations.ferns);
    await ƒS.update(transitions.fur.duration, transitions.fur.alpha, transitions.fur.edge);
    await ƒS.Character.show(characters.boy, characters.boy.pose.standby, ƒS.positionPercent(50, 140));
    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
    await ƒS.update(1);

    let random_boolean = Math.random() < 0.5;

    let action_request = await ƒS.Menu.getInput(action_choice, "location_options");

    switch (action_request) {

      case (action_choice.search_berries):
        ƒS.Sound.play(sound.click, 1);
        ƒS.Character.hideAll();

        if (random_boolean == true) {

          await ƒS.Character.show(characters.boy, characters.boy.pose.laughing, ƒS.positionPercent(50, 140));
          await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
          await ƒS.update(1);
          ƒS.Inventory.add(items.acaiberry);
          dataForSave.item_acaiberry +=1;
          dataForSave.power -= 5,
          ƒS.Inventory.open;
        } else {
          await ƒS.Character.show(characters.boy, characters.boy.pose.disappointed, ƒS.positionPercent(50, 140));
          await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
          await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);
          dataForSave.power -= 5,
          await ƒS.update(1);
        }
        ƒS.Character.hideAll();
        ƒS.Sound.fade(sound.jungle_insects, 0, 0.1);
        return "Map";
      // return "Ende";     

      case action_choice.back:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Character.hideAll();
        ƒS.Sound.fade(sound.jungle_insects, 0, 0.1);
        return "Map";
        break;
    }
  }
}

