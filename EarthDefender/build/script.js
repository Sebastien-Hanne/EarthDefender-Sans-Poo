var gameName = "EarthDefender!";
console.log(gameName);
window.onload = main;
function main() {
    // Je récupère la balise nommée canvas
    var canvas = document.querySelector("canvas");
    // Je récupère le contexte du canvas
    // pour pouvoir, à l'avenir, dessiner dedans.
    var context = canvas.getContext("2d");
    // Je définis la taille du canvas
    var CANVAS_WIDTH = 900;
    var CANVAS_HEIGHT = 500;
    // J'applique la taille au canvas
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    // Le type Direction ne peut avoir comme valeurs exlusivement 0, 1 ou -1.
    // 0 = immobile, 1 = droite, -1 = gauche
    // Je définis la direction initiale du joueur
    var direction = 0;
    // Je récupère une image qui à pour classe alien
    // querySelector renvoie un Objet de la classe HTMLElement
    // Je précise HTMLImageElement en tant que type de la variable image 
    // pour transtyper la classe HTMLElement en un classe fille HTMLImageElement
    var imageAlien = document.querySelector("img.alien");
    // Je définis la position de l'image Alien1
    var positionAlien1 = {
        x: Math.random() * 500,
        y: 0
    };
    // Je définis la position de l'image Alien2
    var positionAlien2 = {
        x: Math.random() * 500,
        y: 0
    };
    // Je définis la position de l'image Alien3
    var positionAlien3 = {
        x: Math.random() * 500,
        y: 0
    };
    // Je définis la position de l'image Alien4
    var positionAlien4 = {
        x: Math.random() * 500,
        y: 0
    };
    // Je définis la position de l'image Alien5
    var positionAlien5 = {
        x: Math.random() * 500,
        y: 0
    };
    // Je récupère une image qui à pour classe player
    var imagePlayer = document.querySelector("img.player");
    // Je définis la position de l'image
    var positionPlayer = {
        x: 300,
        y: 400
    };
    // Je récupère une image qui à pour classe star
    var imageStar = document.querySelector("img.star");
    // J'attend que toutes les images soit chargées
    setInterval(function () {
        // Efface tout le canvas
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // Je dessine un rectangle de fond
        context.fillStyle = "#302b2bff"; // HexaDecimal Gris foncé
        context.fillRect(0, 0, // [x,y] supérieur gauche
        CANVAS_WIDTH, CANVAS_HEIGHT // [x,y] inférieur droit
        );
        // Je dessine des étoiles
        // Je dessine 50 étoiles à des positions aléatoires
        for (var i = 0; i < 50; i++) {
            context.drawImage(imageStar, Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT, imageStar.width, imageStar.height);
        }
        // Je l'affiche de l'alien1
        context.drawImage(imageAlien, positionAlien1.x, positionAlien1.y, imageAlien.width, imageAlien.height);
        // Je l'affiche de l'alien2
        context.drawImage(imageAlien, positionAlien2.x, positionAlien2.y, imageAlien.width, imageAlien.height);
        // Je l'affiche de l'alien3
        context.drawImage(imageAlien, positionAlien3.x, positionAlien3.y, imageAlien.width, imageAlien.height);
        // Je l'affiche de l'alien4
        context.drawImage(imageAlien, positionAlien4.x, positionAlien4.y, imageAlien.width, imageAlien.height);
        // Je l'affiche de l'alien5
        context.drawImage(imageAlien, positionAlien5.x, positionAlien5.y, imageAlien.width, imageAlien.height);
        // Je déplace l'image
        positionAlien1.y += 1;
        positionAlien2.y += 1;
        positionAlien3.y += 1;
        positionAlien4.y += 1;
        positionAlien5.y += 1;
        // Je l'affiche du joueur
        context.drawImage(imagePlayer, positionPlayer.x, positionPlayer.y, imagePlayer.width, imagePlayer.height);
        // Je déplace l'image
        positionPlayer.x += 10 * direction;
    }, 10);
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            // Va a droite
            case "d":
            case "D":
                direction = 1;
                break;
            // Va a gauche
            case "q":
            case "Q":
                direction = -1;
                break;
            default:
                break;
        }
    });
    // Lorsque la touche est relachée
    document.addEventListener("keyup", function (event) {
        switch (event.key) {
            // je m'arrête
            case "d":
            case "D":
            case "q":
            case "Q":
                direction = 0;
                break;
            default:
                break;
        }
    });
}
