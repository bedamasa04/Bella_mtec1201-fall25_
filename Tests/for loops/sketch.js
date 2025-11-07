function setup() {
  createCanvas(720, 480);
}

function draw() {
  background(255);
  
  for(let x=0; x<=648; x+=144)
  {
    for(let y=0; y<=432; y+=96)
    {
      fill(225);
      stroke(225);
      rect(x,y,72,48);
    }
  }
  for(let x=72; x<=648; x+=144)
  {
    for(let y=48; y<=432; y+=96)
    {
      fill(225);
      stroke(225);
      rect(x,y,72,48);
    }
  }
  for(let a=111.75; a<=614; a+=71.75)
  {
    fill(170);
    stroke(100);
    strokeWeight(4.5);
    rect(a, -10, 66, 90, 10);
  }
  
}
