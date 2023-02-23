class Plateau {
    constructor(grid, ctx) {
        this.grid = grid;
        this.ctx = ctx;
    }

    map(imgDef) {
        for (let indexX = 1; indexX < this.grid.x; indexX++) {
            for (let indexY = 1; indexY < this.grid.y; indexY++) {
                this.drawImg(indexX, indexY, this.grid.widthCard, this.grid.heightCard, imgDef);
            }
        }
    }
    
    drawImg(posX, posY, width, height, imgSrc) {
        let img = new Image();
        let ctx = this.ctx;
        img.onload = function() {
            console.log(ctx);
            console.log(posX+" / "+posY+" / "+width+" / "+height);
            ctx.drawImage(posX, posY, width, height);
        };
        img.src = imgSrc;
      }

}

var canvas = document.getElementById('plateau-game');
var ctx = canvas.getContext('2d');

let grid = new Grid(800, 800, 6, 6);
canvas.style.width = grid.width;
canvas.style.height = grid.height;

let plateau = new Plateau(grid, ctx);
plateau.map("./../img/sable.png");

grid.displayLine(ctx);