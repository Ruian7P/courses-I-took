//Author: Haojie Cai
//Code! Final Assignment 7

//Initial variables and arrays
let ballX;
let ballY;
let speedX;
let speedY;
let count;
let boardX;
let r;
let g;
let b;
let a;
let boardlength;
let increament;
let acc;
let particles = [];
let transparency;
let mode;

//set up
function setup() {
  createCanvas(900, 600);
  count = 0;
  status = false;
  transparency = 90;
  mode = 1;
  //create balls
  ball1 = new Ball(random(0,600), random(0,200));
  ball2 = new Ball(random(0,600), random(0,200));
  ball3 = new Ball(random(0,600), random(0,200));
  increament =0;
}

//draw
function draw() {
  noStroke();
  fill("white");
  //draw background for different mode
  if (mode ==0)
    {
      background(0,transparency);
    }
  else
    {
      background(0);
    }
  //draw the boards
  drawModeBoard();
  drawScoreBoard();
  drawBoard();
  //draw the balls
  ball1.drawBall();
  ball2.drawBall();
  ball3.drawBall();
  
  //draw falling particle effect
  for (let i =0; i<particles.length;i++) {
    particles[i].move();
    particles[i].display();
  }
}
  
//scoreBoard
function drawScoreBoard()
{
  fill("white");
  noStroke();
  rect(0,0,70,30,10);
  fill("#795548")
  text("Miss:"+count, 17,20);
}

//drawModeBoard
function drawModeBoard()
{
  fill("white");
  noStroke();
  rect(830,0,70,30,10);
  fill("#795548");
  text("MODE",850,20);
}

//draw board
function drawBoard()
{
  noStroke();
  fill("#795548")
  boardX= mouseX;
  //change the length of board if miss many times
  if (count<10)
  {
    boardlength = 90;
  }
  else
  {
    boardlength = 150;
  }
  rect(boardX-boardlength/2, height-10,boardlength,10);
}  

//ball class
class Ball{
  constructor(X, Y){
    this.ballX = X;
    this.ballY = Y;
    this.ballSize = 35;
    this.speedX=random(2,5);
    this.speedY=random(2,5);
    this.limit = 0;
  }
  
  //draw the ball
  drawBall(){
    noStroke();
    fill("white");
    fill(r,g,b,a);
    ellipse(this.ballX,this.ballY,35,35);
    this.ballX = this.ballX +this.speedX;
    this.ballY = this.ballY -this.speedY;
    this.ballReflection();
    this.speedIncrease();
  }
  
  //ball reflection function
  ballReflection(){
    //reflect from the right border
    if (this.ballX >= width) {
      this.speedX = -this.speedX+random(-0.1,0.1);
      this.ballX = width;
    } 
    //reflect from the left border
    else if (this.ballX <= 0) {
      this.speedX = -this.speedX+random(-0.1,0.1);
      this.ballX=0;
      }
    //reflect from the bottom border
    if (this.ballY >= height-12) {
      this.speedY = -this.speedY+random(-0.1,0.1);
      this.ballY = height-12;
      
      //At bottom, if the balls don't touch the board
      if (this.ballX > mouseX+boardlength/2+5 || this.ballX <mouseX-boardlength/2-5)
      {
        count ++;
        particles.push(new Particle(mouseX, mouseY));
        particles.push(new Particle(mouseX, mouseY));
      }
    } 
    //reflect from the top bottom
    else if (this.ballY <= 0) {
      this.speedY = -this.speedY+random(-0.1,0.1);
      this.ballY=0;
    }
  }
  
  //increase speed function
  speedIncrease()
  {
    //control the speed increases only once when click the mouse
    if(increament>this.limit)
    {
      //set the speed increament randomly
      acc = random(0,1);
      if (abs(this.speedX) <= 19)
      {
        if(this.speedX>0)
        {
          if(this.speedY>0)
          {
            this.speedX = this.speedX+acc;
            this.speedY = this.speedY+acc;
          }
          else{
            this.speedX = this.speedX+acc;
            this.speedY = this.speedY-acc;
          }
      }
      if(this.speedY>0)
      {
        this.speedX = this.speedX-acc;
        this.speedY = this.speedY+acc;
      }
      else{
        this.speedX = this.speedX-acc;
        this.speedY = this.speedY-acc;
      }
      }
      this.limit ++;
  }
  }
}

//when mouse pressed
function mousePressed()
{
  //assign a random color
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(200,255);
  //inform to increase speed one time
  increament = increament +1;
  //change the mode when click mode board
  if (mouseX>=830 && mouseX <= 900 && mouseY >=0 && mouseY <=30)
    {
      if (mode == 1)
        {
          mode =0;
        }
      else
        {
          mode =1;
        }
    }
  if (transparency >= 20)
    {
      transparency -=10;
    }
}

//Particle class
class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0.05);
    this.lifespan = 255;
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255);
  }
  //move the particle
  move() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
  }
  //display the particle
  display() {
    noStroke();
    fill(this.r,this.g,this.b,this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }
}