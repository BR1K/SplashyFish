import Background from './Background';
import Score from './Score';

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.velocity = 5;
    this.currentState = 1;
    // console.log(this);
    this.startGame = this.startGame.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.drawStartScreen = this.drawStartScreen.bind(this);
    this.drawPlayingScreen = this.drawPlayingScreen.bind(this);
    this.drawGameOverScreen = this.drawGameOverScreen.bind(this);
    this.scrollBackground = this.scrollBackground.bind(this);


    this.bindEvents.bind(this);
    this.createObjects.bind(this);
    // this.background.create();
    // this.bindEvents();
    // this.createObjects();
  }

  createObjects() {
    this.background1 = new Background('./images/background.png', this.canvas, this.ctx);
    this.background2 = new Background('./images/background.png', this.canvas, this.ctx);
    this.background2.x = this.canvas.width;

    this.score = new Score(this.canvas, this.ctx);
    this.score.x = this.canvas.width - 150;
    this.score.y = 80;
    // debugger
  }

  bindEvents() {
    // debugger
    document.addEventListener('keydown', (event) => {
      // debugger
      switch (this.currentState) {
        case 3:
        if (event.code === "KeyR") {
          this.currentState = 2;
        }
        break;
      }
    });
    document.addEventListener('click', (event) => {
      switch (this.currentState) {
        case 1:
          console.log('hi');
          this.currentState = 2;
          break;
        case 2:

          break;
        case 3:

          break;
      }

    });

  }

  startGame() {

    // requestAnimationFrame(this.gameLoop);
    this.gameLoop();
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
    // debugger

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.scrollBackground();

    this.score.draw();
  }

  scrollBackground() {
    this.background1.draw();
    if(Math.abs(this.background1.x) > this.canvas.width) {
      this.background1.x = this.canvas.width - this.velocity;
    }
    this.background1.x = this.background1.x - this.velocity;

    this.background2.draw();
    if(Math.abs(this.background2.x) > this.canvas.width) {
      this.background2.x = this.canvas.width - this.velocity;
    }
    this.background2.x = this.background2.x - this.velocity;

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
