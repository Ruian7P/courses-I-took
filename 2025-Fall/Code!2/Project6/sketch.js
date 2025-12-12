function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution = 10;
let colorGrid;
let colorIndex = 0;
let speed = 10;

let running = false;

let everAliveGrid;

function setup() {
  createCanvas(1000, 1000);
  frameRate(speed);
  cols = width / resolution;
  rows = height / resolution;

  grid = make2DArray(cols, rows);
  colorGrid = make2DArray(cols, rows);
  everAliveGrid = make2DArray(cols, rows);
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0;        
      colorGrid[i][j] = -1; 
      everAliveGrid[i][j] = 0;
    }
  }
}

function draw() {
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        if (colorGrid[i][j] == 0) fill("red");
        else if (colorGrid[i][j] == 1) fill("green");
        else if (colorGrid[i][j] == 2) fill("blue");
        stroke(0);
        rect(x, y, resolution - 1, resolution - 1);
      }
      else if (grid[i][j] == 0 && everAliveGrid[i][j] == 1){
        fill(255);
        stroke(0);
        rect(x, y, resolution - 1, resolution -1);
      }
    }
  }
  
  if (!running) {
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Press ENTER to start", width/2, height - 15);
    textSize(24);
    text("Game Instruction:", 105, 25);
    text("Click and Drag your mouse to create lives", 233, 50);
    
    return;
  }
  

  let next = make2DArray(cols, rows);
  let nextColorGrid = make2DArray(cols, rows);

  // Compute next based on grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      // Count live neighbors!
      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
        colorIndex = (colorIndex + 1) % 3;
        nextColorGrid[i][j] = colorIndex;
        everAliveGrid[i][j] = 1;        

      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
        nextColorGrid[i][j] = -1;
      } else {
        next[i][j] = state;
        nextColorGrid[i][j] = colorGrid[i][j]
      }

    }
  }

  grid = next;
  colorGrid = nextColorGrid


}


function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}


function mousePressed() {
  if (mouseX < 0 || mouseX >= width || mouseY < 0 || mouseY >= height) return;

  let i = floor(mouseX / resolution);
  let j = floor(mouseY / resolution);

  if (i >= 0 && i < cols && j >= 0 && j < rows) {
    grid[i][j] = 1;
    colorGrid[i][j] = 0;
    everAliveGrid[i][j] = 1;
  }
}

function mouseDragged() {
  if (mouseX < 0 || mouseX >= width || mouseY < 0 || mouseY >= height) return;

  let i = floor(mouseX / resolution);
  let j = floor(mouseY / resolution);

  if (i >= 0 && i < cols && j >= 0 && j < rows) {
    if (grid[i][j] == 0) {
      grid[i][j] = 1;
      colorGrid[i][j] = 0;
      everAliveGrid[i][j] = 1;
    }
  }

}

function keyPressed() {
  if (keyCode === ENTER) {
    running = true;
  }
}