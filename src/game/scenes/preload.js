import Phaser from "phaser";
import u3 from "./assets/ultima.gif";
import map0 from "./assets/map1.json";

export default class preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  init(data) {
    console.log("*** init preload")
  }

  preload() {

    this.load.spritesheet("u3", u3, { frameWidth: 16, frameHeight: 16 });
    this.load.tilemapTiledJSON("map0", map0);
 
  }

  create() {
    console.log("*** create preload: ", this);

  
   //////////////////////////////////////////////////////
    // Create all the animations here
    this.anims.create({
      key: "chest",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 172,
        end: 172,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "fireball",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 79,
        end: 79,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "iceball",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 78,
        end: 78,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "dragon",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 232,
        end: 235,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "ranger",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 31,
        end: 31,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "fig",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 36,
        end: 37,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "wiz",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 32,
        end: 33,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "thi",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 34,
        end: 35,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "cle",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 38,
        end: 39,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "pal",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 40,
        end: 41,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "val",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 248,
        end: 251,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "skel",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 196,
        end: 199,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "guard",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 80,
        end: 81,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "british",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 94,
        end: 95,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "horse",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 21,
        end: 21,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "ankh",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 61,
        end: 61,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "moongate",
      frames: this.anims.generateFrameNumbers("u3", {
        start: 64,
        end: 67,
      }),
      frameRate: 1,
      repeat: -1,
    });

    this.scene.start("world");
  }
}
