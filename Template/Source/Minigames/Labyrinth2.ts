namespace Template {
    export async function Labyrinth2(): ƒS.SceneReturn {
        let PathDecision = {
            left: "⟵ links",
            right: "rechts ⟶"
        };

        await ƒS.Location.show(locations.jungle_path_2);
        await ƒS.update(transitions.snake3.duration, transitions.snake3.alpha, transitions.snake3.edge);
        ƒS.update(1);
        
        let pathchoice = await ƒS.Menu.getInput(PathDecision, "location_options");

        switch (pathchoice) {
            case PathDecision.left:
                return "Labyrinth3";
                
            case PathDecision.right:
                return "Labyrinth4";
                            
        }
    }

}

