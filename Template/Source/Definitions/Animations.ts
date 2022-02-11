namespace Template {

  // Animationen für alle Szenen

  export function LeftFightAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(15, 140), color: ƒS.Color.CSS("white", 0) },
      end: { translation: ƒS.positionPercent(70, 140), color: ƒS.Color.CSS("red") },
      duration: 1.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }

  export function RightFightAnimationTiger(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 100), color: ƒS.Color.CSS("white", 0) },
      end: { translation: ƒS.positionPercent(20, 140), color: ƒS.Color.CSS("red") },
      duration: 1.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }

  
  export function EscapeAnimationTiger(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 100)},
      end: { translation: ƒS.positionPercent(180, 140)},
      duration: 1.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }

  export function shakingRightSide1(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 130) },
      end: { translation: ƒS.positionPercent(78, 130) },
      duration: 0.25,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }
  
  export function shakingRightSide2(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(78, 130) },
      end: { translation: ƒS.positionPercent(82, 130) },
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

  export function fromOutofCanvasToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(100, 140) },
      end: { translation: ƒS.positionPercent(80, 140) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function fromOutofCanvasToCenter(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(40, 180) },
      end: { translation: ƒS.positionPercent(40, 140) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
}