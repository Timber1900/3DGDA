class point {
  constructor(x, z, y) {
    this.x = x
    this.y = z
    this.z = y
    points.push(this)
  }

  show() {
    push();
    translate(this.x * scale, this.y * scale, this.z * scale)
    ellipsoid(5, 5, 5)
    pop();
  }
}
