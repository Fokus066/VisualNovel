
namespace Template {

    export async function Unlocksuitcase(): ƒS.SceneReturn {

        let text = {
            narrator: {
                T0000: "Wie ist der Code? <br>",
                T0001: "Die Zahl ist zu groß.",
                T0002: "Die Zahl ist zu klein.",
                T0003: "Es ist unmöglich diesen Koffer zu öffnen.",
                T0004: "Geschafft!. Eine Landkarte, eine Wasserflasche und ein Feuerzeug und eine Erste-Hilfe Kiste liegen im Koffer.",
                T0005: "Du kannst die Landkarte ansehen.",
            }
        }
        const randomInt = Math.floor(Math.random()*(100-1+1)+1);
        
        ƒS.Text.print(randomInt.toString());

        let counter = 10;

        do {
            await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + "Anzahl der Versuche: " +counter + "<br>"  , true);
           
            let inputnumber = await ƒS.Speech.getInput();
            let number: number = parseInt(inputnumber)

            if (number == randomInt) {
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0004, true);
                ƒS.Inventory.add(items.lighter);
                ƒS.Inventory.add(items.waterbottle);
                ƒS.Inventory.add(items.first_aid_kit);
                dataForSave.open_suitcase = true,
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0005, true);
                ƒS.Character.hideAll();
                return "Map";
            }
            if (number > randomInt){
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0001, true);
                counter -= 1
            } 
            if (number < randomInt){
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0002, true);
                counter -= 1
            } 


        } while (counter > 0);

        if (counter == 0){

            await ƒS.Speech.tell(characters.narrator, text.narrator.T0003, true);
            ƒS.Character.hideAll();
            dataForSave.open_suitcase = false;
            return "Shelter_Uncle_pain";
        }


    }
}
