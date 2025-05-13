let ballX;
let ballY;
let ballX2;
let ballY2;
let speedX;
let speedY;
let speedX2;
let speedY2;
let count;
let boardX;
let r;
let g;
let b;
let a;
let boardlength;

function setup() {
  createCanvas(600, 400);
  ballX = random(0,600);
  ballY = random(0,200);
  ballX2 = random(0,600);
  ballY2 = random(0,200);
  speedX = 5;
  speedY = -5;
  speedX2 = 5;
  speedY2 = -5;
  count = 0;
  status = false;
}

function draw() {
  noStroke();
  fill("white");
  background(220);
  drawScoreBoard();
  drawBall();
  if (abs(speedX)>7)
    {
      drawBall2();
    }
  drawBoard();
}
  
function drawScoreBoard()
{
  fill("white");
  noStroke();
  rect(0,0,70,30,10);
  fill("#795548")
  text("Miss:"+count, 17,20);
}
  
function drawBoard()
{
  noStroke();
  fill("#795548")
  boardX= mouseX;
  if (count<10)
  {
    boardlength = 90;
  }
  else
  {
    boardlength = 150;
  }
  rect(boardX-boardlength/2, 390,boardlength,10);
}  

function drawBall()
{
  noStroke();
  fill("white");
  fill(r,g,b,a);
  ellipse(ballX,ballY,35,35);
  ballX = ballX +speedX;
  ballY = ballY -speedY;
  ballReflection();
}

function drawBall2()
{
  noStroke();
  fill("white");
  fill(r,g,b,a);
  ellipse(ballX2,ballY2,35,35);
  ballX2 = ballX2 +speedX2;
  ballY2 = ballY2 -speedY2;
  ballReflection2();
}

function ballReflection()
{
  if (ballX + 35 >= width) {
      speedX = -speedX+random(-0.1,0.1);
      ballX = width - 35;
    } 
  else if (ballX <= 0) {
      speedX = -speedX+random(-0.1,0.1);
      x=0;
    }

  if (ballY >= height) {
      speedY = -speedY+random(-0.1,0.1);
      y = height-35;
      if (ballX > mouseX+boardlength/2+5 || ballX <mouseX-boardlength/2-5)
      {
        count ++;
      }
    } 
    
  else if (ballY <= 0) {
      speedY = -speedY+random(-0.1,0.1);
      y=0;
    }
}

function ballReflection2()
{
  if (ballX2 + 35 >= width) {
      speedX2 = -speedX2+random(-0.1,0.1);
      ballX2 = width - 35;
    } 
  else if (ballX2 <= 0) {
      speedX2 = -speedX2+random(-0.1,0.1);
      x=0;
    }

  if (ballY2 >= height) {
      speedY2 = -speedY2+random(-0.1,0.1);
      y = height - 35;
      if (ballX2 > mouseX+boardlength/2+5 || ballX2 <mouseX - boardlength/2-5)
      {
        count ++;
      }
    } 
  else if (ballY2 <= 0) {
      speedY2 = -speedY2+random(-0.1,0.1);
      y =0;
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