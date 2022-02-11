namespace Template {
    export async function Labyrinth3(): ƒS.SceneReturn {
        let PathDecision = {
            left: "⟵ links",
            right: "rechts ⟶"
        };

        await ƒS.Location.show(locations.jungle_path_3);
        await ƒS.update(transitions.wipe.duration, transitions.wipe.alpha, transitions.wipe.edge);

        let pathchoice = await ƒS.Menu.getInput(PathDecision, "location_options");

        switch (pathchoice) {
            case PathDecision.left:
                return "Labyrinth2";
                break;
            case PathDecision.right:
                return "Labyrinth_Beginning";
                break;           
        }
    }

}

