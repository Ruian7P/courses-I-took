let ballX;
let ballY;
let speedX;
let speedY;
let count;
let boardX;
let status;
let r;
let g;
let b;
let a;

function setup() {
  createCanvas(600, 400);
  ballX = random(0,600);
  ballY = random(100,400);
  speedX = 5;
  speedY = -5;
  count = 0;
  status = false;
}

function draw() {
  noStroke();
  fill("white");
  background(220);
  
  //start
  rect(0,0,70,30,10);
  
  //board1
  noStroke();
  fill("#795548")
  boardX= mouseX;
  rect(boardX, 390,90,10);
  text("Miss:"+count, 17,20)
  
  
  //ball
  noStroke();
  fill("white");
  fill(r,g,b,a);
  ellipse(ballX,ballY,35,35);
  ballX = ballX +speedX;
  ballY = ballY -speedY;
  if (ballX + 35 >= width) {
      speedX = -speedX;
      ballX = width - 35;
    } 
  else if (ballX <= 0) {
      speedX = -speedX;
      x = 0;
    }

  if (ballY >= height) {
      speedY = -speedY;
      y = height - 35;
    } 
  else if (ballY <= 0) {
      speedY = -speedY;
      ballY = 0;
    }
  
  if (ballY<=405 && ballY>=390)
    {
      if (ballX> boardX+100 || ballX <boardX)
        {
          status = true;
        }
    }
  if (ballY<390)
    {
      if(status == true)
      {
        count++;
        status = false;
      }
    }
  
}

function mousePressed()
{
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(200,255);
  if (abs(speedX) <= 19)
  {
    if(speedX>0)
    {
      if(speedY>0)
      {
        speedX = speedX+1;
        speedY = speedY+1;
      }
      else{
        speedX = speedX+1;
        speedY = speedY-1;
      }
    }
    if(speedY>0)
      {
        speedX = speedX-1;
        speedY = speedY+1;
      }
    else{
      speedX = speedX-1;
      speedY = speedY-1;
    }
  }
  
}