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
    const draw = new Date();
    this.score = parseFloat((draw - this.start) / 1000).toFixed(1);

    this.ctx.font = '45px Verdana';
    this.ctx.fillText(this.score, this.x, this.y)
  }
}

export default Score;
