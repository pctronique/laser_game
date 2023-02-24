class Plateau {
    constructor(canvas, grid, ctx) {
        this.grid = grid;
        this.ctx = ctx;
        this.imgFond = "";
        this.perso = undefined;
        canvas.setAttribute("width", grid.width);
        canvas.setAttribute("height", grid.height);
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
            grid.displayLine(ctx);
            perso.drawImg();
        };
        img.src = imgSrc;
    }

}
