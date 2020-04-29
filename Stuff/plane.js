class plane {
  constructor(front, horizontal) {
    this.pos1 = p5.Vector.add(front.pos1, horizontal.pos1)
    this.pos2 = p5.Vector.add(front.pos2, horizontal.pos1)
    this.pos3 = p5.Vector.add(front.pos1, horizontal.pos2)
    this.pos4 = p5.Vector.add(front.pos2, horizontal.pos2)
    planes.push(this)
  }

  show() {
    fill(200, 225)
    beginShape()
    vertex(this.pos1.x, this.pos1.y, this.pos1.z)
    vertex(this.pos3.x, this.pos3.y, this.pos3.z)
    vertex(this.pos4.x, this.pos4.y, this.pos4.z)
    vertex(this.pos2.x, this.pos2.y, this.pos2.z)

    endShape(CLOSE)
  }

}

class planeF {
  constructor(y) {
    this.y = y * scale
    planes.push(this)
    this.l = 1500
    this.fill = 255
  }
  show() {
    fill(this.fill, 200)
    beginShape()
    vertex(1000, this.l, this.y);
    vertex(-1000, this.l, this.y);
    vertex(-1000, -this.l, this.y);
    vertex(1000, -this.l, this.y);
    endShape(CLOSE)
  }

}

class PlaneF_Reference extends planeF {
  constructor(y) {
    super(y)
    this.fill = 127
  }
}

class planeH {
  constructor(z) {
    this.z = z * scale
    planes.push(this)
    this.l = 1500
    this.fill = 255
  }
  show() {
    fill(this.fill, 200)
    beginShape()

    vertex(1000, this.z, this.l);
    vertex(-1000, this.z, this.l);
    vertex(-1000, this.z, -this.l);
    vertex(1000, this.z, -this.l);
    endShape(CLOSE)
  }

}

class PlaneH_Reference extends planeH {
  constructor(z) {
    super(z)
    this.fill = 127
  }
}

class planeP {
  constructor(x) {
    this.x = x * scale
    planes.push(this)
  }

  show() {
    fill(200, 225)
    beginShape()
    vertex(this.x, 1200, 1200);
    vertex(this.x, 1200, -1200);
    vertex(this.x, -1200, -1200);
    vertex(this.x, -1200, 1200);

    endShape(CLOSE)
  }
}

class planeR {
  constructor(front, horizontal) {
    this.u = p5.Vector.sub(front.pos1, horizontal.pos1)
    this.u.setMag(1000)
    this.t = createVector(0, front.pos1.y, horizontal.pos1.z)
    this.t.mult(.5)
    this.pos1 = p5.Vector.add(createVector(-1200, this.u.y, this.u.z), this.t)
    this.pos2 = p5.Vector.add(createVector(1200, this.u.y, this.u.z), this.t)
    this.pos3 = p5.Vector.add(createVector(-1200, -this.u.y, -this.u.z), this.t)
    this.pos4 = p5.Vector.add(createVector(1200, -this.u.y, -this.u.z), this.t)
    planes.push(this)
  }

  show() {
    fill(200, 225)
    beginShape()
    vertex(this.pos1.x, this.pos1.y, this.pos1.z)
    vertex(this.pos3.x, this.pos3.y, this.pos3.z)
    vertex(this.pos4.x, this.pos4.y, this.pos4.z)
    vertex(this.pos2.x, this.pos2.y, this.pos2.z)

    endShape(CLOSE)
  }

}

class planeT {
  constructor(frontal) {
    this.frontal = frontal
    planes.push(this)
  }

  show() {
    fill(200, 225)
    beginShape()
    vertex(this.frontal.pos1.x, this.frontal.pos1.y, 1200);
    vertex(this.frontal.pos1.x, this.frontal.pos1.y, -1200);
    vertex(this.frontal.pos2.x, this.frontal.pos2.y, -1200);
    vertex(this.frontal.pos2.x, this.frontal.pos2.y, 1200);
    endShape(CLOSE)
  }
}

class planeV {
  constructor(horizontal) {
    this.horizontal = horizontal
    planes.push(this)
  }

  show() {
    fill(200, 225)
    beginShape()
    vertex(this.horizontal.pos1.x, 1200, this.horizontal.pos1.z);
    vertex(this.horizontal.pos1.x, -1200, this.horizontal.pos1.z);
    vertex(this.horizontal.pos2.x, -1200, this.horizontal.pos2.z);
    vertex(this.horizontal.pos2.x, 1200, this.horizontal.pos2.z);
    endShape(CLOSE)
  }
}
