class Key {
    constructor(img, grid, ctx, x, y) {
        this.grid = grid;
        this.pos = {x:x, y:y};
        this.img = img;
        this.ctx = ctx;
    }

    setPos(x, y) {
        this.pos = {x:x, y:y};
    }

    setGrid(grid) {
        this.grid = grid;
    }

    drawImg() {
        let img = new Image();
        let ctx = this.ctx;
        let grid = this.grid;
        let pos = grid.placeCard(this.pos.x,this.pos.y);
        img.onload = function() {
            ctx.drawImage(img, pos.x, pos.y, grid.widthCard, grid.heightCard);
        };
        img.src = this.img;
    }
}