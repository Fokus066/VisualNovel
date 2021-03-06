namespace Template {
  export async function heavy_rain(): ƒS.SceneReturn {

    console.log("Rain");

    let text = {
      boy: {
        T0000: "Was ein starker Regen! Es wird immer schlimmer!",
        T0001: "Ich habe auch hier kein Empfang...",
        T0002: "Abgesehen vom Bootsverleiher weiß keiner, wo wir sind. Ich hoffe er hat mitbekommen, wohin wir fahren wollen.",
        T0003: "Hat jemand eine Idee?"
      },
      girl: {
        T0000: "Oh nein! Was sollen wir nur machen?! So habe ich mein Urlaub nicht vorgestellt.",
        T0001: "Ja, habe ich dabei. Wir sollten den Notruf anrufen.",
        T0002: "OH Mist! Im Urwald hat mein Handy kein Signal.",
        T0003: "Was sollen wir nur machen? Weiß jemand, dass wir hier sind?!",
        T0004: "Sieh mal da drüben! Da ist eine kleine Hütte. Lass uns dahin gehen!"
      },
      uncle: { 
        T0000: "Wir sollten Schutz suchen. Der Regen ist viel heftiger, als ich vermutet habe.",
        T0001: "So ist es unmöglich mit dem Boot weiterzufahren. Warten wir solange ab, bis der Regen aufhört.",
        T0002: "Die Wellen sind viel zu stark. Wir sollten abwarten.",
        T0003: "Habt ihr Handyempfang? Mein Handy habe ich wohl während der Bootsfahrt verloren.",
        T0004: "Hmm... Wir sollten uns überlegen, was wir jetzt tun.",
        T0005: "Aua! Langsam bekomme ich starke Rückenschmerzen. Das muss wohl an der langen Bootsfahrt liegen. Lass uns dahin gehen!"
      }
    };

    dataForSave.energy -= 5;

    ƒS.Speech.setTickerDelays(20, 2);
    ƒS.Sound.play(sound.lightning, 1); 
  
    await ƒS.Location.show(locations.jungle_rain_1);    
    await ƒS.update(transitions.t21.duration, transitions.t21.alpha, transitions.t21.edge);
    await ƒS.update(1);

    ƒS.Sound.fade(sound.storm, 2, 0.2, false);

    await ƒS.Character.show(characters.boy, characters.boy.pose.discuss, ƒS.positionPercent(15, 140));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);

    await ƒS.Character.show(characters.girl, characters.girl.pose.annoyed, ƒS.positionPercent(80, 140));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);

    await ƒS.Character.animate(characters.girl, characters.girl.pose.annoyed, shakingRightSide1());
    await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
    await ƒS.update(1);

    await ƒS.Character.show(characters.uncle, characters.uncle.pose.serious, ƒS.positionPercent(50, 140));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);

    await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0002, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0003, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0002, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
    await ƒS.Speech.tell(characters.girl, text.girl.T0003, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0004, true);
    await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);
  

    await ƒS.Character.hide(characters.girl);
    await ƒS.Character.show(characters.girl, characters.girl.pose.pointing, ƒS.positionPercent(85, 130));
    await ƒS.update(2);

    await ƒS.Speech.tell(characters.girl, text.girl.T0004, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0005, true);   

    ƒS.Sound.play(sound.lightning, 1); 
    ƒS.Character.hideAll();
    ƒS.Sound.fade(sound.storm, 0, 0.1);
    
    await ƒS.Location.show(locations.jungle_shack_rain);    
    await ƒS.update(transitions.t26.duration, transitions.t26.alpha, transitions.t26.edge);
    await ƒS.update(1);

   }
}