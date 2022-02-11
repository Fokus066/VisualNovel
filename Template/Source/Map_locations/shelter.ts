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
      narrator: {
        T0000: "",
        T0001: "Das Land ist sehr gekannt für seine Natur und heißes Wetter.",
        T0002: "Nach dem langen Flug und stressigen Reise seid ihr endlich angekommmen.",
        T0003: "Am nächsten Tag macht deine Familie einen Bootausflug in den Regenwald. Da gibt es sehr viele Tiere und exotische Pflanzen.",
        T0004: "Wie ist dein Name?<br>",
      },
      boy: {
        T0000: "Aufwachen! Wir brauchen dich. ",
        T0001: "<i>Vielleicht gibt es eine Pflanze, die hilft.</i>",
        T0002: "Das ist echt blöd. Ich hoffe wir werden unseren Ausflug nicht abbrechen.",
        T0003: "Einverstanden. Mir wird es auch langsam schlecht.",
        T0004: "Du bist der Beste Onkel Ben.",
      },
      girl: {
        T0000: "Ich habe Hunger. Was gibt es hier zum essen?",
        T0001: "Ich habe leider keinen Regenschirm mitgenommen.",
        T0002: "Das wäre ziemlich schade. Wir sind so weit gereist.",
      },
      uncle: {
        T0000: "...",
        T0001: "Wir sollten was zum essen holen.",
        T0002: "Wie gesagt es wird bald vorbei sein. Mach euch keinen Kopf. Wir haben genug Zeit.",
        T0003: "Wir sollten vielleicht eine Pause einlegen. Auf dem Wasser ist es gefährlich wegen den Wellen",
      }
    };


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

