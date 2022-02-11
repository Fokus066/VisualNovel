// namespace Template {
//     export async function jungle_night(): ƒS.SceneReturn {

//       console.log("Game starts");

//       let text = {
//         narrator: {
//           T0000: "In der Nacht ist es sehr dunkel.Man kann kaum was sehen."
//         },
//         boy: {
//           T0000: "Endlich sind wir da! Die Reise war echt hart.",
//           T0001: "Durch die Bootsfahrt ist angenehmner wegen dem Gegenwind.",
//           T0002: "Ich bin gespannt, was wir heute sehen werden. Ich hoffe wir haben Glück und können Tiere sehen.",
//           T0003: "Oh nein. Das habe ich im Zimmer vergessen.",
//           T0004: "Du bist der Beste, Onkel Ben."
//         },
//         girl: {
//           T0000: "Hier ist ist echt gruselig. Ich kann so nicht schlafen.",
//           T0001: "Oh ja. Das tut gut.",
//           T0002: "Da bin ich ganz deiner Meinung.",
//           T0003: "Das ist wieder mal typisch von dir. Ich werde dir nichts geben. Du bist selber schuld.",
//         },
//         uncle: { 
//           T0000: "Schönes Wetter heute. Wenn wir schonmal hier sind, sollten unbedingt den Regenwald sehen.",
//           T0001: "Das hoffe ich auch.",
//           T0002: "Da es hier ein Naturschutzgebiet ist, leben hier viele Tiere friedlich miteinander.",
//           T0003: "Ihr sollte auf eure Gesundheit achten. Bei diesem Wetter solltet ihr viel Wasser trinken. Ich hoffe ihr habt eure Wasserflasche dabei.",
//           T0004: "Beruhigt euch. Gott sei dank habe ich zwei Wasserflasche dabei."
//         }
//       };
 
//     ƒS.Speech.setTickerDelays(20, 2);
//     ƒS.Sound.play(sound.deep_jungle, 1, true); 
  
//     await ƒS.Location.show(locations.jungle_night_1);    
//     await ƒS.update(transitions.t21.duration, transitions.t21.alpha, transitions.t21.edge);

//     await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true);

//     await ƒS.Character.animate(characters.boy, characters.boy.pose.standby, fromOutofCanvasToRight());
//     await ƒS.Speech.tell(characters.boy, text.boy.T0000, true);

//     await ƒS.update(1);

//     //Animation girl
//     await ƒS.Character.animate(characters.girl, characters.girl.pose.desperate, fromOutofCanvasToLeft());

//     await ƒS.update(1);
    
//     await ƒS.Speech.tell(characters.girl, text.girl.T0000, true);

//     await ƒS.Character.animate(characters.uncle, characters.uncle.pose.backpain, fromOutofCanvasToCenter());

//     await ƒS.update(1);


//     ƒS.Character.hideAll();
//     ƒS.Sound.fade(sound.motorboat, 0, 0.1, true); 
//     await ƒS.update(1);

    
//   }
//   }