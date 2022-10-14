class Box {
  constructor(ctx) {
    this.ctx = ctx;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillRect(10, 10, 100, 100);
  }
}

export default Box;
