function setup () {
  createCanvas (500, 400);
  background (51);
  translate (width / 2, height / 2);

  var r = 100;
  beginShape();
  for (var a = -PI / 2; a < PI / 2; a += 0.1); {
    var x = r * cos(a);
    var y = r * sin(a);
    stroke(255);
    strokeWeight(4);
    //point(x,y);
    vertex(x, y);
    r--;
  }
  endShape();

}
