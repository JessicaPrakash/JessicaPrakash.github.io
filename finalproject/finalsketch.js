let rectangles = [];

var sourceText = "I'm really sad!";

var pg;

function setup(){
  createCanvas(1366, 546);
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

  fill(255);
   textSize(25);
   textAlign(RIGHT, RIGHT);
   var middle = sourceText.length / 2;
   var left = middle - ((mouseX / width) * middle);
   var right = middle + ((mouseX / width) * middle);
   text (
     sourceText.substring(left, right+1),
     width/2, height/2);

     fill(255);
       textSize(25);
       text("I shouldn't just give up.",
         mouseX, mouseY, 200, 200);
       if (mouseIsPressed) {
         noFill();
         stroke(0, 255, 0);
         rect(mouseX, mouseY, 200, 100);

         strokeWeight(2);
    fill(255);
    textFont("Comic Sans MS");
    textSize(20 + (mouseX / width)*4);
    text("Why do so many people hurt me? I didn't do anything wrong.", 680, 200);

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
text("I'm so stupid.", 610, 40);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("So many people deceived me.", 600, 310);


strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("School is hard and too stressful.", 600, 350);

strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I don't know if I can do this but I can't just give up.", 610, 390);

strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I have to try letting go of the things that bring me down.", 630, 440);





    strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*4);
text("I'm blessed", 1100, 200);

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
text("Overthinking can cause us to believe lies.", 1210, 40);


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
text("I don't know what's going to happen in the future.", 1280, 390);

strokeWeight(2);
fill(255);
textFont("Comic Sans MS");
textSize(20 + (mouseX / width)*3);
text("I have to remember that failure is a part of success.", 1300, 440);



       }


}
