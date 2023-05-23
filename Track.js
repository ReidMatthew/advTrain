class Track {
    constructor({ x, y, radius, rotation, color, maxSpeed, stops, fill } = { x: 100, y: 100 }) {
        this.v = createVector(x, y);
        this.radius = radius;
        this.rotation = rotation ?? 1;
        this.color = color ?? randColor();
        this.maxSpeed = maxSpeed ?? Math.sqrt(radius);
        this.stops = stops;
        this.fill = fill;
        this.connections = [];

        tracks.push(this);
    }

    show() {
        push();

        stroke(this.color);
        noFill();
        if (this.fill) fill(this.fill);
        circle(this.v.x, this.v.y, this.radius)

        pop();
    }

    createConnection(position, radius = Math.floor(this.radius * .6), track) {
        track = track ?? new Track({
            x: this.v.x + (Math.cos(position * Math.PI / 180) * (this.radius + radius) / 2),
            y: this.v.y - (Math.sin(position * Math.PI / 180) * (this.radius + radius) / 2),
            radius, rotation: -1 * this.rotation
        });

        this.connections.push(new Connection(this, track));
        track.connections.push(new Connection(track, this));
    }

    static showAll() {
        tracks.forEach(t => t.show())
    }
}