var yoff = 0;
var x;
var y;
var outsideRadius = 150;
var insideRadius = 100;

function setup() {
  createCanvas(600, 500);
  // Starts in the middle
   x = width / 2;
   y = height;

}

function draw() {
  background(119, 255, 255);
  translate(width / 2, height / 2);
  //rotate(PI / 2);

  if (mouseIsPressed) {
		fill(0, 23, 237);

	} else {
		fill(255, 100, 50);

  stroke(255);
  fill(195, 69, 249);
  strokeWeight(1);

  // Jiggling randomly on the horizontal axis
x = x + random(-1, 1);
// Moving up at a constant speed
y = y - PI/2;

// Reset to the bottom
if (y < PI/2) {
  y = height;
}

}

var da = PI / 200;
var dx = 0.05;

  var xoff = 0;
  beginShape();
  for (var a = 0; a <= TWO_PI; a += da) {
    var n = noise(xoff, yoff);
    var r = sin(2 * a) * map(n, 0, 1, 50, 200);
    var x = r * cos(a);
    var y = r * sin(a);
    if (a < PI){
        xoff += dx;
    } else{
        xoff -= dx;
    }
    //point(x, y);
    vertex(x, y);

  }
  endShape();

  yoff += 0.01;
}
