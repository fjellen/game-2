class Explosion extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;

        const width = 32;
        const height = 32;

        this.scale = getRandomNumber(1, 10);
        this.width = width * this.scale;
        this.height = height * this.scale;
        this.radius = this.width;

        this.counter = 0;
    }

    // rack upp handen nar wni skapat explosion klassen och lankat in den i
    // index.html
    draw() {

        this.ctx.drawImage(
            EXPLOSION_IMAGES[this.counter % EXPLOSION_IMAGES.length],                // bild vi vill rita
            this.x,             // horisontell koordinat
            this.y,             // vertikal koordinat
            this.width,         // bredd
            this.height         // hojd
        );


        if (this.counter < EXPLOSION_IMAGES.length) {
            this.counter += 1;
        } else {
            this.game.removeObject(this);
        }
    }

    // rack upp handen nar ni har uppe spelet
    // och webblasaren och vscode.

    update() {

    }

}