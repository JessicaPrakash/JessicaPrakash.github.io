let rectangles = [];

var sourceText = "";

var pg;

var words = ["What's wrong with me?", "I'm sad.", "I can't do this.", "I'm so stupid!",];

var words2 = ["I'm blessed!", "I have to keep trying.", "I can achieve my dreams.", "I must stay strong."];


var index = 0;

function setup(){
  createCanvas(1349, 546);
  pg = createGraphics(700, 600);

 frameRate(20);

}


function draw(){
  fill(158, 248, 255);
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



     strokeWeight(2);
     fill(255, 255, 255);
     textFont("Comic Sans MS");
     textSize(32);

     text(words[index], 500, 320);

     text(words2[index], 1200, 320);



       if (mouseIsPressed) {
         noFill();
         stroke(0, 255, 0);

         index = index + 1;

         if (index == words.length) {

         index = 0;

}

    strokeWeight(2);
    fill(255);
    textFont("Comic Sans MS");
    textSize(20 + (mouseX / width)*4);
    text("Why do so many people hurt me? I didn't do anything wrong.", 680, 190);

    strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*4);
text("I fail so much.", 420, 137);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I don't think I have a purpose.", 500, 85);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I'm so tired of this!", 468, 390);



strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I wish I was never born.", 480, 445);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I don't know if I can do this but I can't just give up.", 650, 500);



strokeWeight(2);
fill(0);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*4);
text("My mistakes and failures can help me become stronger.", 1345, 190);

strokeWeight(2);
fill(0);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*4);
text("I shouldn't let bad things from the past hurt me today.", 1325, 137);


strokeWeight(2);
fill(0);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("They were all wrong. I shouldn't let them bring me down.", 1325, 85);



strokeWeight(2);
fill(0);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("No matter how hard life gets, I can't lose hope.", 1280, 390);

strokeWeight(2);
fill(0);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I have to remember that failure is a part of success.", 1300, 445);


strokeWeight(2);
fill(0);
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
  text("Don't give up! You got this!", 1180, 265);


       }

}
