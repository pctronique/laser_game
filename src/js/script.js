let canvas = document.getElementById('plateau-game');
let grid = new Grid(800, 800, 8, 8);
let game = new Game(canvas, grid);
game.addFond("./img/sable2.png");
game.addPersonage("./img/perso01.png");
game.start();

function resize() {
    let largeur = window.innerWidth;
    let hauteur = window.innerHeight;
    if(largeur>hauteur) {
        canvas.style.height = "100vh";
        canvas.style.width = "unset";
    } else {
        canvas.style.height = "unset";
        canvas.style.width = "100%";
    }
}
resize();

window.onresize = resize;