namespace Template {
  export async function rain_stops(): ƒS.SceneReturn {

    console.log("Rain");

    let text = {
 
      boy: {
        T0000: "Was ist mit ihm los?",
        T0001: "Onkel Ben, wach auf!",
        T0002: "Nein! Das Wasser hat unser Boot weg getrieben.",
        T0003: "Ok... Ich habe eine Idee. Ich schaue mal nach dem Boot. Vielleicht gibt es etwas, was uns weiterhilft.",
        T0004: "Nicht wirklich, aber ich werde ihn schon finden.",
      },
      girl: {
        T0000: "Onkel Ben, ist bei dir alles gut? ",
        T0001: "Er braucht wohl seine Ruhe. Was sollen wir machen?",
        T0002: "Wir sind hier in der Wildnis gefangen.",
        T0003: "Lass ihn! Er ist körperlich erschöpft. Wir sollten ihn ausruhen lassen.",
        T0004: "Lass uns einen Plan überlegen.",
        T0005: "Alles klar! Sei bitte vorsichtig. Ich bleibe hier und passe auf Onkel Ben auf. Kennst du noch den Weg zum Boot?"
      },
      uncle: {
        T0000: "..."
      }
    };

    dataForSave.energy -= 5;

    ƒS.Speech.setTickerDelays(20, 2);

    await ƒS.Speech.tell(characters.narrator, "Langsam hört es auf zu regnen", true);

    await ƒS.Location.show(locations.jungle_shack);
    await ƒS.update(transitions.cwtop.duration, transitions.cwtop.alpha, transitions.cwtop.edge);
   

    await ƒS.Character.show(characters.uncle, characters.uncle.pose.backpain, ƒS.positionPercent(45, 140));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);

    await ƒS.Character.show(characters.girl, characters.girl.pose.neutral, ƒS.positionPercent(80, 140));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);

    await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);

    await ƒS.Character.show(characters.boy, characters.boy.pose.neutral, ƒS.positionPercent(15, 140));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);

    ƒS.Character.hide(characters.girl);
    await ƒS.Character.show(characters.girl, characters.girl.pose.thinking, ƒS.positionPercent(80, 140));
    await ƒS.update(2);

    await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);

    await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0003, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0004, true);

    ƒS.Character.hide(characters.boy);
    await ƒS.Character.show(characters.boy, characters.boy.pose.idea, ƒS.positionPercent(15, 140));

    await ƒS.update(1);
    await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0005, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0004, true);
    
    ƒS.Character.hideAll();
   
  }
}