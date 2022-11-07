class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.player = new Player(ctx)
        this.interval = null;
        this.background = new Background(ctx)

        this.enemies = [];
        this.tick = 0;
        this.audio = new Audio("./sound/track.wav")
        this.setListeners()
        this.Health = new Health(ctx)
        
        this.gameOverAudio = new Audio("./sound/gameover.wav")

      
    }


    start() {

        

        this.audio.play();
        this.audio.volume = 0.2

        this.interval = setInterval(() => {
            this.clear()
            this.draw()
            this.move()
            this.checkCollisions();

            this.tick++;
            if (this.tick > Math.random() * 300 + 100) {
                this.tick = 0;
                this.addEnemy();
                this.addEnemy2()
            }    

            score.innerText++
        }, 1000/60)

    }

    stop() {
        this.audio.pause();

        clearInterval(this.interval)
        this.interval = null
    }
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        this.enemies = this.enemies.filter((event) => event.isVisible());
    }

    draw () {
        this.background.draw()
        this.player.draw()
        this.enemies.forEach((event) => event.draw());
      
    }

    move() {
        this.background.move()
        this.player.move()
        this.enemies.forEach((event) => event.move());
    }

    addEnemy() {
        const enemy = new Enemy(this.ctx);
        this.enemies.push(enemy);
      }
    addEnemy2() {
        const enemy = new Enemy2(this.ctx);
        this.enemies.push(enemy);
      }


   
      checkCollisions() {
          this.enemies.forEach((enemy) => {
              if (enemy.alive && enemy.collides(this.player)) {
                  console.log("colision")
                  enemy.alive = false
                  
                  this.player.hit()
                  if (this.player.health.total <= 0) {
                      this.gameOver()
                  }
              }
          })

          
      }
      
      
    gameOver() {

        this.gameOverAudio.play();
        this.audio.pause();
        clearInterval(this.interval)
       
        
        this.ctx.font = "70px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(
          "GAME OVER",
          this.ctx.canvas.width * 0.2,
          this.ctx.canvas.height / 2
        );
         
        this.enemies = [];

        
    }
   

    setListeners() {
        document.addEventListener("keydown", (event) => {
          this.player.keyDown(event.keyCode);
        });
    
        document.addEventListener("keyup", (event) => {
          this.player.keyUp(event.keyCode);
        });
      }
    }