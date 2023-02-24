class Game {
    constructor(canvas, grid) {
        this.niveau = 0;
        this.load = false;
        this.ctx = canvas.getContext('2d');
        this.grid = grid;
        this.personage = undefined;
        this.key = undefined;
        this.pieges = undefined;
        this.plateau = new Plateau(canvas, grid, this.ctx);
    }

    addPersonage(imgPersonage) {
        this.personage = new Personage(imgPersonage, this.grid, this.ctx);
        this.plateau.addPerso(this.personage);
    }

    addKey(imgKey, x, y) {
        this.key = new Key(imgKey, this.grid, this.ctx, x, y);
        this.plateau.addKey(this.key);
    }

    addPiegeImg(img) {
        this.pieges = new Pieges(img, this.grid, this.ctx);
        this.plateau.addPieges(this.pieges);
    }

    addPiege(x, y) {
        this.pieges.addPos(x,y);
    }

    reset() {
        this.pieges.reset();
    }

    addFond(imgFond) {
        this.plateau.addImgFond(imgFond);
        this.plateau.addGame(this);
    }

    valuePos(pos) {
        return pos.x+","+pos.y;
    }

    posPersoKey() {
        if(this.valuePos(this.personage.pos) == this.valuePos(this.key.pos)) {
            this.load = false;
            this.plateau.create(this.load);
            if(window.confirm("C'est gagné.")) {
                this.niveau++;
                this.personage.deplacement(1,1);
                this.load = true;
                this.plateau.create(this.load);
            }
        }
    }

    posPersoPieges() {
        this.pieges.tab.forEach(element => {
            if(this.valuePos(this.personage.pos) == this.valuePos(element)) {
                this.load = false;
                this.plateau.create(this.load);
                if(window.confirm("C'est perdu.")) {
                    this.personage.deplacement(1,1);
                    this.load = true;
                    this.plateau.create(this.load);
                }
            }
        });
    }

    parcoursJeu() {
        this.posPersoKey();
        this.posPersoPieges();
    }

    start() {
        this.load = true;
        this.plateau.create();
        document.addEventListener("keyup",(event) => {
            if(this.load) {
                let name = event.key;
                if (name === "ArrowDown") {
                    this.personage.deplacement(this.personage.pos.x,this.personage.pos.y+1);
                    this.plateau.create(this.load);
                } else if (name === "ArrowUp") {
                    this.personage.deplacement(this.personage.pos.x,this.personage.pos.y-1);
                    this.plateau.create(this.load);
                } else if (name === "ArrowRight") {
                    this.personage.deplacement(this.personage.pos.x+1,this.personage.pos.y);
                    this.plateau.create(this.load);
                } else if (name === "ArrowLeft") {
                    this.personage.deplacement(this.personage.pos.x-1,this.personage.pos.y);
                    this.plateau.create(this.load);
                }
            }
            
        });
    }

}