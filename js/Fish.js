class Fish {
  constructor(src, canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = 115;
    this.y = 115;
    this.width = 115;
    this.height = 90;

    this.vy = 0;
    this.g = 0.20;

    this.src = src;
    this.img = null;
    this.frame = 0;

    this.create = this.create.bind(this);
    this.create();

  }

  create() {
    this.img = new Image();
    this.img.src = this.src;
  }

  draw() {
    if (this.img != null) {
      this.vy += this.g;
      this.y += this.vy

      if (this.y + this.height > this.canvas.height) {
        this.y = this.canvas.height - this.height;
        this.vy = 0;
      } else if (this.y < 0) {
        this.y = 0;
        this.vy = 0;
      }

      this.ctx.drawImage(this.img, this.frame * 256, 0, 256, 175, this.x, this.y, this.width, this.height);
      this.frame++;
      this.frame %= 6
      // debugger
    }
  }

}

export default Fish;
