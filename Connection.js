class Connection {
    constructor(track1, track2) {
        this.self = track1;
        this.neighboor = track2;
        this.degree = Connection.relPosition(this.neighboor.v, this.self.v);
        this.inverseDegree = Connection.relPosition(this.self.v, this.neighboor.v);
        this.degree = this.degree < 0 ? this.degree + 360 : this.degree;
        this.inverseDegree = this.inverseDegree < 0 ? this.inverseDegree + 360 : this.inverseDegree;
    }

    show() {
        push();
        pop();
    }

    static relPosition(v1, v2) {
        return createVector(v1.x - v2.x, v1.y - v2.y).angleBetween(createVector(1, 0));
    }
}