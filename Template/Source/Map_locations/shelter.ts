namespace Template {
  export async function shelter(): ƒS.SceneReturn {
    console.log("Boat river");

    let action_choice = {
      talk: "Unterhalten",
      eat: "Essen",
      produce: "Herstellen",
      back: "Zurück",
    };

    let text = {
      boy: {
        T0000: "Aufwachen! Wir brauchen dich. "
      },
      girl: {
        T0000: "Ich habe Hunger. Was gibt es hier zum essen?"
      },
      uncle: {
        T0000: "...",
        T0001: "Wir sollten was zum essen und trinken holen.<br> Hier sind bestimmt Waldbeeren, die wir essen können. <br> In der Nähe ist ein Wasserfall. Da gibts sauberes Wasser."
      }
    };

    dataForSave.health -= 1;
    dataForSave.power -= 1;

    ƒS.Speech.setTickerDelays(20, 2);

    ƒS.Sound.play(sound.jungle, 1);
    await ƒS.Location.show(locations.jungle_shack);
    await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);

    await ƒS.Character.show(characters.girl, characters.girl.pose.angry_arm_crossed, ƒS.positionPercent(20, 140));
    await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(80, 140));
    await ƒS.update(1);


    let action_request = await ƒS.Menu.getInput(action_choice, "location_options");


    switch (action_request) {

      case action_choice.talk:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0, 0.1);
        await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
        return "Shelter";
        break;

      case action_choice.eat:
        ƒS.Sound.play(sound.click, 1);
        return "Eat";
        break;

      case action_choice.produce:
        ƒS.Sound.play(sound.click, 1);
        return "build_tools";
        break;

      case action_choice.back:
        ƒS.Sound.play(sound.click, 1);
        ƒS.Sound.fade(sound.jungle, 0, 0.1);
        ƒS.Character.hideAll();
        return "Map";
        break;

    }

  }
}

