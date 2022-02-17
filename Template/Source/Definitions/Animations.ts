namespace Template {

  // Animationen für alle Szenen

  export function LeftFightAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(25, 140), color: ƒS.Color.CSS("white", 0) },
      end: { translation: ƒS.positionPercent(-20, 140), color: ƒS.Color.CSS("red") },
      duration: 1.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }
  
  export function shakingRightSide1(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 140) },
      end: { translation: ƒS.positionPercent(78, 140) },
      duration: 0.25,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }

  export function fromOutofCanvasToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(0, 140) },
      end: { translation: ƒS.positionPercent(10, 140) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }


  //Crocodile
  export function EscapeAnimationCrocodile(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(70, 80)},
      end: { translation: ƒS.positionPercent(180,80)},
      duration: 1.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function CentershakingAnimationCrocodile(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(70, 80)},
      end: { translation: ƒS.positionPercent(72, 80)},
      duration: 0.25,
      playmode: ƒS.ANIMATION_PLAYMODE.REVERSELOOP
    };
  }



}