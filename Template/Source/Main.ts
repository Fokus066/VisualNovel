namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  
  // Branching path zeigen, wie's geht; Szenenstruktur erklären
  window.addEventListener("load", start);
  function start(_event: Event): void {
    // Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");


    let scenes: ƒS.Scenes = [
      { scene: Introduction, name: "Introduction" },
      { scene: boat_trip, name: "VN begins" },
      { scene: rain, name: "rain" },
      { scene: heavy_rain, name: "heavy_rain" },
      { scene: rain_stops, name: "rain stops" },

      { id: "Labyrinth_Beginning", scene: Labyrinth_Beginning, name: "Labyrinth1" },
      { id: "Labyrinth2", scene: Labyrinth2, name: "Labyrinth2" },
      { id: "Labyrinth3", scene: Labyrinth3, name: "Labyrinth3" },
      { id: "Labyrinth4", scene: Labyrinth4, name: "Labyrinth4" },
      { id: "Labyrinth_End", scene: Labyrinth_Ending, name: "LabyrinthEnd" },

      { id: "Shelter_Uncle_pain", scene: shelter_uncle_unconscious, name: "shelter injured uncle" },
      { id: "OpenSuitcase", scene: Unlocksuitcase, name: "Random number" },
      { id: "Map", scene: jungle_map, name: "overview" },
      { id: "Shelter", scene: shelter, name: "shelter" },
      { id: "build_tools", scene: build_tools, name: "tools" },
      { id: "Eat", scene: Eat, name: "Food" },
      { id: "Waterfall", scene: waterfall, name: "waterfall" },
      { id: "Shrubs", scene: shrubs, name: "Shrubs" },
      { id: "Jungle", scene: jungle, name: "deeep jungle" },
      { id: "River", scene: river, name: "River" },
      { id: "Waterfall_final", scene: waterfall_final, name: "Waterfall_endscene" },
      { id: "unforeseen_encounter_crocodile", scene: waterfall_crocodile, name: "encounter crocodile" },
      { id: "victory_fight", scene: victory_fight_crocodile, name: "victory_fight" },
      { id: "lost_fight", scene: lost_fight_crocodile_ending, name: "lost_fight" },
      { id: "general_ending", scene: general_end, name: "no energy" },
      { id: "livesaving_ending", scene: lifesaving_ending, name: "Helicopter saving" },
      { id: "livesaving_bad_ending", scene: lifesaving_bad_ending, name: "Helicopter saving without uncle" },
      { id: "END", scene: End, name: "Endgültiges Ende" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}