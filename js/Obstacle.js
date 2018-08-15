class Obstacle {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = this.canvas.width;
    this.y = 0;
    this.width = 100;
    this.height = 0;
    this.space = 0;

    this.draw = this.draw.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.color = this.getRandomColor();
  }


  draw() {
    // debugger
    this.ctx.fillStyle = this.color;

    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.fillRect(this.x, this.height + this.space, this.width, this.canvas.height);

  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min)) + min);
  }

  getRandomColor() {
    // debugger
    const red = this.getRandomInt(0, 257);
    const green = this.getRandomInt(0, 257);
    const blue = this.getRandomInt(0, 257);
    return `rgb(${red}, ${green}, ${blue})`;
    debugger
  }


}

export default Obstacle;
