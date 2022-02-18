namespace Template {
    export async function Introduction(): ƒS.SceneReturn {

    console.log("Game starts");

    ƒS.Speech.setTickerDelays(20, 2);
  
    await ƒS.Location.show(locations.jungle_startscreen);    
    await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);

    await ƒS.update(1);

    ƒS.Text.setClass("statistic"); 
    ƒS.Text.print("<p> Willkommen zum Jungle Survival! </p> <p> In dieser Visual Novel triffst du Entscheidungen, die dann deine Geschichte beeinflussen.<br>Ereignisse können in dem Spiel zufällig passieren. Bei einigen Aufgaben werden bestimmte Gegenstände vorausgesetzt,<br> die ihr vorher erwerben müsst. Es ist möglich die Szenen mehrmals durchzuführen, um ein bestimmtes Ziel zu erreichen.<br> Achte auf deine Lebensenergie, weil sie für bestimmten Handlungen berücksichtigt werden.<br> Hier sind Shortcuts, die das Spielerlebnis erleichtern.</p><p>Spielsteuerung: rechte Maustaste für weiter bzw. klicke auf die Buttons<br>Vollbildschirm Windows: F11 <br>Vollbildschirm  Mac: Ctrl - Cmd – F <br> Inventar: F2 <br> Menu öffnen/schlließen: M </p>  </p> <p> Viel Spaß! </p>");
    await ƒS.Speech.tell(null, null, true);
    ƒS.Text.print("<p> Du spielst die Rolle von einem Jungen, der mit seinen Verwandten nach Chalana fliegt.<br>Dort befindet sich ein Regenwald. Dieser ist ein Naturschutzgebiet und ist seit kurzem für Tourismus geöffnet.<br> Gemeinsam mit deinem Onkel und deiner Cousine leiht ihr ein Boot aus und fahrt in den Dschungel.</p>");
    await ƒS.Speech.tell(null, null, true);
    await ƒS.Speech.tell(characters.narrator, "Wie möchtest du im Spiel genannt werden?<br>" , true);
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    characters.boy.name =  dataForSave.nameProtagonist
    ƒS.Text.print("<p>Das Spiel beginnt!</p> <p>Tipp:</p> <p>Um weiterzukommen, kannst du dem Onkel fragen. <br> Du kannst dich an der Statistik (in Menu) orientieren.</p>");
    await ƒS.Speech.tell(null, null, true);
    
  }
  }