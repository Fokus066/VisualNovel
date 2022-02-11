namespace Template {
  export async function Labyrinth_Beginning(): ƒS.SceneReturn {

    let PathDecision = {
      left: "⟵ links",
      right: "rechts ⟶"
    };

    let text = {
      boy: {
        T0000: "<i>Wie war nochmal der Weg? Es ist so verwirrend.</i>"
      },
    }

    await ƒS.Location.show(locations.jungle_path);
    await ƒS.update(transitions.snake2.duration, transitions.snake2.alpha, transitions.snake2.edge);
    await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);

    let pathchoice = await ƒS.Menu.getInput(PathDecision, "location_options");

    switch (pathchoice) {
      case PathDecision.left:
        return "Labyrinth3";
        break;
      case PathDecision.right:
        return "Labyrinth2";
        break;
    }
  }

}

