class Obstacle {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = this.canvas.width;
    this.y = 0;
    this.width = 100;
    this.height = 0;
    this.space = 0;
    this.color = this.getRandomColor();

    this.draw = this.draw.bind(this);
  }


  draw() {
    debugger
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.fillRect(this.x, this.height + this.space, this.width, this.canvas.height);

  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min)) + min);
  }

  getRandomColor() {
    const red = this.getRandomInt(0, 257);
    const green = this.getRandomInt(0, 257);
    const blue = this.getRandomInt(0, 257);
    return "rgb('+r+','+g+','+b+')";
  }


}

export default Obstacle;
