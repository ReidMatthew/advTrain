class Elem {
    constructor({ pos, dim, radius, clickable, dragable } = {}) {
        this.id = Math.floor(Math.random() * 10000);

        this.pos = pos;
        this.dim = dim;
        this.radius = radius;

        this.clickable = clickable ?? true;
        this.dragable = dragable ?? true;

        elms.push(this)
    }

    click() {
        console.log(this)
    }

    drag(vector) {
        this.pos = createVector(mouseX, mouseY);
    }

    hover() {

    }

    contained(vector) {
        if (this.radius) return this.pos.dist(vector) <= this.radius;
        if (this.dim) return [this.pos.x, this.pos.x + this.dim.x, vector.x].sort()[1] === vector.x && [this.pos.y, this.pos.y + this.dim.y, vector.y].sort()[1] === vector.y
    }

    offset(vector) {

    }

    static checkClick(vector) {
        elms.forEach(e => {
            if (!e.clickable) return;
            if (e.contained(vector)) e.click(vector);
        })
    }

    static checkDrag(vector) {
        elms.forEach(e => {
            if (!e.dragable) return;
            if (e.contained(vector)) e.drag(vector);
        })
    }

    static checkContain(vector) {
        let contained = [];
        elms.forEach(e => {
            if (!e.dragable && !e.clickable) return;
            if (e.contained(vector)) contained.push(e);
        });

        return contained;
    }
}