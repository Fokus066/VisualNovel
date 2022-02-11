namespace Template {
    export async function heavy_rain(): ƒS.SceneReturn {

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
          T0000: "Hä! was ist los. Auf einmal ist es dunkel.",
          T0001: "Hoffentlich darauf war ich nicht vorbereitet.",
          T0002: "Das ist echt blöd. Ich hoffe wir werden unseren Ausflug nicht abbrechen.",
          T0003: "Einverstanden. Mir wird es auch langsam schlecht.",
          T0004: "Du bist der Beste Onkel Ben."
        },
        girl: {
          T0000: "Oh jee! Ich verstehe das nicht. Warum gibt es so ein Wetterumschwung.",
          T0001: "Ich habe leider keinen Regenschirm mitgenommen.",
          T0002: "Das wäre ziemlich schade. Wir sind so weit gereist.",
          T0003: "Ja bitte."

        },
        uncle: { 
          T0000: "Da es hier zur Zeit Regenzeit ist, ist es normal das es auf einmal regnet.",
          T0001: "Ihr sollte euch keine Sorgen machen. Der Regen ist schnell wieder vorbei.",
          T0002: "Wie gesagt es wird bald vorbei sein. Mach euch keinen Kopf. Wir haben genug Zeit.",
          T0003: "Wir sollten vielleicht eine Pause einlegen. Auf dem Wasser ist es gefährlich wegen den Wellen",
          T0004: "Beruhigt euch. Gott sei dank habe ich zwei Wasserflasche dabei."
        }
      };

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

      ƒS.Character.hideAll();

      await ƒS.update(1);
      await ƒS.Location.show(locations.thunderstorm_2);
      ƒS.Sound.fade(sound.rain, 0, 0.1);
      await ƒS.update(1);

     }
  }