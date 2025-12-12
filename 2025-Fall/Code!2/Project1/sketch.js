let me;

function setup() {
  createCanvas(400, 400);
  me = new head(width/2, height/2);
  noLoop();
}

function draw() {
  background(220);
  me.draw();
}

class head {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(){
    push()
    translate(this.x, this.y)
    this.base_head();
    this.ears();
    this.face();
    this.eyes();
    this.nose();
    this.mouth();
    this.tooth();
    pop()
  }
  
  base_head() {
    noStroke();
    fill(32, 86, 110);
    ellipse(0, 0, 145, 115);
  }

  ear(x1, y1, x2, y2, x3, y3) {
    noStroke();
    fill(32, 86, 110);
    triangle(x1, y1, x2, y2, x3, y3);
  }
    
  ears() {
    noStroke();
    this.ear(-20, -10, -65, 0, -52, -92);
    this.ear(25, -10, 65, 0, 52, -92);
  }

  face() {
    fill(245, 232, 196);
    ellipse(0, 10, 130, 90)
  }

  eyes() {
    noFill();
    stroke(40, 60, 70);
    strokeWeight(3);
    arc(-30, 10, 26, 16, PI + 0.6, TWO_PI - 0.6);
    arc(30, 10, 26, 16, PI + 0.6, TWO_PI - 0.6);
  }
  
  nose() {
    noStroke();
    fill(40, 60, 70);
    triangle(-5, 20, 5, 20, 0, 25);
  }

  mouth() {
    noFill();
    stroke(40, 60, 70);
    strokeWeight(3);
    arc(0, 36, 34, 18, 0.15, PI - 0.15);
  }

  tooth() {
    noStroke();
    fill(255);
    triangle(-20, 40, -7, 45, -8, 30);
    triangle(20, 40, 7, 45, 8, 30);
  }
}
