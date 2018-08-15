class Background {

  constructor(src, canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.src = src;
    this.img = null

    this.create.bind(this);
    this.create();
    this.draw.bind(this);
  }

  create() {
    this.img = new Image();
    this.img.src = this.src;
  }

  draw() {
    if (this.img != null) {
      debugger
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }




}

export default Background;
