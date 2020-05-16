import Wave from './wave.js';

export default class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = ['rgba(0, 199, 255, 0.4)', 'rgba(0, 146, 199, 0.4)', 'rgba(0, 87, 158, 0.4)'];
        
        this.waves = [];

        this.totalWaves.forEach(element => {
            const wave = new Wave (

            );
        });
    }

    resize(stageWidth, stageHeight) {
        this.totalWaves.forEach(wave => wave.resize(stageWidth, stageHeight));
    }

    draw(ctx) {
        this.totalWaves.forEach(wave => wave.draw(ctx));
    }

}