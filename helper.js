var boxes = [];

function randColor() {
    return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
}

function buttonInit() {
    // boxes.push(new Box({name : "button", positionV: p5.createVector(10,10), }))

    buttons.redraw = createButton('redraw');
    buttons.redraw.position(0, 0);
    buttons.redraw.mousePressed(() => settings.redraw = !settings.redraw);
    buttons.visibleTracks = createButton('visibleTracks');
    buttons.visibleTracks.position(0, 20);
    buttons.visibleTracks.mousePressed(() => settings.visibleTracks = !settings.visibleTracks);
    buttons.visibleTracks = createButton('pause');
    buttons.visibleTracks.position(0, 40);
    buttons.visibleTracks.mousePressed(() => settings.paused = !settings.paused);

    buttons.radio = createRadio();
    buttons.radio.option('1', 'tracks');
    buttons.radio.option('2', 'stops');
    buttons.radio.option('3', 'cars');
    buttons.radio.style('width', '30px');
    buttons.radio.selected('1');
    buttons.radio.position(10, 70);
}

class Box {
    constructor({ name, positionV, dimVector, borderColor, highlightColor, fillColor } = {}) {
        this.name = name;
        this.pos = positionV;
        this.dim = dimVector;
        this.border = borderColor;
        this.highlight = highlightColor;
        this.fill = fillColor;
    }

    show() {

    }

    static showAll() {
        boxes.forEach(b => b.show());
    }
}

class Button extends Elem{
    constructor(stop) {
        super({pos : stop.pos, radius : stop.radius * 1.3});

        this.pos = stop.pos;
        this.radius = stop.radius * 1.3;
        this.color = stop.color;
        this.fill = [(this.color[0] + 50) % 255, (this.color[1] + 50) % 255, (this.color[2] + 50) % 255]
    }

    show() {
        push();

        fill(this.fill);
        strokeWeight(3);
        stroke(this.color);
        circle(this.pos.x, this.pos.y, this.radius);

        pop();
    }
}