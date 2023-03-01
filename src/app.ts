import { GameScene } from './scenes/mainScene';
import "phaser";

const config: Phaser.Types.Core.GameConfig = {
  title: "GAME",
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: [GameScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  backgroundColor: "#18216D",
};

export class StarfallGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new StarfallGame(config);
};
