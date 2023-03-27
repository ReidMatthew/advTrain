class Track {
    constructor({ x, y, radius, rotation, color, maxSpeed, stops, fill } = { x: 100, y: 100 }) {
        this.v = createVector(x, y);
        this.r = radius;
        this.rotation = rotation ?? 1;
        this.color = color ?? randColor();
        this.maxSpeed = maxSpeed;
        this.stops = stops;
        this.fill = fill ?? "NOFILL";
    }

    show() {
        push();

        stroke(this.color);
        fill(this.fill);
        circle(this.v.x, this.v.y, this.r)

        pop();
    }

    static showAll() {
        tracks.forEach(t => t.show())
    }
}