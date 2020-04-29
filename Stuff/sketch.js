let angleY = 0
let angleX = 0
let scale = 100;
let zoom = 0;
let points = []
let lines = []
let planes = []
let objects = []
function setup() {
  createCanvas(1000, 1000, WEBGL);
  let xLine = new Line(-1, 0, 0, 1, 0, 0)
  let fPlane = new PlaneF_Reference(0)
  let hPlane = new PlaneH_Reference(0)
  createObjects();
}
function draw() {
  background(220);
  cameraMovement()
  translate(0, 0, zoom);
  rotateX(angleX + PI);
  rotateY(angleY + PI);
  showObjects()
}
function showObjects() {
  for (point of points) {
    point.show()
  }
  for (line of lines) {
    line.show()
  }
  for (plane of planes) {
    plane.show()
  }
  for (obj of objects) {
    obj.show()
  }

}
function cameraMovement() {
  if (keyIsDown(LEFT_ARROW)) {
    angleY -= 0.01;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    angleY += 0.01;
  }
  if (keyIsDown(UP_ARROW)) {
    angleX -= 0.01;
  }
  if (keyIsDown(DOWN_ARROW)) {
    angleX += 0.01;
  }
  if (keyIsDown(SHIFT)) {
    zoom += 10
  }
  if (keyIsDown(CONTROL)) {
    zoom -= 10
  }
}

function Point(x, y, z) {
  return new point(x, y, z)
}

function Line(x1, y1, z1, x2, y2, z2) {
  return new line(x1, y1, z1, x2, y2, z2)
}

function Plane(frontal, horizontal) {
  return new plane(frontal, horizontal)
}

function PlaneH(z) {
  return new planeH(z)
}

function PlaneF(y) {
  return new planeF(y)
}

function PlaneP(x) {
  return new planeP(x)
}

function PlaneV(horizontal) {
  return new planeV(horizontal)
}

function PlaneT(frontal) {
  return new planeT(frontal)
}

function PlaneR(frontal, horizontal) {
  return new planeR(frontal, horizontal)
}

function shape2d(vertices) {
  return new Shape2d(vertices)
}

function pyramid(vertices) {
  return new Pyramid(vertices)
}

function prism(vertices) {
  return new Prism(vertices)
}
