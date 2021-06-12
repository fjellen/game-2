class Player extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 32;
        this.width = this.radius;
        this.height = this.width;
        this.rotation = 90;
    }

    // rack upp handen nar ni gjort detta
    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);

        this.ctx.translate(this.width / 2, this.height / 2);

        const radians = (this.rotation - 90 - 180) * (Math.PI / 180);
        this.ctx.rotate(radians);

        this.ctx.translate(-(this.width / 2), -(this.height / 2));

        this.ctx.drawImage(
            SHIP_IMAGE,     // bild vi vill rita
            0,             // horisontell koordinat
            0,             // vertikal koordinat
            this.width,         // bredd
            this.height         // hojd
        );

        this.ctx.restore();
    }


    update() {
        // right
        if (this.game.keys["d"]) {
            this.x += 5;
            this.rotation = 360;
        }

        // left
        if (this.game.keys["a"]) {
            this.x -= 5;
            this.rotation = 180;
        }

        // up
        if (this.game.keys["w"]) {
            this.y -= 5;
            this.rotation = 270;
        }

        // down
        if (this.game.keys["s"]) {
            this.y += 5;
            this.rotation = 90;
        }

        this.game.gameObjects.forEach(function(gameObject){

            if(gameObject.constructor.name === "Enemy") {
                
                if (this.isTouching(gameObject)) {
                    this.game.whenHitAsteroid(this, gameObject);
                }
            }
        }.bind(this)   );
    }
}