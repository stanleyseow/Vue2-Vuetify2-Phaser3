import Phaser from "phaser";
import preload from "./scenes/preload"
import world from "./scenes/world"
import VirtualJoystickPlugin from "phaser3-rex-plugins/plugins/virtualjoystick-plugin.js";
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import EventEmitterMethods from 'phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitterMethods.js';


export default class Game extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      width: 16 * 20 * 2,
      height: 16 * 20 * 2,
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
      }]
      },  
      scale: {
        zoom: 1,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      dom: {
        createContainer: true,
      },
      parent: "phaser-div",
      backgroundColor: "#555555",
      pixelArt: true,
      scene: [preload, world ],
    };

    super(config);
  }
}
