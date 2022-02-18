namespace Template {
  export async function shelter(): ƒS.SceneReturn {
    //console.log("Boat river");

    let action_choice = {
      talk: "Fragen",
      eat: "Nahrung",
      produce: "Herstellen",
      back: "Zurück",
    };

    let text = {
      uncle: {
        T0000: "...",
        Mission1: "Wir brauchen Essen. Im Wald sind genug essbare Beeren.",
        Mission2: "Die Beeren sind langweilig. Beim Wasserfall gibt es Fische. Um Fische zu fangen, brauchen wir Hilfsmittel. <br> Am einfachsten ist es ein Speer herzustellen. Dazu brauchst du ein Holzstück und Liane.",
        Mission3: "Deine Waffe ist einsatzbereit. Es wird sehr schwierig und körperlich anstrengend sein, die Fische zu treffen. Du kannst mehrmals versuchen, die Fische zu fangen.",
        Mission4: "Wir können die Fische nicht roh essen. Wir müssen sie grillen. Dazu brauchen wir Feuer.",
        Mission5: "Lass die Fische grillen.",
        Mission6: "Geh zum Wasserfall. Nimm eine Waffe zur Verteidigung mit. <br> Man weiß nie, welche Tiere hier plötzlich erscheinen. Also pass auf dich!",
      }
    }


    dataForSave.energy -= 1;

    ƒS.Speech.setTickerDelays(20, 2);

    ƒS.Sound.play(sound.jungle, 1, true);
    await ƒS.Location.show(locations.jungle_shack);
    await ƒS.update(transitions.diagonal.duration, transitions.diagonal.alpha, transitions.diagonal.edge);

    if (dataForSave.energy > 0 && dataForSave.energy <= 20) {
      ƒS.Text.setClass("stylebox");
      ƒS.Text.print("<p> Du hast momentan sehr wenig Energie. Um die Energie aufzuladen, kannst du essen.</p> ");
      await ƒS.Speech.tell(null, null, true);
    }
    if (dataForSave.energy <= 0) {
      ƒS.Character.hideAll();
      ƒS.Text.setClass("stylebox");
      ƒS.Text.print("<p> Du hast keine Energie mehr.");
      await ƒS.Speech.tell(null, null, true);
      return "general_ending";
    }

    await ƒS.Character.show(characters.girl, characters.girl.pose.neutral, ƒS.positionPercent(20, 140));
    await ƒS.Character.show(characters.uncle, characters.uncle.pose.fit, ƒS.positionPercent(80, 140));
    await ƒS.update(1);




    let action_request = await ƒS.Menu.getInput(action_choice, "options");

    switch (action_request) {


      case action_choice.talk:
        ƒS.Sound.play(sound.click, 1);
        //ƒS.Sound.fade(sound.jungle, 0, 0.1);

        if (dataForSave.mission == 1) {
          await ƒS.Speech.tell(characters.uncle, text.uncle.Mission1, true);

        } if (dataForSave.mission == 2) {
          await ƒS.Speech.tell(characters.uncle, text.uncle.Mission2, true);

        } if (dataForSave.mission == 3) {
          await ƒS.Speech.tell(characters.uncle, text.uncle.Mission3, true);

        } if (dataForSave.mission == 4) {
          await ƒS.Speech.tell(characters.uncle, text.uncle.Mission4, true);
        } if (dataForSave.mission == 5) {
          await ƒS.Speech.tell(characters.uncle, text.uncle.Mission5, true);
        } if (dataForSave.mission == 6) {
          await ƒS.Speech.tell(characters.uncle, text.uncle.Mission6, true);
        }
        return "Shelter";
        

      case action_choice.eat:
        ƒS.Sound.play(sound.click, 1);
        return "Eat";
        

      case action_choice.produce:
        ƒS.Sound.play(sound.click, 1);
        return "build_tools";
      

      case action_choice.back:
        ƒS.Sound.play(sound.click, 1);
        //ƒS.Sound.fade(sound.jungle, 0, 0.1);
        ƒS.Character.hideAll();
        return "Map";

       
     

    }

  }
}

