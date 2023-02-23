class Personage {
    constructor(imgPerso, grid, ctx) {
        this.imgPerso = imgPerso;
        this.grid = grid;
        this.ctx = ctx;
        this.pos = {x:1, y:1};
    }

    drawImg() {
        let img = new Image();
        let ctx = this.ctx;
        let grid = this.grid;
        let pos = grid.placeCard(this.pos.x,this.pos.y);
        img.onload = function() {
            ctx.drawImage(img, pos.x, pos.y, grid.widthCard, grid.heightCard);
        };
        img.src = this.imgPerso;
    }

    pos(x,y) {
        this.pos = {x:x, y:y};
    }
}