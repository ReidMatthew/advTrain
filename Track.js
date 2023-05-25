class Track {
    constructor({ vertex, color } = {}) {
        this.id = Math.floor(Math.random() * 10000);
        this.vertex = vertex ?? [];
        this.stops = [];
        this.color = color ?? randColor();
        this.isActive = true;
        tracks.push(this);
    }

    show() {
        push();

        fill(this.color);
        this.stops.forEach((s, i) => {
            s.show(i === 0);
        });
        if (this.vertex.length < 3) return;

        noFill();
        stroke(this.color);

        line(this.stops[0].pos.x, this.stops[0].pos.y, this.stops[this.stops.length - 1].pos.x, this.stops[this.stops.length - 1].pos.y)
        this.stops.forEach((s, i) => {
            if (i === 0) return;
            line(s.pos.x, s.pos.y, this.stops[i - 1].pos.x, this.stops[i - 1].pos.y)
        })

        // beginShape();
        // // curveVertex(this.vertex[this.vertex.length - 1].x, this.vertex[this.vertex.length - 1].y);
        // this.vertex.forEach((v, i) => {
        //     curveVertex(v.x, v.y);
        // })
        // if (this.isActive) curveVertex(mouseX, mouseY)
        // curveVertex(this.vertex[0].x, this.vertex[0].y)
        // curveVertex(this.vertex[1].x, this.vertex[1].y)
        // curveVertex(this.vertex[2].x, this.vertex[2].y)
        // endShape();

        pop();
    }

    addVertex(x, y) {
        this.vertex.push(createVector(x, y));
        this.stops.push(new Stop({ track: this, position: createVector(x, y), radius: 8 }));
    }

    bez(p1, p2, g1, g2, t) {
        let l1 = p5.Vector.lerp(p1, g1, t),
            l2 = p5.Vector.lerp(p2, g2, 1 - t),
            g = p5.Vector.lerp(g1, g2, t),
            m1 = p5.Vector.lerp(l1, g, t),
            m2 = p5.Vector.lerp(l2, g, 1 - t);

        return p5.Vector.lerp(m1, m2, t);
    }

    static showAll() {
        tracks.forEach(t => t.show())
    }

    static newActiveTrack() {
        tracks[tracks.length - 1].isActive = false;
        activeTrack = new Track();
    }
}