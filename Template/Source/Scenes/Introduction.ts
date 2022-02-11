namespace Template {
    export async function Introduction(): ƒS.SceneReturn {

    console.log("Game starts");

     
    ƒS.Speech.setTickerDelays(20, 2);
  
    await ƒS.Location.show(locations.jungle_startscreen);    
    await ƒS.update(transitions.t19.duration, transitions.t19.alpha, transitions.t19.edge);

    await ƒS.update(1);

    ƒS.Text.setClass("statistic"); 
    ƒS.Text.print("<p> Willkommen zum Jungle Survival! </p> <p> Diese Visual Novel basiert auf deine Entscheidungen und Fähigkeit.<br> Hier spielt der Zufall eine Rolle, daher kann es sein, dass man bestimmte Szene abspielen,<br>  muss um das gewünschte Ergebnis erreichen.<br> Mit einem Click auf dem Bildschirm, kommt man in der nächsten Szene weiter. <br> Für den Vollbildschirm, könnt ihr Folgendes drücken: </p> <p> Windows: F11 <br> Mac: Ctrl - Cmd – F </p> </p> <p> Viel Spaß! </p>");
    await ƒS.Speech.tell(null, null, true);
    ƒS.Text.print("<p> Du spielst die Rolle eines Jungen,der gemeinsam <br> mit seinem Onkel und seiner Cousine Urlaub machst.<br>");
    await ƒS.Speech.tell(null, null, true);
    await ƒS.Speech.tell(characters.narrator, "Wie möchtest du im Spiel genannt werden?<br> " , true);
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    characters.boy.name =  dataForSave.nameProtagonist
    ƒS.Text.print("<p> Das Spiel beginnt!</p>");
    await ƒS.Speech.tell(null, null, true);
    
  }
  }