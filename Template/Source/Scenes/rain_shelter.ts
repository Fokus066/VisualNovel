namespace Template {
  export async function rain_shelter(): ƒS.SceneReturn {

    console.log("Rain");

    let text = {
      narrator: {
        T0000: "Wie aus dem Nichts wird der Himmel dunkel. ",
        T0001: "Das Land ist sehr gekannt für seine Natur und heißes Wetter.",
        T0002: "Nach dem langen Flug und stressigen Reise seid ihr endlich angekommmen.",
        T0003: "Am nächsten Tag macht deine Familie einen Bootausflug in den Regenwald. Da gibt es sehr viele Tiere und exotische Pflanzen.",
        T0004: "Wie ist dein Name?<br>"
      },
      boy: {
        T0000: "Was ein starker Regen! Es wird immer schlimmer!",
        T0001: "Ich habe zwar mein Handy dabei. Der Akku ist leer, weil ich die ganze Zeit fotografiert habe.",
        T0002: "Du bist auch nicht viel besser. Du benutzt ein Handy mit einem beschädigten Display. Kein Wunder, dass das Handy Wasserschade hat.",
        T0003: "Was sind denn unsere nächsten Schritte?",
        T0004: "Du bist der Beste Onkel Ben."
      },
      girl: {
        T0000: "Oh nein! Was sollen wir nur machen. So habe ich mein Urlaub nicht vorgestellt.",
        T0001: "Ja zum Glück habe ich meins dabei. Wir sollten den Notruf anrufen.",
        T0002: "Nein, mein Handy hat Wasserschaden. Es lässt sich nicht einschalten.",
        T0003: "Oh Man! Du bist echt nicht mehr zu helfen! Was würdest du nur tun, wenn du alleine verreist wärst.",
        T0004: "Sieh mal da drüben ist Schutz. Lass uns hingehen!"
      },
      uncle: { 
        T0000: "Wir sollten uns eine Unterkunft oder Schutz suchen. So können wir nicht zum Hotel fahren!",
        T0001: "Das Motor von dem Boot funktioniert nicht. Wir können das Boot nicht mehr nutzen.",
        T0002: "Die Wellen sind viel zu stark. Wir sollten abwarten.",
        T0003: "Habt ihr vielleicht Handyempfang. Mein Handy habe ich wohl von dem Bootsfahrt verloren.",
        T0004: "Streitet euch nicht. Es hilft keinem weiter. Wir sollten uns auf unsere nächsten Schritte konzentrieren.",
        T0005: "In der Zwischenzeit können wir uns nur nach Unterkunft schauen. Haltet eure Augen offen!",
        T0006: "Gehen wir!"
      }
    };

    ƒS.Speech.setTickerDelays(20, 2);
    ƒS.Sound.play(sound.lightning, 1); 
  
    await ƒS.Location.show(locations.jungle_rain_1);    
    await ƒS.update(transitions.t21.duration, transitions.t21.alpha, transitions.t21.edge);

    await ƒS.update(1);

    ƒS.Sound.fade(sound.storm, 2, 0.2, false);

    await ƒS.Character.show(characters.boy, characters.boy.pose.explain, ƒS.positionPercent(15, 130));
    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
    await ƒS.update(1);

    await ƒS.Character.show(characters.girl, characters.girl.pose.annoyed, ƒS.positionPercent(80, 130));
    await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
    await ƒS.update(1);

    await ƒS.Character.animate(characters.girl, characters.girl.pose.annoyed, shakingRightSide1());
    //await ƒS.Character.animate(characters.girl, characters.girl.pose.annoyed, shakingRightSide2());
    await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
    await ƒS.update(1);

    await ƒS.Character.show(characters.uncle, characters.uncle.pose.explain_angry, ƒS.positionPercent(50, 140));
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
    await ƒS.update(1);

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
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0005, true);

    await ƒS.Character.hide(characters.girl);
    await ƒS.Character.show(characters.girl, characters.girl.pose.pointing, ƒS.positionPercent(85, 128));
    await ƒS.update(2);

    await ƒS.Speech.tell(characters.girl, text.girl.T0004, true);
    await ƒS.Speech.tell(characters.uncle, text.uncle.T0006, true);   

    ƒS.Sound.play(sound.lightning, 1); 
    ƒS.Character.hideAll();
    ƒS.Sound.fade(sound.storm, 0, 0.1);
    
    await ƒS.Location.show(locations.jungle_shack_rain);    
    await ƒS.update(transitions.t26.duration, transitions.t26.alpha, transitions.t26.edge);

    await ƒS.update(1);

   }
}