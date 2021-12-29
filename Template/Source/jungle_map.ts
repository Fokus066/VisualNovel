namespace Template {
    export async function jungle_map(): ƒS.SceneReturn {
      console.log("overview");
  
      ƒS.Speech.setTickerDelays(20, 2);
      ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
    
      await ƒS.Location.show(map.jungle);
      await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
      //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(30, 100));
      await ƒS.update(1);
      // Animationen parallel abspielen  
  

  
  
      // if (dataForSave.points === 100) {
      //   return End();
      // }
  
      // return "Ende";
      // return End();
    }
  
  }
  
  