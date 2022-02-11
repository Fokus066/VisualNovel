namespace Template {
  export async function rain_stops(): ƒS.SceneReturn {

    console.log("Rain");

    let text = {
      narrator: {
        T0000: "Der Regen hört langsam auf.",
      },
      boy: {
        T0000: "Genug geschlafen! Lass uns geschlafen. Lass uns endlich zum Hotel zurückfahren.",
        T0001: "",
        T0002: "Nein! Das Wasser hat unser Boot weg getrieben.",
        T0003: "Uncle Ben, wach auf!",
        T0004: "Ruhig bleiben! Ich schaue mal nach dem Boot. Vielleicht gibt es etwas, was uns weiterhilft.",
      },
      girl: {
        T0000: "Was für ein ereignisreicher Tag!",
        T0001: "Ja! Es war ein schreckliches Erlebnis.",
        T0002: "Wir sind hier in der Wildnis gefangen.",
        T0003: "Lass uns zurückgehen und einen Plan überlegen.",
        T0004: "Er ist ohnmächtig geworden. Wir müssen ihn wecken.",
        T0005: "Sei bitte vorsichtig. Ich bleibe hier und passe auf Onkel Ben auf."
      },
      uncle: {
        T0000: "Das war ziemlich anstrengend. Ich bin körperlich fertig.",
        T0001: "Wie sollten uns ausruhen.",
        T0002: "...",
      }
    };

    dataForSave.health = 50;
    dataForSave.power = 50;

    ƒS.Speech.setTickerDelays(20, 2);

    ƒS.Text.print("Es hat aufgehört zu regnen...");
    await ƒS.Speech.tell(null, null, true);

    await ƒS.Location.show(locations.jungle_shack);
    await ƒS.update(transitions.cwtop.duration, transitions.cwtop.alpha, transitions.cwtop.edge);
   

    await ƒS.Character.show(characters.uncle, characters.uncle.pose.backpain, ƒS.positionPercent(45, 150));
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
    await ƒS.update(1);

    await ƒS.Character.show(characters.girl, characters.girl.pose.angry_arm_crossed, ƒS.positionPercent(80, 140));
    await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);

    await ƒS.Character.show(characters.boy, characters.boy.pose.standby, ƒS.positionPercent(15, 140));
    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);

    await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0002, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0004, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0004, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0005, true);
    await ƒS.update(1);

    ƒS.Character.hideAll();

  }
}