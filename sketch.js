var track, train, degree = 0;

function setup() {
	varInit();

	createCanvas(windowWidth, windowHeight);

	// put setup code here
}

function draw() {
	background("white")
	degree = ++degree % 3600 
	circle(track.x, track.y, track.z)
	circle( track.z / 2 * Math.cos(degree / 50) + train.x,  track.z / 2 * Math.sin(degree / 50) + train.y, train.z)

}



function varInit() {
	track = createVector(400,400,500);
	train = createVector(track.x, track.y, 20);
}
