var tracks = [], trains = [], degree = 0, stops = [];

function setup() {
	varInit();

	stops.push(createVector(Math.random() * windowWidth, Math.random() * windowHeight));
	stops.push(createVector(Math.random() * windowWidth, Math.random() * windowHeight));
	stops.push(createVector(Math.random() * windowWidth, Math.random() * windowHeight));

	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background("white")
	degree = ++degree % 3600;


	Track.showAll();
	Train.showAll();
}



function varInit() {
	tracks.push(new Track({ x: 250, y: 250, radius: 400, color: 0 }));
	trains.push(new Train({ track: tracks[0] }))
}
