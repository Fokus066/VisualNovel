namespace Template {
  export async function boat_trip(): ƒS.SceneReturn {

    console.log("Game starts");

    let text = {
      boy: {
        T0000: "Endlich sind wir da! Die Reise war lang und anstrengend.",
        T0001: "Die Bootsfahrt ist entspannend.",
        T0002: "Ich bin gespannt, was wir heute sehen werden. Ich hoffe, wir haben Glück und können Tiere sehen.",
        T0003: "Es ist schön hier zu sein.",
      },
      girl: {
        T0000: "Aye! Schönes Wetter heute.",
        T0001: "Ja, das stimmt.",
        T0002: "Da bin ich ganz deiner Meinung.",

      },
      uncle: {
        T0000: "Heute ist ein perfekter Tag den Regenwald zu besuchen.",
        T0001: "Das hoffe ich auch.",
        T0002: "Da es hier ein Naturschutzgebiet ist, leben hier sehr viele Tiere.",
      }
    };

    ƒS.Speech.setTickerDelays(20, 2);
    ƒS.Sound.fade(sound.motorboat, 0.2, 1, true);

    await ƒS.Location.show(locations.jungle_boat);
    await ƒS.update(transitions.theatre_opening.duration, transitions.theatre_opening.alpha, transitions.theatre_opening.edge);

    await ƒS.update(1);

    await ƒS.Character.show(characters.boy, characters.boy.pose.pointing, ƒS.positionPercent(80, 140));
    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);

    await ƒS.update(1);

    //Animation girl
    await ƒS.Character.animate(characters.girl, characters.girl.pose.neutral, fromOutofCanvasToLeft());

    await ƒS.update(1);

    await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);

    await ƒS.Character.show(characters.uncle, characters.uncle.pose.neutral, ƒS.positionPercent(50, 140));
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0002, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0002, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);
    ƒS.Character.hideAll();
    ƒS.Sound.fade(sound.motorboat, 0, 0.1, true);
    await ƒS.update(1);


  }
}