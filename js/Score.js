class Score{
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.start = new Date();
    this.currentScore = 0;
    this.x = 0;
    this.y = 0;

    this.draw = this.draw.bind(this);
  }

  draw() {

  }
}
