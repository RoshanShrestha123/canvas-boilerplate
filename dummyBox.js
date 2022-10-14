import Vector from "./Vector";

class Box {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = new Vector(100, 100);

    this.size = 20;

    this.velocity = new Vector(1, 1);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillRect(this.pos.x, this.pos.y, 20, 20);
  }

  update() {
    this.pos.add(this.velocity);
    this.draw();
  }
}

export default Box;
