class Vector {
  constructor(_a, _u) {
    this.x = _a;
    this.y = _u;
  }
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  mul(n) {
    this.x *= n;
    this.y *= n;
  }

  div(n) {
    this.x /= n;
    this.y /= n;
  }

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    let m = this.magnitude();

    if (m != 0) {
      this.div(m);
    }
  }
}

export default Vector;
