let rectangles = [];

var sourceText = "";

var pg;

function setup(){
  createCanvas(1349, 546);
  pg = createGraphics(700, 600);

 frameRate(20);

}


function draw(){
  fill(0, 255, 250);
  rect(0, 0, width, height);
  fill(203, 0, 255);
  noStroke();

  pg.background(0,0,0);
  pg.noFill();
  pg.stroke(255);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 0, 0);



  from = color(255, 0, 0, 0.2 * 255);
    to = color(0, 0, 255, 0.2 * 255);
    c1 = lerpColor(from, to, .33);
    c2 = lerpColor(from, to, .66);
    for (var i = 0; i < 15; i++) {
      fill(from);
      quad(random(690, 950), random(height),
           random(690, 950), random(height),
           random(690, 950), random(height),
          random(690, 950), random(height));
      fill(c1);
      quad(random(850, 1090), random(height),
           random(850, 1090), random(height),
           random(850, 1090), random(height),
           random(850, 1090), random(height));
      fill(c2);
      quad(random(1005, 1265), random(height),
           random(1005, 1265), random(height),
           random(1005, 1265), random(height),
           random(1005, 1265), random(height));
      fill(to);
      quad(random(1185, 1415), random(height),
           random(1185, 1415), random(height),
           random(1185, 1415), random(height),
           random(1185, 1415), random(height));


               fill(from);
               quad(random(-40, 220), random(height),
                    random(-40, 220), random(height),
                    random(-40, 220), random(height),
                   random(-40, 220), random(height));
               fill(c1);
               quad(random(140, 380), random(height),
                    random(140, 380), random(height),
                    random(140, 380), random(height),
                    random(140, 380), random(height));
               fill(c2);
               quad(random(320, 580), random(height),
                    random(320, 580), random(height),
                    random(320, 580), random(height),
                    random(320, 580), random(height));
               fill(to);
               quad(random(500, 760), random(height),
                    random(500, 760), random(height),
                    random(500, 760), random(height),
                    random(500, 760), random(height));


    }
    frameRate(3);




  strokeWeight(2);
  fill(255);
  textFont("Comic Sans MS");
  textSize(40 + (mouseX / width)*3);
  text("What I Think", 470, 40);


  strokeWeight(2);
  fill(193, 48, 255);
  textFont("Comic Sans MS");
  textSize(40 + (mouseX / width)*3);
  text("The Truth", 1130, 40);



  fill(255);
   textSize(25);
   textAlign(RIGHT, RIGHT);
   var middle = sourceText.length / 2;
   var left = middle - ((mouseX / width) * middle);
   var right = middle + ((mouseX / width) * middle);
   text (
     sourceText.substring(left, right+1),
     width/2, height/2);

       if (mouseIsPressed) {
         noFill();
         stroke(0, 255, 0);


    strokeWeight(2);
    fill(255);
    textFont("Comic Sans MS");
    textSize(20 + (mouseX / width)*4);
    text("Why do so many people hurt me? I didn't do anything wrong.", 680, 190);

    strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*4);
text("I mess up so much. What's wrong with me?", 600, 130);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I don't think I have a purpose.", 570, 85);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I'm sad and so tired of this!", 600, 310);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I wish my I could escape my problems but I can't.", 600, 350);

strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I'm so stupid.", 610, 390);

strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I wish I was never born.", 630, 440);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I don't know if I can do this but I can't just give up.", 650, 500);



strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*4);
text("I'm blessed", 1100, 190);

strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*4);
text("I'm grateful for my friends and my family.", 1230, 130);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I want to try staying positive.", 1200, 85);



strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("We can achieve our dreams.", 1200, 310);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I want to make a difference.", 1200, 350);

strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("No matter how hard life gets, we can't lose hope.", 1280, 390);

strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I have to remember that failure is a part of success.", 1300, 440);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I have to try letting go of the things that bring me down.", 1310, 500);



strokeWeight(2);
  fill(16, 0, 255 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(20 + (mouseX / width)*72);
  text("Don't give up. You got this!", 1150, 265);


       }

}
