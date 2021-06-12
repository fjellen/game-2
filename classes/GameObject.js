class GameObject {
    constructor(x, y, ctx, game) {
        this.x = x;     // vart ar vi horisontellt?
        this.y = y;     // vart ar vi vertikalt?
        this.ctx = ctx;
        this.game = game;
    }

    draw() {

    }

    update() {

    }

    // rack upp handen nar era collisions fungerar battre.

    isTouching(obj) {
        // spelarens huvud mindre an myntets fot?
        if (this.y <= obj.y + obj.height) {

            // spelarens fot under myntets huvud?
            if (this.y + this.height >= obj.y) {

                // spelarens vanster sida innanfor myntets hoger sida?
                if (this.x <= obj.x + obj.width) {

                    // spelarens hoger sida innanfor myntets vanster sida?
                    if (this.x + this.width >= obj.x) {
                        return true;
                    }
                }
            }
        }
    }
}