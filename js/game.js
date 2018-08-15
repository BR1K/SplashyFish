class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.currentState = 3;
    // console.log(this);
    this.startGame = this.startGame.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.drawStartScreen = this.drawStartScreen.bind(this);
    this.drawGameOverScreen = this.drawGameOverScreen.bind(this);

    this.bindEvents.bind(this);
    // this.bindEvents();
  }

  bindEvents() {
    // debugger;
    document.addEventListener('click', (event) => {
      switch (this.currentState) {
        case 1:
          this.currentState = 2;
          break;
        case 2:

          break;
        case 3:

          break;
      }

    });
    document.addEventListener('keydown', (event) => {
      switch (game.currentState) {
        case 3:
          if (event.keyCode === 82)
          break;
        default:

      }
    });
  }

  startGame() {

    requestAnimationFrame(this.gameLoop);
    // this.gameLoop();
  }

  gameLoop() {

    switch (this.currentState) {
      case 1:
        this.drawStartScreen();
        break;
      case 2:
        this.drawPlayingScreen();
        break;
      case 3:
        this.drawGameOverScreen();
        break;
    }

    requestAnimationFrame(this.gameLoop)
  }

  drawStartScreen() {
    // game background
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = 'white';
    this.ctx.font = '36px Arial';
    this.ctx.fillText('START', this.canvas.width / 2 - 100, this.canvas.height / 2);

  }

  drawPlayingScreen() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = 'white';
    this.ctx.font = '36px Arial';
    this.ctx.fillText('PLAYING', this.canvas.width / 2 - 100, this.canvas.height / 2);

  }

  drawGameOverScreen() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = 'white';
    this.ctx.font = '36px Arial';
    this.ctx.fillText('GAME OVER', this.canvas.width / 2 - 100, this.canvas.height / 2);
    this.ctx.font = '24px Arial';
    this.ctx.fillText('Press R to Restart', this.canvas.width / 2 - 100, this.canvas.height / 2 + 50);

  }

}

export default Game;
