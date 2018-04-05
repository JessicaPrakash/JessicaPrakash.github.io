// Where is the circle
var x, y;
var x;
var y;
var outsideRadius = 150;
var insideRadius = 100;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height / 1;
}

function draw() {
  background(200);
  // Draw a circle
  stroke(50);
  fill(66, 75, 244);
  ellipse(x, y, 24, 24);

  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
  var numPoints = int(map(mouseX, 0, width, 6, 60));
   var angle = 0;
   var angleStep = 180.0/numPoints;

   beginShape(TRIANGLE_STRIP);
   for (var i = 0; i <= numPoints; i++) {
     var px = x + cos(radians(angle)) * outsideRadius;
     var py = y + sin(radians(angle)) * outsideRadius;
     angle += angleStep;
     vertex(px, py);
     px = x + cos(radians(angle)) * insideRadius;
     py = y + sin(radians(angle)) * insideRadius;
     vertex(px, py);
     angle += angleStep;
   }
   endShape();
}
