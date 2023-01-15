import Phaser from "phaser";
import preload from "./scenes/preload"
import world from "./scenes/world"
import city1 from "./scenes/city1";
import city2 from "./scenes/city2";
import city3 from "./scenes/city3";
import dungeon from "./scenes/dungeon";
import village from "./scenes/village";


import VirtualJoystickPlugin from "phaser3-rex-plugins/plugins/virtualjoystick-plugin.js";
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import EventEmitterMethods from 'phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitterMethods.js';
import { GzDialog } from "./plugins/GzDialog.js";


window.TOPIC1 = "MOVE"
window.TOPIC2 = "EVENT"

export default class Game extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      width: 16 * 20 * 2,
      height: 16 * 10 * 2,
      physics: {
        default: "arcade",
        arcade: {
          debug: true,
        },
      },
      plugins: {
        global: [
          {
            key: "rexVirtualJoystick",
            plugin: VirtualJoystickPlugin,
            start: true,
          },
        ],
        scene: [{
          key: 'rexUI',
          plugin: UIPlugin,
          mapping: 'rexUI'
        },
        { key: "gzDialog", plugin: GzDialog, mapping: "gzDialog" }
        ]
      },
      scale: {
        zoom: 1.2,
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 640,
        height: 300
      },
      dom: {
        createContainer: true,
      },
      parent: "phaser-div",
      backgroundColor: "#000000",
      pixelArt: true,
      scene: [preload, world, city1, city2, city3, dungeon, village],
    };

    super(config);
  }
}
