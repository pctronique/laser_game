class Pieges {
    constructor(img, grid, ctx) {
        this.grid = grid;
        this.tab = [];
        this.img = img;
        this.ctx = ctx;
    }

    reset() {
        this.tab = [];
    }

    addPos(x,y) {
        //let pos = {x:x, y:y};
        this.tab.push({x:x, y:y});
    }
    
    drawImg() {
        let img = new Image();
        let ctx = this.ctx;
        let grid = this.grid;
        let tab = this.tab;
        img.onload = function() {
            tab.forEach(element => {
                let pos = grid.placeCard(element.x,element.y);
                ctx.drawImage(img, pos.x, pos.y, grid.widthCard, grid.heightCard);
            });
        };
        img.src = this.img;
    }
}