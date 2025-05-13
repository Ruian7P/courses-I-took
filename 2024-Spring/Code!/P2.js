let c ="#586912";

function setup() {
  createCanvas(400, 400);
  background("white");
  
  //bubble
  bubbleX1 = random(0,400);
  bubbleY1 = random(0,400);
  bubbleR1 = random(5,14);
  bubbleX2 = random(0,400);
  bubbleY2 = random(0,400);
  bubbleR2 = random(5,14);
  bubbleX3 = random(0,400);
  bubbleY3 = random(0,400);
  bubbleR3 = random(5,14);
  bubbleX4 = random(0,400);
  bubbleY4 = random(0,400);
  bubbleR4 = random(5,14);
  bubbleX5 = random(0,400);
  bubbleY5 = random(0,400);
  bubbleR5 = random(5,14);
  bubbleX6 = random(0,400);
  bubbleY6 = random(0,400);
  bubbleR6 = random(5,14);
  bubbleX7 = random(0,400);
  bubbleY7 = random(0,400);
  bubbleR7 = random(5,14);
  bubbleX8 = random(0,400);
  bubbleY8 = random(0,400);
  bubbleR8 = random(5,14);
}

function draw() {
  //bubbles
  fill(230);
  stroke(1);
  circle(bubbleX1,bubbleY1,bubbleR1);
  circle(bubbleX2,bubbleY2,bubbleR2);
  circle(bubbleX3,bubbleY3,bubbleR3);
  circle(bubbleX4,bubbleY4,bubbleR4);
  circle(bubbleX5,bubbleY5,bubbleR5);
  circle(bubbleX6,bubbleY6,bubbleR6);
  circle(bubbleX7,bubbleY7,bubbleR7);
  circle(bubbleX8,bubbleY8,bubbleR8);
  if (bubbleX1<420)
  {
    bubbleX1++;
    bubbleX2++;
    bubbleX3++;
    bubbleX4++;
    bubbleX5++;
    bubbleX6++;
    bubbleX7++;
    bubbleX8++;
  }
  else 
  {
    bubbleX1 = random(0,400);
    bubbleY1 = random(0,400);
    bubbleR1 = random(5,14);
    bubbleX2 = random(0,400);
    bubbleY2 = random(0,400);
    bubbleR2 = random(5,14);
    bubbleX3 = random(0,400);
    bubbleY3 = random(0,400);
    bubbleR3 = random(5,14);
    bubbleX4 = random(0,400);
    bubbleY4 = random(0,400);
    bubbleR4 = random(5,14);
    bubbleX5 = random(0,400);
    bubbleY5 = random(0,400);
    bubbleR5 = random(5,14);
    bubbleX6 = random(0,400);
    bubbleY6 = random(0,400);
    bubbleR6 = random(5,14);
    bubbleX7 = random(0,400);
    bubbleY7 = random(0,400);
    bubbleR7 = random(5,14);
    bubbleX8 = random(0,400);
    bubbleY8 = random(0,400);
    bubbleR8 = random(5,14);
  }
  
  //body
  push();
  stroke(5);
  fill("#91C547");
  ellipse(290,300,230,180);
  ellipse(200,160,350,280);
  curve(100,-180,110,280,220,300,450,-10);
  
  beginShape();
  fill(c);
  vertex(270,288);
  vertex(260,330);
  vertex(290,360);
  vertex(340,330);
  vertex(350,280);
  vertex(320,260);
  endShape(CLOSE);
  if (mouseIsPressed) {
    c = color(random(["#E4516B","#5592C2"]));
  }
  pop();
  
  //light
  push();
  noStroke();
  fill("#C4E0B0");
  ellipse (130,70,40,20);
  pop();
  
  //eyes
  push();
  fill("white");
  ellipse(120,180,50,100);
  ellipse(250,160,100,170);
  pop();
  
  //eye2
  push();
  fill("black");
  let x  =constrain(mouseX,230,270);
  let y = constrain(mouseY,140,180)
  ellipse(x,y,30,70);
  pop();
  
}