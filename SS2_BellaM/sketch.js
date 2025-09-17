//Bella M
// 




let w = 255
let b = 0
let n = (+2);
let threats = ['Do it.', 'Kill him.', 'Erase him.'];
let grow = .0001;


function setup() {
  createCanvas(720, 480);
  
}

function draw() {
  background(220);
  
  
  //START OF CHECKERS
  fill(w);
  stroke(w);
  rect(0,0,72,48);
  rect(0,96,72,48);
  rect(0,192,72,48);
  rect(0,288,72,48);
  rect(0,384,72,48);

  rect(72,48,72,48);
  rect(72,144,72,48);
  rect(72,240,72,48);
  rect(72,336,72,48);
  rect(72,432,72,48);

  rect(144,0,72,48);
  rect(144,96,72,48);
  rect(144,192,72,48);
  rect(144,288,72,48);
  rect(144,384,72,48);

  rect(216,48,72,48);
  rect(216,144,72,48);
  rect(216,240,72,48);
  rect(216,336,72,48);
  rect(216,432,72,48);

  rect(288,0,72,48);
  rect(288,96,72,48);
  rect(288,192,72,48);
  rect(288,288,72,48);
  rect(288,384,72,48);

  rect(360,48,72,48);
  rect(360,144,72,48);
  rect(360,240,72,48);
  rect(360,336,72,48);
  rect(360,432,72,48);

  rect(432,0,72,48);
  rect(432,96,72,48);
  rect(432,192,72,48);
  rect(432,288,72,48);
  rect(432,384,72,48);

  rect(504,48,72,48);
  rect(504,144,72,48);
  rect(504,240,72,48);
  rect(504,336,72,48);
  rect(504,432,72,48);

  rect(576,0,72,48);
  rect(576,96,72,48);
  rect(576,192,72,48);
  rect(576,288,72,48);
  rect(576,384,72,48);

  rect(648,48,72,48);
  rect(648,144,72,48);
  rect(648,240,72,48);
  rect(648,336,72,48);
  rect(648,432,72,48);



//ICONS
fill(100);
stroke(50);
strokeWeight(4);
ellipse(80,160,80,80);
fill(150);
stroke(200);
ellipse(80,160,50,50);
fill(220);
stroke(110);
textSize(25);
text('Edit   Mii', 52, 170);


fill(100);
stroke(50);
ellipse(80,320,grow, grow);

grow += grow

strokeWeight(8);
stroke(180);
line(80,300,80,290);
stroke(80);
line(80,350,80,340);
stroke(140);
line(60,320,50,320);
stroke(140);
line(100,320,110,320);
stroke(160);
line(93,307,100,300);
stroke(120);
line(96,337,102,342);
stroke(160);
line(67,307,60,300);
stroke(120);
line(65,337,60,342);
stroke(110);
fill(220);
strokeWeight(4);
text('Erase   Mii', 52, 330);

fill(150);
stroke(120);
strokeWeight(4);
ellipse(640,80,80,80);
fill(210);
stroke(200);
triangle(620,70,630,95,610,95);
triangle(640,70,630,95,650,95);
triangle(660,70,650,95,670,95);
ellipse(640,70,15,15);
ellipse(660,70,15,15);
ellipse(620,70,15,15);
stroke(110);
fill(220);
strokeWeight(4);
text('Send  to', 570, 70);
text('Mii  Parade', 540, 100);



  //BODY
fill(90);
stroke(90);
ellipse(mouseX, mouseY + 100,28,39);
fill(227,103,39);
stroke(227,103,39);
rect(mouseX - 14, mouseY + 100,28,-60);

strokeWeight(8);
line(mouseX - 14, mouseY + 80, mouseX - 50, mouseY + 60);
line(mouseX + 14, mouseY + 80, mouseX + 50, mouseY + 90);
ellipse(mouseX + 50, mouseY + 90, 10,10);
ellipse(mouseX - 50, mouseY + 60, 10, 10);
stroke(90);
line(mouseX + 7, mouseY + 110, mouseX + 30, mouseY + 150);
line(mouseX - 7, mouseY + 110, mouseX - 30, mouseY + 150);
fill(90);
strokeWeight(3);
ellipse(mouseX + 30, mouseY + 150, 20,10);
ellipse(mouseX - 30, mouseY + 150, 20, 10);

//HEAD
fill(107,54,32);
stroke(107,54,32);
rect(mouseX - 32.5,mouseY + 10,65,40);
ellipse(mouseX,mouseY + 10,65,45);
ellipse(mouseX,mouseY + 50,65,45);


//EYES
fill(w);
stroke(0);
strokeWeight(2);
ellipse(mouseX - 16.25, mouseY + 30,15,10);
ellipse(mouseX + 16.25, mouseY + 30,15,10);

fill(0);
ellipse(mouseX - 16.25, mouseY + 29,5,5);
ellipse(mouseX + 16.25, mouseY + 29,5,5);
strokeWeight(4);
curve(mouseX - 23.75, mouseY + 40, mouseX - 23.75, mouseY + 28, mouseX - 8.75, mouseY + 28, mouseX - 8.75, mouseY + 40);
curve(mouseX + 23.75, mouseY + 40, mouseX + 23.75, mouseY + 28, mouseX + 8.75, mouseY + 28, mouseX + 8.75, mouseY + 40);


//BEARD
stroke(94,51,29);
fill(107,54,32);
strokeWeight(7);
curve(mouseX - 27, mouseY, mouseX - 26, mouseY + 61, mouseX + 26, mouseY + 61, mouseX + 27, mouseY);

stroke(0);
fill(0);
strokeWeight(4);
ellipse(mouseX, mouseY + 65,30,35);

fill(107,54,32);
stroke(107,54,32);
strokeWeight(0);
ellipse(mouseX, mouseY + 60,20,20);

fill(b);
triangle(mouseX, mouseY + 67, mouseX - 1.5, mouseY + 70, mouseX + 1.5, mouseY + 70);
triangle(mouseX - 3, mouseY + 67, mouseX - 1.5, mouseY + 70, mouseX - 6, mouseY + 70);
triangle(mouseX - 3, mouseY + 67, mouseX - 1.5, mouseY + 70, mouseX - 6, mouseY + 70);
triangle(mouseX + 3, mouseY + 67, mouseX + 1.5, mouseY + 70, mouseX + 6, mouseY + 70);



//nose
fill(94,51,29);
stroke(b);
strokeWeight(2);
//triangle(mouseX, mouseY + 55, mouseX - 7, mouseY + 45, mouseX + 7, mouseY + 45)
curve(mouseX - 16, mouseY, mouseX - 7, mouseY + 45, mouseX + 7, mouseY + 45, mouseX + 16, mouseY);



}

function mousePressed ()
{

print(random(threats));


//THIS IS WHAT CAUSE MY UNDULATING BACKGROUND I DONT KNOW WHY IT HAPPENED
//I JUST WANTED THE ELLIPSE TO GROW BUT THE CHECKERS STARTED MOVING

/*
fill(100);
stroke(50);
ellipse(80, 320 ,80 + 50, 80 + n);
strokeWeight(8);
stroke(180);
line(80,300,80,290);
stroke(80);
line(80,350,80,340);
stroke(140);
line(60,320,50,320);
stroke(140);
line(100,320,110,320);
stroke(160);
line(93,307,100,300);
stroke(120);
line(96,337,102,342);
stroke(160);
line(67,307,60,300);
stroke(120);
line(65,337,60,342);
stroke(110);
fill(220);
strokeWeight(4);
text('Erase   Mii', 52, 330);


*/

}
