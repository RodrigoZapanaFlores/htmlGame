class Health {
    constructor(ctx) {
      this.ctx = ctx;
  
      this.x = 20;
      this.y = this.ctx.canvas.height * 0.93;
      this.width = 200;
      this.height = 20;
  
      this.total = 1;
      this.audioauch = new Audio("sound/auch.wav");
    }
  
    draw() {
      const prevStyle = this.ctx.fillStyle;
  
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(this.x, this.y, this.width * this.total, this.height);
      this.ctx.fillStyle = prevStyle;
      this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  
    move() {}
  
    dec() {
      this.total = Math.max(0,this.total- 0.33)
      this.audioauch.play()
    }
  }