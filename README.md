# Splashy Fish


## [DEMO](www.brikend.com/SplashyFish)
<img src="/splashyfishgif2.gif?raw=true" width="1000px">


#### Splashy Fish is a simple JavaScript & HTML5 Canvas browser game inspired by Flappy Bird.

### Instructions
Try to survive without [crashing](#collision-detection) into any obstacles for as long as possible! The obstacles are [randomly generated](#random-obstacle-generator), so be be prepared to dodge them.

[Click the mouse](#event-listener) to swim. Each click will cause you to bounce upward, and gravity will bring you back down. Be sure to time your clicks so that you swim in between the obstacles!

### Code Samples

#### Random Obstacle Generator
The `Obstacle Generator` class uses Javascript's built in `getRandomInt` function to randomly determine the obstacles' distance from each other, as well as their sizes:
```Javascript
import Obstacle from './Obstacle';

class ObstacleGenerator {
  constructor(canvas, ctx, src) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.src = src;

    this.minSpace = 200;
    this.maxSpace = 300;
    this.frequency = 1500;
    this.obstacles = [];

    this.generate = this.generate.bind(this);
  }

  generate() {
    setInterval(() => {
      let space = this.getRandomInt(this.minSpace, this.maxSpace);
      let height = this.getRandomInt(0, this.maxSpace);

      let obstacle = new Obstacle(this.canvas, this.ctx, this.src);
      obstacle.space = space;
      obstacle.height = height;

      this.obstacles.push(obstacle);

    }, this.frequency);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return (Math.floor(Math.random() * (max - min)) + min);
  }

}

export default ObstacleGenerator;
```

The generator takes in `Obstacle` objects and collects them into an array, which then render on the screen when the `drawObstacles` function is invoked in the `drawPlayingScreen` function in the `Game` class:

```
  drawPlayingScreen() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.scrollBackground();
    this.score.draw();
    this.drawObstacles();
    this.fish.draw();
    this.checkCollisions();
  }
```
This function then calls the `drawObstacles` helper function, which uses a `for loop` to draw each one:
```
  drawObstacles() {
    this.obstacles = this.obstacleGenerator.obstacles;

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
      this.obstacles[i].x -= this.velocity;
    }

    this.clearObstacles();
  }
```


#### Event listener

```Javascript
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
```

#### Collision Detection
```Javascript
  checkCollisions() {
    this.obstacles = this.obstacleGenerator.obstacles;

    for (var i = 0; i < this.obstacles.length; i++) {
      if (this.colliding(this.fish, this.obstacles[i])) {
        debugger
        this.currentState = 3;
      }
    }
  }
```

```Javascript
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
```

### Technologies

  - Vanilla Javascript (ES6) for game logic
  - Canvas and HTML5 for effects rendering
  - Webpack for bundling JS files

### Coming Soon
- high score feature
- parallax scrolling
