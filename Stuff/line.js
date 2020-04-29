class line {
  constructor(x1, y1, z1, x2, y2, z2) {
    let pos1 = createVector(x1 * scale, z1 * scale, y1 * scale)
    let pos2 = createVector(x2 * scale, z2 * scale, y2 * scale)
    this.u = p5.Vector.sub(pos1, pos2)
    this.u.normalize();
    this.pos1 = p5.Vector.add(this.u.mult(1000), pos1);
    this.u.normalize();
    this.pos2 = p5.Vector.add(this.u.mult(-1000), pos2);
    this.u.normalize();
    lines.push(this)
  }

  show() {
    strokeWeight(5);
    beginShape();
    vertex(this.pos1.x, this.pos1.y, this.pos1.z)
    vertex(this.pos2.x, this.pos2.y, this.pos2.z)
    endShape();
  }
}
