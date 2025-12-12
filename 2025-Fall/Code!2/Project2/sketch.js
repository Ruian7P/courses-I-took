let particles = [];
let firework;

function setup() {
  createCanvas(600, 400);
}

function preload() {
  firework = loadSound('fireworks.mp3');
}

function draw() {
  background(0, 20);
  for (let i =0; i<particles.length;i++) {
    particles[i].move();
    particles[i].display();
  }
}

function mousePressed() {
  firework.play();
  num_particle = random(5, 10)
  for (let i = 0; i < num_particle; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

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

  move() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display() {
    noStroke();
    fill(this.r,this.g,this.b,this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }
}