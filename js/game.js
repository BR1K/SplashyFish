import Background from './Background';
import Score from './Score';
import ObstacleGenerator from './ObstacleGenerator';
import Obstacle from './Obstacle';
import Fish from './Fish';

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
    this.drawObstacles = this.drawObstacles.bind(this);
    this.clearObstacles = this.clearObstacles.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    this.colliding = this.colliding.bind(this);
    this.reset = this.reset.bind(this);


    this.bindEvents = this.bindEvents.bind(this);
    this.createObjects = this.createObjects.bind(this);
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

    this.obstacleGenerator = new ObstacleGenerator(this.canvas, this.ctx, './images/mine.png');

    this.fish = new Fish('images/fish2.png', this.canvas, this.ctx);
    // debugger
  }

  bindEvents() {
    document.addEventListener('keydown', (event) => {
      switch (this.currentState) {
        case 3:
        if (event.code === "KeyR") {
          this.reset();
          this.currentState = 2;
        }
        break;
      }
    });
    document.addEventListener('click', (event) => {
      switch (this.currentState) {
        case 1:
          this.currentState = 2;
          this.obstacleGenerator.generate();
          break;
        case 2:
          this.fish.vy = -1 * this.velocity;
          break;
        case 3:
          break;
      }

    });

  }

  reset() {
    this.score.start = new Date();
    this.score.currentScore = 0;
    this.obstacleGenerator.obstacles = [];
    this.fish.x = 115;
    this.fish.y = 115;
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
    this.ctx.fillText('Click the mouse to help the fish swim!', this.canvas.width / 2 - 400, this.canvas.height / 3);
    this.ctx.fillText('Try to go as far as possible without crashing', this.canvas.width / 2 - 400, this.canvas.height / 3 + 100);
    this.ctx.fillText('Click to Start', this.canvas.width / 2 - 100, this.canvas.height / 3 + 300);

  }

  drawPlayingScreen() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.scrollBackground();
    this.score.draw();
    this.drawObstacles();
    this.fish.draw();
    this.checkCollisions();
  }

  checkCollisions() {
    this.obstacles = this.obstacleGenerator.obstacles;

    for (var i = 0; i < this.obstacles.length; i++) {
      if (this.colliding(this.fish, this.obstacles[i])) {
        debugger
        this.currentState = 3;
      }
    }
  }

  colliding(fish, obstacle) {
    let colliding = true;

    const fishTop = fish.y;
    const fishBot = fish.y + fish.height;
    const fishRight = fish.x + fish.width;
    const fishLeft = fish.x;

    const obstacleTop = obstacle.y + obstacle.space + obstacle.height;
    const obstacleBot = obstacle.y + obstacle.height;
    const obstacleRight = obstacle.x + obstacle.width;
    const obstacleLeft = obstacle.x;

    if ((fishBot < obstacleTop && fishTop > obstacleBot)
      || (fishLeft > obstacleRight)
      || (fishRight < obstacleLeft + 20)) {
      colliding = false;
    }

    return colliding;
  }

  drawObstacles() {
    this.obstacles = this.obstacleGenerator.obstacles;

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
      this.obstacles[i].x -= this.velocity;
    }

    this.clearObstacles();
  }

  clearObstacles() {
    this.obstacles = this.obstacleGenerator.obstacles;

    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles[i].x + this.obstacles[i].width < 0) {
        this.obstacles.shift();
      }
    }
  }

  scrollBackground() {
    this.background1.draw();
    if (Math.abs(this.background1.x) > this.canvas.width) {
      this.background1.x = this.canvas.width - this.velocity;
    }
    this.background1.x = this.background1.x - this.velocity;

    this.background2.draw();
    if (Math.abs(this.background2.x) > this.canvas.width) {
      this.background2.x = this.canvas.width - this.velocity;
    }
    this.background2.x = this.background2.x - this.velocity;

  }

  drawGameOverScreen() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    debugger
    this.ctx.fillStyle = 'white';
    this.ctx.font = '54px Arial';
    this.ctx.fillText(`Score: ${this.score.score}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 180);
    debugger
    this.ctx.font = '36px Arial';
    this.ctx.fillText('GAME OVER', this.canvas.width / 2 - 100, this.canvas.height / 2);
    this.ctx.font = '24px Arial';
    this.ctx.fillText('Press R to Restart', this.canvas.width / 2 - 100, this.canvas.height / 2 + 50);

  }

}

export default Game;
