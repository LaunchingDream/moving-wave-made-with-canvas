import Point from './point.js';

export default class Wave {
    constructor (index, totalPoints, color) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = []; 
    }

    resize(stageWidth, stateHeight) {
        this.stageWidth = stageWidth;
        this.stateHeight = stateHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stateHeight / 2;

        this.pointGap = this.stageWidth / (this.stateHeight - 1);

        this.init();
    }

    init() {
        this.points = [];
        for (let i = 0 ; this.totalPoints; i++) {
            this.point = new Point(
                this.index + i,
                this.pointGap * i,
                this.centerY
            );
            this.points[i] = point;
        }
 
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        // this.point.update();
        // ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
        // ctx.fill();
    }
}
