namespace Template {
    export async function heavy_rain(): ƒS.SceneReturn {

      console.log("Rain");

      let text = {
        narrator: {
          T0000: "Wie aus dem Nichts wird es dunkel und es beginnt zu regnen. ",
          T0001: "Das Land ist sehr bekannt für Fauna und Flora."
        },
        boy: {
          T0000: "Hä! Auf einmal ist es dunkel. Ich verstehe das nicht...",
          T0001: "Hoffentlich, darauf war ich nicht vorbereitet.",
          T0002: "Das ist echt blöd. Ich hoffe, wir werden unseren Ausflug nicht abbrechen.",
          T0003: "Einverstanden. Mir wird es langsam schlecht."
        },
        girl: {
          T0000: "Oh jee! Das sieht nicht gut aus...",
          T0001: "Ich habe leider keinen Regenschirm mitgenommen.",
          T0002: "Das wäre ziemlich schade. Wir sind so weit gereist.",
          T0003: "Ja, da vorne können wir unser Boot anlegen."

        },
        uncle: { 
          T0000: "Hier ist zur Zeit Regenzeit. Es ist normal, dass es auf einmal regnet.",
          T0001: "Mach euch keine Sorgen. Der Regen ist schnell wieder vorbei.",
          T0002: "Es wird bald vorbei sein. Mach euch keinen Kopf.",
          T0003: "Hmm... Vielleicht ist es besser, wenn wir an dieser Stelle eine Pause einlegen. Mit diesen Wellen ist es zu gefährlich.",
          T0004: "Beruhigt euch. Gott sei dank habe ich zwei Wasserflasche dabei."
        }
      };

      dataForSave.health -= 5;
      dataForSave.power -= 5;

      ƒS.Speech.setTickerDelays(20, 2);
      ƒS.Sound.play(sound.lightning, 1);     
      await ƒS.Location.show(locations.thunderstorm_1);    
      await ƒS.update(transitions.t24.duration, transitions.t24.alpha, transitions.t24.edge);
  
      await ƒS.update(1);   
    
      ƒS.Sound.fade(sound.rain, 5, 0.2, false);
      
      await ƒS.Location.show(locations.jungle_boat_rain);  
      await ƒS.update(1);
      
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true);

      await ƒS.Character.show(characters.boy, characters.boy.pose.explain, ƒS.positionPercent(80, 130));
      await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
      await ƒS.update(1);

      await ƒS.Character.show(characters.girl, characters.girl.pose.desperate, ƒS.positionPercent(20, 130));
      await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);
      await ƒS.update(1);

      await ƒS.Character.show(characters.uncle, characters.uncle.pose.explain, ƒS.positionPercent(50, 130));
      await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
      await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
      await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);
      await ƒS.Speech.tell(characters.uncle, text.uncle.T0002, true);
      await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
      await ƒS.Speech.tell(characters.girl, text.girl.T0002, true);

      await ƒS.Speech.tell(characters.uncle, text.uncle.T0003, true);
      await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);
      await ƒS.Speech.tell(characters.girl, text.girl.T0003, true);
      
      dataForSave.health -= 10;
      dataForSave.power -= 10;

      ƒS.Character.hideAll();

      await ƒS.update(1);
      await ƒS.Location.show(locations.thunderstorm_2);
      ƒS.Sound.fade(sound.rain, 0, 0.1);
      await ƒS.update(1);

     }
  }