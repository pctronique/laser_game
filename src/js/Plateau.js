class Plateau {
    constructor(grid, ctx) {
        this.grid = grid;
        this.ctx = ctx;
        this.imgFond = "";
        this.perso = undefined;
    }

    create() {
        this.drawImg(this.imgFond, this.perso);
    }

    addImgFond(img) {
        this.imgFond = img;
    }

    addPerso(perso) {
        this.perso = perso;
    }
    
    drawImg(imgSrc, perso) {
        let img = new Image();
        let ctx = this.ctx;
        let grid = this.grid;
        img.onload = function() {
            for (let indexX = 1; indexX <= grid.x; indexX++) {
                for (let indexY = 1; indexY <= grid.y; indexY++) {
                    let pos = grid.placeCard(indexX,indexY)
                    ctx.drawImage(img, pos.x, pos.y, grid.widthCard, grid.heightCard);
                }
            }
            perso.drawImg();
            grid.displayLine(ctx);
        };
        img.src = imgSrc;
    }

}

var canvas = document.getElementById('plateau-game');
var ctx = canvas.getContext('2d');

let grid = new Grid(800, 800, 4, 4);
canvas.style.width = grid.width;
canvas.style.height = grid.height;

let personage = new Personage("./img/perso01.png", grid, ctx);

let plateau = new Plateau(grid, ctx);
plateau.addImgFond("./img/sable2.png");
plateau.addPerso(personage);
plateau.create();



