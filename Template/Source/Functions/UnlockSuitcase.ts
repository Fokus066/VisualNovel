
namespace Template {

    export async function Unlocksuitcase(): ƒS.SceneReturn {

        let text = {
            narrator: {
                T0000: "Es ist eine Zahl zwischen 1 und 100. Wie könnte die Zahl sein?<br>",
                T0001: "Falsche Zahl. Die Zahl ist zu groß.",
                T0002: "Falsche Zahl. Die Zahl ist zu klein.",
                T0003: "Es scheint unmöglich diesen Koffer zu öffnen.",
                T0004: "Geschafft! Eine Wasserflasche, ein Feuerzeug, eine Erste-Hilfe Box und sogar eine Leuchtpistole liegen im Koffer.",

            }
        }
        const randomInt = Math.floor(Math.random()*(100-1+1)+1);
        
        //ƒS.Text.print(randomInt.toString());

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
                dataForSave.item_lighter = true;
                dataForSave.open_suitcase = true;
                
                return "Shelter_Uncle_pain";
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
