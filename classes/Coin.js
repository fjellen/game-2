class Coin extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 32;
        this.width = this.radius;
        this.height = this.width;
    }

    draw() {
        this.ctx.drawImage(
            COIN_IMAGE,     // bild vi vill rita
            this.x,             // horisontell koordinat
            this.y,             // vertikal koordinat
            this.width,         // bredd
            this.height         // hojd
        );
    }

    // rack upp handen nar ni kan plocka
    // upp myntet igen
    update() {
        this.game.gameObjects.forEach(function(gameObject){
            if(gameObject.constructor.name === "Player") {
                if (this.isTouching(gameObject)) {
                    this.game.whenCoinRemoved();
                    this.game.removeObject(this);
                }
            }
        }.bind(this)   );
    }
}