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
      { id: "build_tools", scene: build_tools, name: "Wasserfall mit Krokodil" },
      { id: "Eat", scene: Eat, name: "Essen" },
      { id: "Waterfall", scene: waterfall, name: "Wasserfall" },
      { id: "Shrubs", scene: shrubs, name: "Gebüsch" },
      { id: "Waterfall_End", scene: lake_crocodile, name: "Wasserfall mit Krokodil" },
      { id: "Jungle", scene: jungle, name: "Regenwald" },
      { id: "River", scene: river, name: "Fluss" },
      { id: "Waterfall_no_water", scene: waterfall_no_water, name: "Kein Trinkwasser"},
      { id: "Ending1", scene: fight_crocodile, name: "Kampf Krokodil"},
      { id: "Ending2", scene: Good_Bad_Ending_lifesaving, name: "Helicopter"},
       //{ id: "Fishing_Meter", scene: Fishing_Meter, name: "Fischen"},
       
      
      
      //{ scene: jungle_night, name: "rain stops" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}