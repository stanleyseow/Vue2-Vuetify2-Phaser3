import Phaser from "phaser";
import PubSub from 'pubsub-js'
let FADE_DURATION = 1000;
export default class city2 extends Phaser.Scene {

    constructor() {
        super('city2');


        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {}

    create() {
        console.log('*** city2/castle');
        console.log('inventory: ', this.inventory);
        PubSub.publish(window.TOPIC2, {event:"castle"});

        this.pingSnd = this.sound.add('ping');

        let map = this.make.tilemap({
            key: 'map2'
        });

        let groundTiles = map.addTilesetImage('ultima', 'u3');

        let cityfloor = map.createLayer('floorLayer', groundTiles, 128, 128).setScale(2);
        this.citymap = map.createLayer('cityLayer', groundTiles, 128, 128).setScale(2);

        this.val1 = this.physics.add.sprite(200, 175, 'u3').play('val').setScale(2);
        this.val2 = this.physics.add.sprite(380, 175, 'u3').play('val').setScale(2);

        // player position in city2
        this.player.x = 300;
        this.player.y = 380;

        this.player = this.physics.add.sprite(this.player.x, this.player.y, 'u3').play('ranger').setScale(2);

        // match for grass tile
        this.citymap.setTileIndexCallback(5, this.worldmap, this);


        this.citymap.setTileIndexCallback(79, this.collectIceball, this);

        this.physics.add.overlap(this.citymap, this.player);
        //this.physics.add.overlap(this.citymap, this.player, this.worldmap, null, this);

        this.citymap.setCollisionByProperty({
            walls: true
        });

        // What will collider with what layers
        this.physics.add.collider(this.citymap, this.player);

        this.physics.add.collider(this.val1, this.val2);

        this.cursors = this.input.keyboard.createCursorKeys();

        switch (this.inventory.random) {

            case 1:
                console.log(1)
                this.val21 = this.add.sprite(50, 50, 'u3').play('val').setScale(2);
                break
            case 2:
                console.log(2)
                this.val21 = this.add.sprite(50, 50, 'u3').play('val').setScale(2);
                this.val22 = this.add.sprite(100, 50, 'u3').play('val').setScale(2);
                break
            case 3:
                console.log(3)
                this.val21 = this.add.sprite(50, 50, 'u3').play('val').setScale(2);
                this.val22 = this.add.sprite(100, 50, 'u3').play('val').setScale(2);
                this.val23 = this.add.sprite(150, 50, 'u3').play('val').setScale(2);
                break
            case 4:
                console.log(4)
                this.val21 = this.add.sprite(50, 50, 'u3').play('val').setScale(2);
                this.val22 = this.add.sprite(100, 50, 'u3').play('val').setScale(2);
                this.val23 = this.add.sprite(150, 50, 'u3').play('val').setScale(2);
                this.val24 = this.add.sprite(200, 50, 'u3').play('val').setScale(2);
                break

        }

    this.cameras.main.fadeFrom(FADE_DURATION);
    this.cameras.main.startFollow(this.player);


    }

    update() {


        this.physics.moveToObject(this.val1, this.player, 30, 3000)
        this.physics.moveToObject(this.val2, this.player, 30, 3000)

        let speed = 256;

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-speed);
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(speed);
        } else if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-speed);
        } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(speed);
        } else {
            this.player.body.setVelocity(0);
        }

    }

    worldmap(player, tile) {
        //console.log('Tile id: ', tile.index );

        if (tile.index !== 5) return;
        console.log('city2 to world');

        // Set position beside city2 in worldmap
        player.x = 520;
        player.y = 560;
        this.scene.start('world', {
            player: player,
            inventory: this.inventory
        });

    }

    collectIceball(player, tile) {

        this.pingSnd.play();

        this.inventory.iceball++;
        console.log('Collect iceball', this.inventory.iceball);

        console.log('Emit event', this.inventory)
        this.invEvent = (event, data) => this.scene.get('showInventory').events.emit(event, data);
        this.invEvent("inventory", this.inventory);

        this.citymap.removeTileAt(tile.x, tile.y);
        return false;
    }

}