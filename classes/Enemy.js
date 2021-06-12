class Enemy extends GameObject {
    constructor(x, y, ctx, game, width, height) {
        super(x, y, ctx);
        this.game = game;
        this.scale = getRandomNumber(1, 3);
        this.width = width * this.scale;
        this.height = height * this.scale;
        this.radius = this.width;
        this.speed = getRandomNumber(3, 5);
    }

    draw() {
        this.ctx.drawImage(
            ASTEROID_IMAGE,     // bild vi vill rita
            this.x,             // horisontell koordinat
            this.y,             // vertikal koordinat
            this.width,         // bredd
            this.height         // hojd
        );
    }


    update() {
        this.y += this.speed;

        if (this.y + this.height > 480) {
            this.game.removeObject(this);
        }
    }

}