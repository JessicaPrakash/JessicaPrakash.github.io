var pg;

function setup(){
  createCanvas(1366, 546);
  pg = createGraphics(700, 350);
}

function draw(){
  fill(0, 255, 250);
  rect(0, 0, width, height);
  fill(203, 0, 255);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);

  pg.background(0,0,0);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX-330, mouseY-90, 50, 50);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 330, 90);

}
