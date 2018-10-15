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
