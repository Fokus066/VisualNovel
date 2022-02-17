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
      { scene: boat_trip, name: "Visual_Novel begins" },
      { scene: heavy_rain, name: "Catastrophe begins" },
      { scene: rain_shelter, name: "Adventures begins" },
      { scene: rain_stops, name: "rain stops" },

      { id: "Labyrinth_Beginning", scene: Labyrinth_Beginning, name: "Labyrinth_Beginning"},
      { id: "Labyrinth2", scene: Labyrinth2, name: "Labyrinth2"},
      { id: "Labyrinth3", scene: Labyrinth3, name: "Labyrinth3"},      
      { id: "Labyrinth_End", scene: Labyrinth_Ending, name: "Labyrinth_End"},
      
      { id: "Shelter_Uncle_pain", scene: shelter_uncle_unconscious, name: "Unterschlupf" },
      { id: "OpenSuitcase",scene: Unlocksuitcase, name: "Minigame" },
      { id: "Map", scene: jungle_map, name: "overview"},
      { id: "Shelter", scene: shelter, name: "Unterschlupf" },      
      { id: "build_tools", scene: build_tools, name: "Werkzeugherstellung" },
      { id: "Eat", scene: Eat, name: "Essen" },
      { id: "Waterfall", scene: waterfall, name: "Wasserfall" },
      { id: "Shrubs", scene: shrubs, name: "Gebüsch" },
      { id: "Jungle", scene: jungle, name: "Regenwald" },
      { id: "River", scene: river, name: "Fluss" },
      { id: "Waterfall_final", scene: waterfall_final, name: "Kein Trinkwasser"},
      { id: "unforeseen_encounter_crocodile", scene: lake_crocodile, name: "Zufällige Begegnung Krokodil" },
      { id: "victory_fight", scene: victory_fight_crocodile, name: "Kampf Sieg Krokodil"},
      { id: "lost_fight", scene: lost_fight_crocodile_ending, name: "Kampf Niederlage Krokodil"}, 
      { id: "general_ending", scene: general_end, name: "Keine Energie"},
      { id: "livesaving_ending", scene: lifesaving_ending, name: "Helicopter Rettung"},
      { id: "livesaving_bad_ending", scene: lifesaving_bad_ending, name: "Helicopter Rettung ohne Onkel"},
      { id: "END", scene: End, name: "Endgültiges Ende"},
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}