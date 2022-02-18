namespace Template {
    export async function rain(): ƒS.SceneReturn {

      console.log("Rain");

      let text = {
        narrator: {
          T0000: "Nach einer Weile wird es langsam dunkel und es beginnt zu regnen... ",
        },
        boy: {
          T0000: "So ein Mist?! Es fängt an zu regnen...",
          T0001: "Hoffentlich, darauf war ich nicht vorbereitet.",
          T0002: "Das ist echt blöd. Ich hoffe, wir müssen unseren Ausflug nicht abbrechen.",
          T0003: "OK! Da vorne können wir unser Boot anlegen."
        },
        girl: {
          T0000: "Oh jeh! Das sieht für die heutige Tour nicht gut aus...",
          T0001: "Bin auch nicht vorbereitet.",
          T0002: "Das wäre ziemlich schade. Wir sind so weit gereist.",
          T0003: "Ist besser so. Mir wird langsam von der Bootsfahrt schlecht."

        },
        uncle: { 
          T0000: "Zur Zeit ist Regenzeit. Es ist normal, dass es plötzlich regnet.",
          T0001: "Mach euch keine Sorgen. Es ist bald wieder vorbei.",
          T0003: "Die Wellen werden immer stärker. Vielleicht ist es besser, wenn wir an dieser Stelle eine Pause einlegen und an Land gehen. Mit diesen Wellen ist es zu gefährlich."
        }
      };

      dataForSave.energy -= 5;

      ƒS.Speech.setTickerDelays(20, 2);
      ƒS.Sound.play(sound.lightning, 1);     
      await ƒS.Location.show(locations.thunderstorm_1);    
      await ƒS.update(transitions.t24.duration, transitions.t24.alpha, transitions.t24.edge);
  
      await ƒS.update(1);   
    
      ƒS.Sound.fade(sound.rain, 5, 0.2,true);
      
      await ƒS.Location.show(locations.jungle_boat_rain);  
      await ƒS.update(1);
      
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true);

      await ƒS.Character.show(characters.boy, characters.boy.pose.discuss, ƒS.positionPercent(80, 140));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);

      await ƒS.Character.show(characters.girl, characters.girl.pose.desperate, ƒS.positionPercent(20, 140));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);

      await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(50, 140));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.uncle, text.uncle.T0000, true);

      await ƒS.Speech.tell(characters.uncle, text.uncle.T0001, true);
      await ƒS.Speech.tell(characters.boy, text.boy.T0001, true);
      await ƒS.Speech.tell(characters.girl, text.girl.T0001, true);
      await ƒS.Speech.tell(characters.boy, text.boy.T0002, true);
      await ƒS.Speech.tell(characters.girl, text.girl.T0002, true);

      await ƒS.Speech.tell(characters.uncle, text.uncle.T0003, true);

      ƒS.Character.hide(characters.boy);
      await ƒS.Character.show(characters.boy, characters.boy.pose.pointing, ƒS.positionPercent(80, 140));
      await ƒS.update(1);
      
      await ƒS.Speech.tell(characters.boy, text.boy.T0003, true);
      await ƒS.Speech.tell(characters.girl, text.girl.T0003, true);
      
      dataForSave.energy -= 10;

      ƒS.Character.hideAll();

      await ƒS.Location.show(locations.thunderstorm_2);
      ƒS.Sound.fade(sound.rain, 0, 0.1);
      await ƒS.update(1);
     }
  }