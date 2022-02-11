namespace Template {

  // Menü 
  export let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close",
    statistic: "Statistic",
    credit: "Credits"
  };

  export function showStatistic(): void {
    ƒS.Text.setClass("statistic");
    ƒS.Text.print("Lebensenergie: " + dataForSave.health + "<br>Lebenskraft: " + dataForSave.power + "<br>");
  };

  export function showCredits(): void {
    ƒS.Text.setClass("statistic");
    ƒS.Text.print("Programming: Romtham Gebhardt <br> Characters: Sims 3 <br> Music and Sound : https://www.zapsplat.com Pictures: Pexels, Pixabay <br>");
  };
  export let gameMenu: ƒS.Menu;

  export let inventory: boolean = false;

  // true = offen; false = geschlossen
  export let menu: boolean = true;


  export async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
      case inGameMenu.statistic:
        showStatistic();
        break;
      case inGameMenu.credit:
        showCredits();
        break;
    }
  }


  // Shortcuts für's Menü
  document.addEventListener("keydown", hndKeyPress);
  export async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menu) {
          console.log("Close");
          gameMenu.close();
          menu = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menu = true;
        }
        break;
      case ƒ.KEYBOARD_CODE.F2:
        if (inventory) {
          console.log("inventory close");
          ƒS.Inventory.close();
          inventory = false;
        }
        else {
          console.log("inventory Open");
          ƒS.Inventory.open();
          inventory = true;
        }
        break;
    }
  }

}