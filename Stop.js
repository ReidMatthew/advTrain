class Stop extends Elem{
    constructor({ track, position, radius } = {}) {
        super({pos : position, radius : radius});

        this.track = track;
        this.pos = position;
        this.radius = radius;
        this.color = track.color;
        this.shared;
        this.button = new Button(this)
    }

    show(buttonMode) {
        if (buttonMode) this.button.show();

        push();
        stroke(this.track.color);
        strokeWeight(10)
        point(this.pos.x, this.pos.y)
        pop();
    }

    shareTrack(track) {
        this.shared = track;
    }
}