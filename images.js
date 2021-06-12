const ASTEROID_IMAGE = new Image();
ASTEROID_IMAGE.src = "Asteroid Brown.png";


const SHIP_IMAGE = new Image();
SHIP_IMAGE.src = "Spaceship_tut_thin.png";


const COIN_IMAGE = new Image();
COIN_IMAGE.src = "Coin_0.png";


// rack upp handen nar ni gjort detta och inte ser nagra errors i consolen.
const EXPLOSION_IMAGES = [];
for (let i = 1; i <= 90; i++) {
    let numberstring = "00" + (i <= 9 ? "0" : "") + i;
    const img = new Image();
    img.src = `explosion/64x48/explosion1_${numberstring}.png`;
    EXPLOSION_IMAGES.push(img);

    console.log(img.src);
}