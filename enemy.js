class Enemy {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = this.ctx.canvas.width;
        this.y = this.ctx.canvas.height * 0.74;
        this.width = 45
        this.height = 45
        this.vx = -5;
        this.vy = 0;

        this.ax = 0;
        this.ay = 0;


        this.img = new Image();
        this.img.frames = 5;
        this.img.frameIndex = 0;
        this.img.src = './img/kid.png'
        this.alive = true;

        this.tick = 0;
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            (this.img.width * this.img.frameIndex) / this.img.frames,
            0,

            this.img.width / 5,
            this.img.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    move() {
        this.vy += this.ay;

        this.vx += this.ax;

        this.x += this.vx;
        this.y += this.vy;


        this.tick++;



        if (this.tick > 10) {
            this.tick = 0;

            this.img.frameIndex++;

            if (this.img.frameIndex >= this.img.frames) {
                this.img.frameIndex = 0;
            }
        }
    }

    isVisible() {
        return this.x + this.width > 0;
    }

   

    collides(player) {

        return this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.height + this.y > player.y
    }

}