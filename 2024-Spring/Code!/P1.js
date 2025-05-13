function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#FFE120");
  
  //head
  push();
  stroke("black");
  strokeWeight(5);
  fill("#4EE6FA");
  arc(230,120,250,180,PI-1/4,1/4,OPEN);
  pop();
  
  //color_fill
  push();
  noStroke();
  fill("#4EE6FA");
  circle(167,150,100);
  arc(30,400,300,100,PI,0,OPEN);
  ellipse(165,220,50,200);
  ellipse(150,330,50,150);
  ellipse(120,400,50,165);
  ellipse(220,250,140,400);
  ellipse(300,140,50,145);
  ellipse(280,370,50,160);
  pop();
  
  //mouse
  push();
  stroke("black");
  strokeWeight(5);
  fill("#4EE6FA");
  curve(-100,170,300,158,280,220,-100,170);
  arc(322,150,50,25,0,PI,OPEN);
  curve(-100,170,280,220,300,400,-100,170);
  pop();
  
  //eye
  push();
  fill("black");
  circle(190,120,17);
  pop();
  
  //back
  push();
  noStroke();
  fill("#3D5086");
  arc(140,220,100,50,-1.57,1.57,OPEN);
  arc(133,270,100,50,-1.57,1.57,OPEN);
  arc(118,320,100,50,-1.57,1.87,OPEN);
  
  
  //body
  push();
  stroke("black");
  fill("#FFE120");
  strokeWeight(5);
  curve(60,150,113,150,140,220,60,200);
  curve(60,200,141,220,100,350,0,300);
  curve(20,250,100,350,0,350,20,250);
  pop();

  
}