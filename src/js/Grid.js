class Grid {
    constructor(width, height, x, y) {
        this.widthCard = Math.floor(width/x);
        this.heightCard = Math.floor(height/y);
        this.width = this.widthCard * x;
        this.height = this.heightCard * y;
        this.x = x;
        this.y = y;
    }

    placeCard(x,y) {
        if(x > this.x || x < 0) x = 1;
        if(y > this.y || y < 0) y = 1;
        let xcard = x - 1;
        let ycard = y - 1;
        let posX = this.widthCard*xcard;
        let posY = this.heightCard*ycard;
        return [posX, posY];
    }

    displayLine(ctx) {
        for (let indexX = 1; indexX <= (this.x+1); indexX++) {
            let posLine = this.widthCard*(indexX-1);
            ctx.beginPath();
            ctx.moveTo(posLine, 0);
            ctx.lineTo(posLine, this.height);
            ctx.stroke();
        }
        for (let indexY = 1; indexY <= (this.y+1); indexY++) {
            let posLine = this.heightCard*(indexY-1);
            ctx.beginPath();
            ctx.moveTo(0, posLine);
            ctx.lineTo(this.width, posLine);
            ctx.stroke();
        }
    }

}