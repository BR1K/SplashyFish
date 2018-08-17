class Obstacle {
  constructor(canvas, ctx, src) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = this.canvas.width;
    this.y = 0;
    this.width = 100;
    this.height = 0;
    this.space = 0;

    this.img = null;
    this.src = src;


    this.draw = this.draw.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.color = this.getRandomColor();
    this.createImg = this.createImg.bind(this);
    this.createImg();
  }

  createImg() {
    this.img = new Image();
    this.img.src = this.src;
  }


  draw() {
    // debugger
    if (this.img != null) {
      // debugger
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      // this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      this.ctx.drawImage(this.img, this.x, this.height + this.space - 40, this.width, this.canvas.height);
    }
    // this.ctx.fillStyle = this.color;
    //
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //
    // this.ctx.fillRect(this.x, this.height + this.space, this.width, this.canvas.height);

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
    // debugger
  }


}

export default Obstacle;
