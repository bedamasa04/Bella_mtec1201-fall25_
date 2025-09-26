function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(138,212,202);

  fill(121,196,59)
  stroke(81,135,49)
  quad(400,600,600,600,700,300,300,300)
  triangle(500,500,700,300,300,300)
  
  fill(181,49,64)
  stroke(107,27,35)
  strokeWeight(4)
  triangle(500,450,650,300,350,300) 

  fill(121,196,59)
  stroke(81,135,49)
  triangle(300,200,700,200,500,100)

  fill(121,196,59)
  stroke(121,196,59)
  rect(300,300,400,-100)

  fill(255)
  stroke(255)
  strokeWeight(3)
  ellipse(390,150,50,50)
  ellipse(610,150,50,50)
  
  fill(1)
  rect(370,145,40,10)
  rect(590,145,40,10)

  fill(1)
  stroke(1)
  strokeWeight(0)
  ellipse(390,150,20,25)
  ellipse(610,150,20,25)

  fill(171,207,54)
  stroke(131,158,41)
  strokeWeight(4)
  triangle(390,560,380,540,240,550)
  triangle(390,560,410,600,280,710)
  triangle(410,600,450,600,420,760)
  triangle(450,600,500,600,470,770)
  triangle(500,600,550,600,530,770)
  triangle(600,600,550,600,590,760)
  triangle(600,600,615,555,700,710)
  triangle(615,555,622,535,775,550)
}
