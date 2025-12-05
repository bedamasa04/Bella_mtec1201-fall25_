let carX = 50
let carY = 50
let lap = ['LAP 1', 'LAP 2', 'LAP 3', 'LAP 4', 'LAP 5']

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(0);
  text()
  for (let x = -50; x < width; x = x + 130){ // road markings
    stroke(38, 102, 173);
    fill(155, 207, 207);
    strokeWeight(7);
    rect(x, 180, 75, 20, 5);
    strokeWeight(1);
    stroke(250);
    fill(250)
    rect(x + 5, 187, 65, 7);
    stroke(38, 102, 173);
    fill(155, 207, 207);
    strokeWeight(7);
    rect(x, 520, 75, 20, 5);
    strokeWeight(1);
    stroke(250);
    fill(250)
    rect(x + 5, 527, 65, 7);
  }
   for (let a = 5; a < height; a = a + 345){
    stroke(38, 102, 173);
    fill(155, 207, 207);
    strokeWeight(7);
    rect(-10, a, 1290, 20);
    strokeWeight(1);
    stroke(250);
    fill(250)
    rect(-10, a + 2, 1290, 7);
  }
  car();

  for (let y = 0; y < height; y = y + 7){ //crt lines
    stroke(0);
    strokeWeight(4);
    line(0, y, 1280, y);
  }
 
}

function car(){
  fill(255, 232, 255);
  stroke(242, 101, 209);
  strokeWeight(10);
  rect(carX, carY, 70, 20);
  rect(carX + 5, carY - 15, 12, 12);
  rect(carX + 42, carY - 15, 12, 12);
  rect(carX + 5, carY + 25, 12, 12);
  rect(carX + 42, carY + 25, 12, 12);
  fill(255, 232, 255);
  stroke(255, 232, 255);
  strokeWeight(4);
  rect(carX, carY, 70, 20);
  rect(carX + 5, carY - 15, 12, 12);
  rect(carX + 42, carY - 15, 12, 12);
  rect(carX + 5, carY + 20, 12, 12);
  rect(carX + 42, carY + 20, 12, 12);
}
