import { Player } from '../gameobject/Player.js';
import { Coin } from '../gameobject/Coin.js';
import { Goomba } from '../gameobject/Goomba.js';

class Game extends Phaser.Scene {
    constructor() {
        super('Game');
        this.assetPaths = {
            tiles: './assets/img/tiles.png',
            map: './assets/json/map.json',
            atlasImage: './assets/img/mario-atlas.png',
            atlasData: './assets/json/mario-atlas.json'
        };

    }

    preload() {
        //preload assets here
    }

    create() {
        //create the game-world
    }

    update() {
        //update game for each frame
    }

}


export { Game };