const canvas = document.querySelector('canvas')
const ctx =canvas.getContext('2d')
const game = new Game(ctx)
const score = document.getElementById('score')


document.querySelector("button").addEventListener("click", function (event) {
  
    if (game.interval) {
      game.stop();
      this.innerText = "START";
    } else {
      game.start();
      this.innerText = "STOP";
    }
  });

  

