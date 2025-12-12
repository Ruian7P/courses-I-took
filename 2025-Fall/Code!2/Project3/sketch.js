let count;
let ball;
let board;
let status;
let wall_left;
let wall_right;
let wall_up;

function setup() {
  createCanvas(600, 400);
  
  // ball
  ball = createSprite();
  ball.x = 300;
  ball.y = 30;
  ball.direction=160;
  ball.speed = 10;
  ball.d = 35;
  ball.color = 'pink';
  ball.stroke = 'red';
  
  // board
  board = createSprite();
  board.w = 90;
  board.h = 10;
  board.color = '#795548';
  
  // walls
  wall_left = createSprite();
  wall_left.x = 0;
  wall_left.w = 10;
  wall_left.h = 400;
  wall_left.physics = KIN;
  wall_left.color = 'red';
  
  wall_right = createSprite();
  wall_right.x = 600;
  wall_right.w = 10;
  wall_right.h = 400;
  wall_right.physics = KIN;
  wall_right.color = 'red';
  
  wall_up = createSprite();
  wall_up.y = 0;
  wall_up.w = 600;
  wall_up.h = 10;
  wall_up.physics = KIN;
  wall_up.color = 'red';
  
  count = 0;
  status = false;
}

function draw() {
  noStroke();
  fill("white");
  background(220);
  
  //start
  rect(10,10,70,30,10);
  fill("#795548")
  text("Score:" + count, 27, 27)
  
  //board1
  board.x = mouseX;
  board.y = 390;
  board.physics = KIN;
  
  if (ball.collided(wall_left)){
    ball.speed = 10;
  }
  if (ball.collided(wall_right)){
    ball.speed = 10;
  }
  if (ball.collided(wall_up)){
    ball.speed = 10;
  }
  
  if (ball.collided(board)){
    ball.speed = 10;
    count ++;
  }
  
}

function mousePressed()
{
  ball?.remove?.();
  board?.remove?.();
  wall_left?.remove?.();
  wall_right?.remove?.();
  wall_up?.remove?.();
  setup();
}
