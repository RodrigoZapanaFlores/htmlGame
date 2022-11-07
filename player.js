class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 20;
        this.y = 200;
        this.width = 25;
        this.height = 68;

        this.vx = 0;
        this.vy = 0;

        this.y0 = this.ctx.canvas.height * 0.68;
        this.g = 0.22;
        this.tick = 0;

        this.img = new Image()
        this.img.frames = 7
        this.img.frameIndex = 0
        this.img.src = './img/but.png'



        this.health = new Health(ctx);

    }

    draw() {
        this.ctx.drawImage(
            this.img,
            (this.img.frameIndex * this.img.width) / this.img.frames,
            0,
            this.img.width / this.img.frames,
            this.img.height,
            this.x,
            this.y,
            this.width,
            this.height
        );

        this.health.draw();


    }
    move() {
        this.vy += this.g;
        this.x += this.vx;
        this.y += this.vy;

        if (this.y >= this.y0) {
            this.vy = 0;
            this.y = this.y0;
        }

        this.tick++;

        if (this.tick >= 10) {
            this.tick = 0;
            this.animate();
        }

        this.health.move();

    }




    animate() {
        if (this.vy === 0) {
            this.img.frameIndex++;

            if (this.img.frameIndex >= this.img.frames) {
                this.img.frameIndex = 0;
            }
        }
    }

    hit() {
        this.health.dec();
    }

    isAlive() {
        return this.health.total > 0;
    }


    keyDown(key) {
        if (key === 38 && this.vy === 0) {
            this.vy = -5;

        }

        if (key === 39) {
            this.vx = 5;
        }

        if (key === 37) {
            this.vx = -5;
        }
    }

    keyUp(key) {
        if (key === 39 || key === 37) {
            this.vx = 0;
        }
    }
}