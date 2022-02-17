namespace Template {
  export async function Labyrinth_Beginning(): ƒS.SceneReturn {

    let PathDecision = {
      left: "⟵ links",
      right: "rechts ⟶"
    };

    let text = {
      boy: {
        T0000: "<i>So... in welcher Richtung soll ich gehen?</i>"
      },
    }

    await ƒS.Location.show(locations.jungle_path);
    await ƒS.update(transitions.snake2.duration, transitions.snake2.alpha, transitions.snake2.edge);
    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);
    await ƒS.update(1);


    let pathchoice = await ƒS.Menu.getInput(PathDecision, "location_options");

    switch (pathchoice) {
      case PathDecision.left:
        return "Labyrinth3";
        
      case PathDecision.right:
        return "Labyrinth2";
        
    }
  }

}

