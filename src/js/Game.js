class Game {
    constructor(canvas, grid) {
        this.ctx = canvas.getContext('2d');
        this.grid = grid;
        this.plateau = new Plateau(canvas, grid, this.ctx);
    }

    addPersonage(imgPersonage) {
        this.personage = new Personage(imgPersonage, this.grid, this.ctx);
        this.plateau.addPerso(this.personage);
    }

    addFond(imgFond) {
        this.plateau.addImgFond(imgFond);
    }

    start() {
        this.plateau.create();
        document.addEventListener("keydown",(event) => {
            let name = event.key;
            if (name === "ArrowDown") {
                this.personage.deplacement(this.personage.pos.x,this.personage.pos.y+1);
            } else if (name === "ArrowUp") {
                this.personage.deplacement(this.personage.pos.x,this.personage.pos.y-1);
            } else if (name === "ArrowRight") {
                this.personage.deplacement(this.personage.pos.x+1,this.personage.pos.y);
            } else if (name === "ArrowLeft") {
                this.personage.deplacement(this.personage.pos.x-1,this.personage.pos.y);
            }
            this.plateau.create();
        });
    }

}