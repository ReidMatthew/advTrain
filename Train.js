class Train {
    constructor({ track, radius, color, degree, maxSpeed } = {}) {
        this.t = track;
        this.r = radius ?? 10;
        this.color = color ?? randColor();
        this.degree = degree ?? Math.floor(Math.random() * 360);
        this.maxSpeed = maxSpeed ?? 10;

        this.v = createVector(track.v.x, track.v.y);
    }

    show() {
        this.updatePosition();

        push();

        fill(this.color);
        circle(this.t.r / 2 * Math.cos(this.degree / 50) + this.t.v.x, this.t.r / 2 * Math.sin(this.degree / 50) + this.t.v.y, this.r);

        pop();
    }

    updatePosition() {
        this.degree = (this.degree + this.t.rotation);
    }

    static showAll() {
        trains.forEach(t => t.show());
    }
}