let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(video, {outputStride:8, quantBytes:4}, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
  });
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function mousePressed(){
  console.log(JSON.stringify(poses))
}

function draw() {
  image(video, 0, 0, width, height);
  strokeWeight(2);

  if (poses.length > 0) {
    const pose = poses[0].pose;

    fill("red");
    const nose = pose.nose;
    ellipse(nose.x, nose.y, 50, 50);

    fill(255, 215, 0);
    const rightEye = pose.rightEye;
    drawClownEye(rightEye.x, rightEye.y)

    fill(255, 215, 0);
    const leftEye = pose.leftEye;
    drawClownEye(leftEye.x, leftEye.y)
    
    eyeDist = nose.y - rightEye.y
    mouthX = (leftEye.x + rightEye.x) / 2;
    mouthY = nose.y + eyeDist;

    drawClownMouth(mouthX, mouthY, 0.5);
  }
}

function drawClownEye(x, y) {
  push();
  translate(x, y);

  noStroke();
  fill(255);
  ellipse(0, 0, 40, 55);

  noFill();
  stroke(0, 120, 255);
  strokeWeight(4);
  ellipse(0, 0, 40, 55);

  noStroke();
  fill(0);
  ellipse(0, 0, 13, 25);

  pop();
}

function drawClownMouth(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  noFill();
  stroke(255, 0, 0);
  strokeWeight(10);

  arc(0, 0, 120, 80, 0, PI);

  noStroke();
  fill(255, 0, 0);
  ellipse(-60, 0, 16, 16);
  ellipse( 60, 0, 16, 16);

  pop();
}
