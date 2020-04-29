class Pyramid {
    constructor(vertices) {
        this.vertices = vertices
        for (let i = 0; i < this.vertices.length; i++) {
            this.vertices[i].x *= scale
            let z = this.vertices[i].y * scale
            let y = this.vertices[i].z * scale
            this.vertices[i].y = y
            this.vertices[i].z = z
        }
        objects.push(this)
    }

    show() {
        fill(200)
        beginShape()
        for (let i = 0; i < this.vertices.length - 1; i++) {
            vertex(this.vertices[i].x, this.vertices[i].y, this.vertices[i].z)
        }
        endShape(CLOSE)
        for (let i = 0; i < this.vertices.length - 1; i++) {
            let v = this.vertices.length - 1
            let j
            if (i != this.vertices.length - 2) { j = i + 1 }
            else { j = 0 }
            fill(200)
            beginShape()
            vertex(this.vertices[i].x, this.vertices[i].y, this.vertices[i].z)
            vertex(this.vertices[j].x, this.vertices[j].y, this.vertices[j].z)
            vertex(this.vertices[v].x, this.vertices[v].y, this.vertices[v].z)
            endShape(CLOSE)
        }
    }
}

class Prism {
    constructor(vertices) {
        this.vertices = vertices
        for (let i = 0; i < this.vertices.length; i++) {
            this.vertices[i].x *= scale
            let z = this.vertices[i].y * scale
            let y = this.vertices[i].z * scale
            this.vertices[i].y = y
            this.vertices[i].z = z
        }
        objects.push(this)
    }

    show() {
        fill(200)
        beginShape()
        for (let i = 0; i < this.vertices.length / 2; i++) {
            vertex(this.vertices[i].x, this.vertices[i].y, this.vertices[i].z)
        }
        endShape(CLOSE)
        beginShape()
        for (let i = this.vertices.length / 2; i < this.vertices.length; i++) {
            vertex(this.vertices[i].x, this.vertices[i].y, this.vertices[i].z)
        }
        endShape(CLOSE)
        for (let i = 0; i < this.vertices.length / 2; i++) {
            let j
            if (i != (this.vertices.length / 2) - 1) { j = i + 1 }
            else { j = 0 }
            let k = i + this.vertices.length / 2
            let z = j + this.vertices.length / 2
            fill(200)
            beginShape()
            vertex(this.vertices[i].x, this.vertices[i].y, this.vertices[i].z)
            vertex(this.vertices[j].x, this.vertices[j].y, this.vertices[j].z)
            vertex(this.vertices[z].x, this.vertices[z].y, this.vertices[z].z)
            vertex(this.vertices[k].x, this.vertices[k].y, this.vertices[k].z)
            endShape(CLOSE)
        }
    }
}

class Shape2d {
    constructor(vertices) {
        this.vertices = vertices
        for (let i = 0; i < this.vertices.length; i++) {
            this.vertices[i].x *= scale
            let z = this.vertices[i].y * scale
            let y = this.vertices[i].z * scale
            this.vertices[i].y = y
            this.vertices[i].z = z
        }
        objects.push(this)
    }

    show() {
        fill(200)
        beginShape()
        for (let v of this.vertices) {
            vertex(v.x, v.y, v.z)
        }
        endShape(CLOSE)
    }
}