function setup() {
    createCanvas(500, 500);
    background(200);
    strokeWeight(10);
}

function draw() {
  if (mouseX > 400) {
    fill(255, 100, 50);
  } else if (mouseX > 300) {
    fill(200, 100, 100);
    } else if (mouseX > 200) {
        fill(150, 100, 150);
    } else if (mouseX > 100) {
        fill(100, 100, 200);
  } else {
    fill(50, 100, 250);
  }
    // A triangle!
  	triangle(50, 400, 150, 400, 100, 480);
    // A quad!
    quad(30, 100, 300, 450, 350, 150, 200, 50);
    // A text!
		textSize(16);
    text("CHANGE COLOR WITH BREAKPOINTS", width/2 - 50, 475);
}
