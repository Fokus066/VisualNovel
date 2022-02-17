namespace Template {
  export async function river(): ƒS.SceneReturn {
    console.log("Boat river");

    let action_choice = {
      collect_liane: "Liane sammeln",
      back: "Zurück"
    };

    let text = {
      narrator: {
        T0000: "1x Liane gesammelt und wurde im Inventar abgelegt!"
      }
    };

    dataForSave.energy -= 1;

    ƒS.Speech.setTickerDelays(20, 2);

    ƒS.Sound.play(sound.river_jungle, 1);
    await ƒS.Location.show(locations.jungle_river);
    await ƒS.update(transitions.t12.duration, transitions.t12.alpha, transitions.t12.edge);
    await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(50, 140));
    await ƒS.update(1);

    let action_request = await ƒS.Menu.getInput(action_choice, "location_options");

    switch (action_request) {

      case action_choice.collect_liane:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(50, 140));
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true);
        await ƒS.update(1);
        ƒS.Inventory.add(items.liane);
        dataForSave.item_liane = true;
        dataForSave.energy -= 5,
          ƒS.Inventory.open;
        ƒS.Character.hideAll();
        ƒS.Sound.fade(sound.river_jungle, 0, 1, false);
        return "Map";

      case action_choice.back:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Character.hide(characters.boy);
        ƒS.Sound.fade(sound.river_jungle, 0, 1, false);
        return "Map";

    }
  }

}

