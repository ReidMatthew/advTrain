class Car {
    constructor({} = {}) {

        cars.push(this);
    }

    show() {
        if (!settings.paused) this.updatePosition();

        push();

        pop();
    }

    updatePosition() {

    }

    static showAll() {
        cars.forEach(c => c.show());
    }
}