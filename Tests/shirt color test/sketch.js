let shirt;
let red 
let blue 
let green 
let shirtcolor;


function setup() {
  createCanvas(400, 400);
 red = color(255, 0, 0)
 blue = color(0, 0, 255)
 green = color(0, 255, 0)
 shirt = [red,blue,green]
}

function draw() {
  background(220);
fill(shirt)
rect(50,50,50,50)
rect(150,150,50,50)
 
}

function mousePressed(){
  fill(random(shirt))
  } 

  /*
  function setup() {
  createCanvas(400, 400);
 red = color(255, 0, 0)
 blue = color(0, 0, 255)
 green = color(0, 255, 0)
 shirt = random([red,blue,green])
}

function draw() {
  background(220);
fill(shirt)
rect(50,50,50,50)
rect(150,150,50,50)
 
}

function mousePressed(){
  fill(shirt)
  } 
  */