var tracks = [], cars = [];
var settings = { redraw: true, visibleTracks: true, paused: false };
var activeTrack = new Track();
var activeDrags = [];
var buttons = [];
var elms = [];
var time = 0;

function setup() {
	angleMode("degrees");
	createCanvas(windowWidth, windowHeight);

	buttonInit();
	varInit();
}

function draw() {
	if (settings.redraw) background(70)
	if (!settings.paused) time++;
	processButtons();

	if (settings.visibleTracks) Track.showAll();
	// Car.showAll();
}

function varInit() {

}

function processButtons() {
	Box.showAll();
}

function mousePressed(e) {
	let v = createVector(mouseX, mouseY),
		contained = Elem.checkContain(v);

	if (contained.length !== 0) {
		Elem.checkClick(v);
		activeDrags.push(...contained);
	}
	else if (buttons) activeTrack.addVertex(mouseX, mouseY);
}

function mouseClicked(e) {
	activeDrags = [];
}

function mouseDragged(e) {
	let v = createVector(mouseX, mouseY);
	if (activeDrags.length !== 0) {
		activeDrags.forEach(a => {
			a.drag(v);
		})
	}
	else {
		Elem.checkDrag(v);
	}
}

function keyPressed(e) {
	if (e.key === "t") Track.newActiveTrack();
	if (e.key === "b") settings.redraw = !settings.redraw
	if (e.key === "space-bar") settings.paused = !settings.paused
}
