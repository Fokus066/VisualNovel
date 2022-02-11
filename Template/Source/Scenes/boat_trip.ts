namespace Template {
    export async function boat_trip(): ƒS.SceneReturn {

      console.log("Game starts");

      let text = {
        boy: {
          T0000: "Endlich sind wir da! Die Reise war anstrengend.",
          T0001: "Durch die Bootsfahrt ist angenehmner wegen dem Gegenwind.",
          T0002: "Ich bin gespannt, was wir heute sehen werden. Ich hoffe wir haben Glück und können Tiere sehen.",
          T0003: "Oh nein. Das habe ich im Zimmer vergessen.",
          T0004: "Du bist der Beste, Onkel Ben."
        },
        girl: {
          T0000: "Ich freue mich, dass wir endlich hier sind. Das Wetter hier habe ich komplett unterschätzt. Es ist viel zu heiß.",
          T0001: "Oh ja. Das tut gut.",
          T0002: "Da bin ich ganz deiner Meinung.",
          T0003: "Das ist wieder mal typisch von dir. Ich werde dir nichts geben. Du bist selber schuld.",
        },
        uncle: { 
          T0000: "Schönes Wetter heute. Wenn wir schonmal hier sind, sollten unbedingt den Regenwald sehen.",
          T0001: "Das hoffe ich auch.",
          T0002: "Da es hier ein Naturschutzgebiet ist, leben hier viele Tiere friedlich miteinander.",
          T0003: "Ihr sollte auf eure Gesundheit achten. Bei diesem Wetter solltet ihr viel Wasser trinken. Ich hoffe ihr habt eure Wasserflasche dabei.",
          T0004: "Beruhigt euch. Gott sei dank habe ich zwei Wasserflasche dabei."
        }
      };
 
    ƒS.Speech.setTickerDelays(20, 2);
    ƒS.Sound.fade(sound.motorboat, 0.2, 0.1, true); 
  
    await ƒS.Location.show(locations.jungle_boat);    
    await ƒS.update(transitions.theatre_opening.duration, transitions.theatre_opening.alpha, transitions.theatre_opening.edge);

    await ƒS.update(1);

    await ƒS.Character.show(characters.boy, characters.boy.pose.pointing, ƒS.positionPercent(80, 140));
    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);

    await ƒS.update(1);

    //Animation girl
    await ƒS.Character.animate(characters.girl, characters.girl.pose.laughing, fromOutofCanvasToLeft());

    await ƒS.update(1);
    
    await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);

    await ƒS.Character.show(characters.uncle, characters.uncle.pose.explain, ƒS.positionPercent(50, 140));
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0002, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0002, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0003, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0004, true);
    ƒS.Inventory.add(items.waterbottle);
    ƒS.Inventory.add(items.waterbottle);
    await ƒS.Speech.tell(characters.boy, text.boy.T0004, true);
    ƒS.Character.hideAll();
    ƒS.Sound.fade(sound.motorboat, 0, 0.1, true); 
    await ƒS.update(1);

    
  }
  }