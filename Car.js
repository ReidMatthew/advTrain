class Car {
    constructor({ track, radius, color, degree, maxSpeed, maxAcceleration } = {}) {
        this.v = createVector(0, 0);

        this.track = track;
        this.radius = radius ?? 10;
        this.color = color ?? randColor();
        this.degree = degree ?? 0;
        this.maxSpeed = maxSpeed ?? 100;
        this.maxAcceleration = maxAcceleration;

        this.speed = 6;
        this.acceleration = 1.02;

        this.switchFrame = 0;

        cars.push(this);
    }

    show() {
        this.updatePosition();

        push();

        noStroke();
        fill(this.color);
        circle(this.v.x, this.v.y, this.radius);

        pop();
    }

    updatePosition() {
        // this.speed = Math.min(this.speed * this.acceleration, this.maxSpeed, this.track.maxSpeed)
        // let rate = Math.min(this.speed * frameCount / 100, this.maxSpeed, this.track.maxSpeed);
        let prev = this.degree;
        this.degree += this.track.rotation * this.speed / this.track.radius;
        this.degree = this.degree < 0 ? this.degree + 2 * Math.PI : this.degree;
        this.degree %= 2 * Math.PI;
        
        // if (frameCount % 100 === 0) console.log(degrees(this.degree))

        this.track.connections.forEach(c => {
            let a = [Math.abs(degrees(this.degree)), Math.abs(degrees(prev)), c.degree].sort((a, b) => a-b);
            if (a[1] === c.degree && Math.abs(a[0] - a[2]) < 10 && frameCount - this.switchFrame > 2) {
                this.switchFrame = frameCount;
                this.degree = radians(c.inverseDegree);
                this.track = c.neighboor;
            }
        });

        this.v.x = this.track.radius / 2 * Math.cos(this.degree) + this.track.v.x;
        this.v.y = this.track.radius / 2 * -Math.sin(this.degree) + this.track.v.y;

        
    }

    closestTrack() {
        let closest = tracks[1],
            dist    = 9999999,
            tempDist;

        tracks.forEach(track => {
            if (this.t == track) return;

            tempDist = p5.Vector.dist(track.v, this.v);
            if (tempDist < dist + 9) {
                dist = tempDist;
                closest = track;
            }
        })
        return closest;
    }

    static showAll() {
        cars.forEach(c => c.show());
    }
}