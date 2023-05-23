var tracks = [], trains = [], cars = [];
var settings = {redraw : true, visibleTracks : true};
var buttons = {};

function setup() {
	angleMode("degrees");
	createCanvas(windowWidth, windowHeight);

	buttonInit();
	varInit();
}

function draw() {
	if (settings.redraw) background("white")
	rect(0,0,100,190);
	fill("lightgrey")

	if (settings.visibleTracks) Track.showAll();
	Car.showAll();

	// Train.showAll();
}


function varInit() {
	new Track({ x: windowWidth / 2, y: windowHeight / 2, radius: 400, color: "black" });

	new Car({ track: tracks[0] });
	tracks[0].createConnection(90, 100);
}

function buttonInit() {
  buttons.redraw = createButton('redraw');
  buttons.redraw.position(0, 0);
  buttons.redraw.mousePressed(() => settings.redraw = !settings.redraw);
  buttons.visibleTracks = createButton('visibleTracks');
  buttons.visibleTracks.position(0, 20);
  buttons.visibleTracks.mousePressed(() => settings.visibleTracks = !settings.visibleTracks);

  buttons.radio = createRadio();
  buttons.radio.option('1', 'tracks');
  buttons.radio.option('2', 'stops');
  buttons.radio.option('3', 'cars');
  buttons.radio.style('width', '30px');
  buttons.radio.selected('1');
  buttons.radio.position(10,40);
}

function mouseClicked(e) {
	if (mouseX < 100 || mouseY < 190) return;
	let m = createVector(mouseX, mouseY),
		dist = 9999999,
		closest = 0;

	tracks.forEach((t, i) => {
		if (m.dist(t.v) - t.radius / 2 < dist) {
			dist = m.dist(t.v) - t.radius / 2;
			closest = i;
		}
	});

	let p = createVector(mouseX - tracks[closest].v.x, mouseY - tracks[closest].v.y).angleBetween(createVector(1, 0)),
		r = m.dist(tracks[closest].v) - tracks[closest].radius / 2;

	if (Math.abs(r) > 50) tracks[closest].createConnection(p, r);
	new Car({ track: tracks[tracks.length - 1] });
}

function keyPressed(e) {
	if (e.key === "t") settings.visibleTracks = !settings.visibleTracks
	if (e.key === "b") settings.redraw = !settings.redraw
}
