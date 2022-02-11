namespace Template {
  export async function waterfall_no_water(): ƒS.SceneReturn {
    console.log("Boat river");

    let action_choice = {
      explore: "Erkunden",
      fish: "Fischen",
      back: "Zurück"
    };

    let text = {
      boy: {
          T0000: "AH! Ich habe die Stelle gefunden.",
          T0001: "<i>Mist! Das Boot ist beschädigt. Wir können so nicht zurückfahren.</i>",
          T0002: "<i>Oh was ist das? Ein Koffer?!</i>",
          T0003: "<i>Er lässt sich nicht öffnen...<br> Ist er verschlossen? Vielleicht kann Jenna mir weiterhelfen.</i>",
      }
    }

    dataForSave.health -= 1;
    dataForSave.power -= 1;

    ƒS.Speech.setTickerDelays(20, 2);

    ƒS.Sound.play(sound.waterfall, 1);
    await ƒS.Location.show(locations.jungle_lake);
    await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
    await ƒS.Character.show(characters.boy, characters.boy.pose.standby, ƒS.positionPercent(50, 140));
    await ƒS.update(1);

    let random_boolean = Math.random() < 0.75;

    let action_request = await ƒS.Menu.getInput(action_choice, "location_options");

    switch (action_request) {

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

      case action_choice.back:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Character.hide(characters.boy);
        ƒS.Sound.fade(sound.waterfall, 0, 1, false);
        return "Map";
        break;

    }
  }

}

