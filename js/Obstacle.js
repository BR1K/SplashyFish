class Obstacle {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = this.canvas.width;
    this.y = 0;
    this.width = 100;
    this.height = 0;
    this.space = 0;
    this.color = getRandomColor();
  }



  getRandomColor() {
    const red = getRandomInt(0, 257);
    const green = getRandomInt(0, 257);
    const blue = getRandomInt(0, 257);
    return "rgb('+r+','+g+','+b+')";
  }

}
