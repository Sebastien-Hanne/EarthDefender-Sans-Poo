let gameName : string = "EarthDefender!";
console.log(gameName);

window.onload = main;

function main(){
// Je récupère la balise nommée canvas
const canvas = document.querySelector("canvas");
// Je récupère le contexte du canvas
// pour pouvoir, à l'avenir, dessiner dedans.
const context = canvas.getContext("2d");

// Je définis la taille du canvas
const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 500;
// J'applique la taille au canvas
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// Je définis un type Direction
type Direction = 0 | 1 | -1;
// Le type Direction ne peut avoir comme valeurs exlusivement 0, 1 ou -1.
// 0 = immobile, 1 = droite, -1 = gauche
// Je définis la direction initiale du joueur
let direction : Direction = 0;

// Je récupère une image qui à pour classe alien
// querySelector renvoie un Objet de la classe HTMLElement
// Je précise HTMLImageElement en tant que type de la variable image 
// pour transtyper la classe HTMLElement en un classe fille HTMLImageElement
const imageAlien : HTMLImageElement = document.querySelector("img.alien");

// Je définis la position de l'image Alien1
const positionAlien1 = {
    x : Math.random()*500,
    y : 0
};
// Je définis la position de l'image Alien2
const positionAlien2 = {
    x : Math.random()*500,
    y : 0
};
// Je définis la position de l'image Alien3
const positionAlien3 = {
    x : Math.random()*500,
    y : 0
};
// Je définis la position de l'image Alien4
const positionAlien4 = {
    x : Math.random()*500,
    y : 0
};
// Je définis la position de l'image Alien5
const positionAlien5 = {
    x : Math.random()*500,
    y : 0
};
// Je récupère une image qui à pour classe player
const imagePlayer : HTMLImageElement = document.querySelector("img.player");
// Je définis la position de l'image
let positionPlayer = {
    x : 300,
    y : 400
};

// Je récupère une image qui à pour classe star
const imageStar : HTMLImageElement = document.querySelector("img.star");


// J'attend que toutes les images soit chargées
setInterval(()=>{
    // Efface tout le canvas
    context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // Je dessine un rectangle de fond
    context.fillStyle = "#302b2bff";  // HexaDecimal Gris foncé
    context.fillRect(
    0,0,            // [x,y] supérieur gauche
    CANVAS_WIDTH,CANVAS_HEIGHT // [x,y] inférieur droit
    );

    // Je dessine des étoiles
        // Je dessine 50 étoiles à des positions aléatoires
        for (let i = 0; i < 50; i++) {   
            context.drawImage(
                imageStar,
                Math.random()*CANVAS_WIDTH,
                Math.random()*CANVAS_HEIGHT,
                imageStar.width,
                imageStar.height
            );
        }

    // Je l'affiche de l'alien1
    context.drawImage(
        imageAlien,
        positionAlien1.x,  
        positionAlien1.y,
        imageAlien.width,
        imageAlien.height
    );
    // Je l'affiche de l'alien2
    context.drawImage(
        imageAlien,
        positionAlien2.x,  
        positionAlien2.y,
        imageAlien.width,
        imageAlien.height
    );
    // Je l'affiche de l'alien3
    context.drawImage(
        imageAlien,
        positionAlien3.x,  
        positionAlien3.y,
        imageAlien.width,
        imageAlien.height
    );
    // Je l'affiche de l'alien4
    context.drawImage(
        imageAlien,
        positionAlien4.x,  
        positionAlien4.y,
        imageAlien.width,
        imageAlien.height
    );
    // Je l'affiche de l'alien5
    context.drawImage(
        imageAlien,
        positionAlien5.x,  
        positionAlien5.y,
        imageAlien.width,
        imageAlien.height
    );

    // Je déplace l'image
    positionAlien1.y+=1;
    positionAlien2.y+=1;
    positionAlien3.y+=1;
    positionAlien4.y+=1;
    positionAlien5.y+=1;

     // Je l'affiche du joueur
    context.drawImage(
        imagePlayer,
        positionPlayer.x,  
        positionPlayer.y,
        imagePlayer.width,
        imagePlayer.height
    );
    // Je déplace l'image
    positionPlayer.x+=10*direction;
    
    },10);

    document.addEventListener("keydown",(event)=>{
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
    document.addEventListener("keyup",(event)=>{
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