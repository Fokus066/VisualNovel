namespace Template {

  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  //define transition
  export let transition = {
    clock: {
      duration: 1,
      alpha: "./Transitions/puzzle.png",
      edge: 1,
    }
  };

  //define  sound
  export let sound = {
    backgroundtheme: "",
    //sound
    click: "",
  };

  export let location = {
    bedroom: {
      name: "Bedroom",
      background: "./Transitions/puzzle.png",
    }
  };

  export let character = {
    Narrator: {
      name: ""
    },
    Testperson: {
      name: "test",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
        happy: "",
        upset: ""
      }
    }
  };

  export let dataForSave = {

  };

  console.log("FudgeStory template starting");

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]")
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement),

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}