class Plateau {
    constructor(canvas, grid, ctx) {
        this.grid = grid;
        this.ctx = ctx;
        this.imgFond = "";
        this.perso = undefined;
        this.key = undefined;
        this.pieges = undefined;
        this.game = undefined;
        canvas.setAttribute("width", grid.width);
        canvas.setAttribute("height", grid.height);
    }

    setGrid(grid) {
        this.grid = grid;
    }

    create(playLoad = false) {
        this.drawImg(this.imgFond, this.perso, this.key, this.pieges, this.game, playLoad);
    }

    addImgFond(img) {
        this.imgFond = img;
    }

    addPerso(perso) {
        this.perso = perso;
    }

    addPieges(pieges) {
        this.pieges = pieges;
    }

    addKey(key) {
        this.key = key;
    }

    addGame(game) {
        this.game = game;
    }
    
    drawImg(imgSrc, perso, key, pieges, game, playLoad) {
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
            key.drawImg();
            if(!playLoad) {
                pieges.drawImg();
            }
            grid.displayLine(ctx);
            perso.drawImg();
            game.parcoursJeu();
        };
        img.src = imgSrc;
    }

}
