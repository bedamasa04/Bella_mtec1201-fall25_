//Bella Martinez-Sager
//TITLE: STOP MATT
'USE THE MOUSE TO POINT AND CLICK'
'YOU NEED TO CLICK ON THE CANVAS TO START MUSIC'

'LATE FUNCTION DOESNT WORK FULLY BUT IT HAS AN INTERACTABLE ARRAY'
/*
LOADED FUNCTION COMES FROM THE CODING TRAIN
FLANNIGANABLE VIDEO HELPED ME FIGURE OUT HOW TO MAKE THE AUDIO ACTUALLY PLAY
MAKER MUSIC DOESN'T 
*/
//CODING TRAIN: https://www.youtube.com/watch?v=Pn1g1wjxl_0&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW
//FLANNIGANABLE: https://www.youtube.com/watch?v=uHNgkQsHLXQ&list=TLPQMTQxMTIwMjUqOePfPu06PQ&index=12

let state = "menu";
let threats = ["Too late.", "Should've been faster.", "You were too weak.", "Give up already.", "...", ".....", ".........", "You're still here?", "Fine.", "I'll give you one more chance.", "Use it wisely."];
let w = 255;
let b = 0;
let chance = 0;

//IMAGES
let matt;
let utopia;
let pointer;
let fist;
let fire;

//COLORS
let shirt;
let dye = 1;
let red;
let orange;
let yellow;
let lime;
let green;
let blue;
let cyan;
let pink;
let purple;
let brown;
let white;
let black;

//MUSIC
let Plaza;
let doom;
let maker;
let eraseMusic;
let credits;
let toolate;

function preload()
{//***************************************************************
matt = loadImage("images/WS_Matt.png");
pointer = loadImage("images/point.png");
fist = loadImage("images/fist.png");
utopia = loadImage("images/utopia.webp");
fire = loadImage("images/fire.png")
//***************************************************************
}

function setup()
 {//***************************************************************
  createCanvas(720, 480);
  red = color(219,59,55);
  orange = color(227,103,39);
  yellow = color(233,208,24);
  lime = color(187,235,64);
  green = color(36,109,27);
  cyan = color(129,213,233);
  blue = color(32,92,194);
  pink = color(227,91,135);
  purple = color(142,74,176);
  brown = color(133,69,41);
  white = color(240);
  black = color(30);
  shirt = [red, orange, yellow, lime, green, cyan, blue, pink, purple, brown, white, black]
  //noCursor();

  doom = loadSound("audio/Doom.mp3");
  Plaza = loadSound("audio/Plaza.mp3");
  doom = loadSound("audio/Doom.mp3");
  maker = loadSound("audio/Maker.mp3"); 
  eraseMusic = loadSound("audio/Parade.mp3");
  credits = loadSound("audio/Credits.mp3");
  toolate = loadSound("audio/late.mp3");
  //***************************************************************
}

function loaded()
{ //***************************************************************
   if (state === "menu")
 {
 doom.loop();
 doom.setVolume(0.05);
}
 else if (state === "miiChannel")
 {
  Plaza.loop();
 }
 else if (state === "editMii")
 {
  maker.loop();  
}
 else if (state === "eraseMii")
 {
  eraseMusic.loop();
}
 else if (state === "win")
 {
  credits.loop();
 }
 //***************************************************************
 }

function draw()
 {//***************************************************************
 if (state == "menu")
 {
  menu();
  image(pointer, mouseX, mouseY, pointer.width / 15, pointer.height / 15);
 }
 else if (state == "miiChannel")
 {
  miiChannel();
  //late();
 }
 else if (state == "editMii")
 {
  editMii();
  //late();
  image(pointer, mouseX, mouseY, pointer.width / 15, pointer.height / 15);
 }
 else if (state == "eraseMii")
 {
  eraseMii();
  //late();
  image(pointer, mouseX, mouseY, pointer.width / 15, pointer.height / 15);
 }
 else if (state == "win")
 {
  win();
 }

 
//mouse coordinates
 textSize(15)
strokeWeight(1)
stroke(0)
fill(0)
text(mouseX + "," + mouseY, 30, 20)
//***************************************************************
}

function menu()
{//***************************************************************
  background(10);
  image(fire, 0, 0, fire.width / 2, fire.height / 2);
  image(matt, -150, -30, matt.width * 2, matt.height * 1.25);
  textAlign(CENTER);
  textSize(58);//?
  strokeWeight(8);//?
  stroke(255, 43, 0);
  fill(255, 128, 0);
  text("YOU NEED TO STOP HIM", width / 2, 100);
  fill(220);
  stroke(0);
  strokeWeight(2);
  rect(0, 360, width, 120);
  fill(245);

  stroke(220);
  strokeWeight(5);
  rect(225, 380, 300, 80, 20, 20, 20, 20);
  stroke(0);
  strokeWeight(2);
  textAlign(LEFT);
  textSize(30);
  fill(black);
  text("Click to start", 290, 430);

  if (mouseX > 225 && mouseY > 380 && mouseX < 525 && mouseY < 460)
  {
    stroke(110);
  strokeWeight(5);
   fill(245);
    rect(215, 370, 320, 100, 20);
    stroke(0);
  strokeWeight(2);
    fill(black);
    textSize(40);
  text("Click to start", 270, 430);
  }
//***************************************************************
}

function miiChannel()
{//***************************************************************
  background(255);
  //CHECKERS
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

  //ICONS
  textAlign(LEFT);
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
ellipse(80,320,80,80);
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

mii(mouseX, mouseY);
image(fist, mouseX - 10, mouseY - 40, fist.width / 1.75, fist.height / 1.75);
//***************************************************************
}

function eraseMii()
{//***************************************************************
   background(255);

  //CHECKERS
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

  //TEXT BOX
  fill(25, 117, 120, 230);
  stroke(162, 194, 199);
  rect(25, 25, 670, 430, 50, 50, 50, 50);
  noFill;
  rect(30, 30, 660, 420, 50, 50, 50, 50);
  
  fill(231, 249, 255);
  stroke(220);
  textSize(30);
  textAlign(LEFT);
  text("Are you sure you want to", 200, 160);
  text("erase this Mii?", 200, 200);

  stroke(220);
  strokeWeight(5);
  rect(50, 350, 300, 80, 20, 20, 20, 20);
  stroke(110);
  textSize(40);
  text("Do not erase", 80, 400);
  stroke(220);
  rect(370, 350, 300, 80, 20, 20, 20, 20);
  stroke(110);
  text("Erase", 470, 400);

  if (mouseX > 50 && mouseY > 350 && mouseX < 330 && mouseY < 430)
  {
   rect(40, 340, 320, 100, 20, 20, 20, 20);
  stroke(110);
  textSize(50);
  text("Do not erase", 60, 400);
   }
 else if (mouseX > 350 && mouseY > 350 && mouseX < 670 && mouseY < 430)
 {
  stroke(110);
  textSize(50);
  rect(360, 340, 320, 100, 20, 20, 20, 20);
  text("Erase", 450, 400);
   }

//***************************************************************
}

function editMii()
{//***************************************************************
background(225, 245, 232);
stroke(100);
strokeWeight(4.5);
fill(225);
//TABS
rect(30, -10, 660, 110, 10);
//info
fill(25, 117, 120, 230);
rect(40, -10, 66, 90, 10);
fill(white);
stroke(white);
ellipse(73, 60, 25, 25);
stroke(25, 117, 120, 230);
point(78, 57);
point(68, 57);
strokeWeight(3);
curve(48, 45, 68, 64, 78, 64, 98, 45);
strokeWeight(4.5);
stroke(white);
rect(46, 20, 54, 15, 20);
triangle(70.5, 37, 72, 39, 73.5, 37);
stroke(25, 117, 120, 230);
strokeWeight(3);
ellipse(55, 27, 10, 10);
strokeWeight(4.5);
point(68, 27);
point(76, 27);
point(84, 27);
point(92, 27);

 for(let a=111.75; a<=614; a+=71.75)
  {
    fill(170);
    stroke(100);
    strokeWeight(4.5);
    rect(a, -10, 66, 90, 10);
  }

//height (111.75, -10, 66, 90, 10)
fill(white);
stroke(white);
ellipse(144.75, 27, 15, 15);
triangle(144.75, 36, 142, 40, 147.5, 40);
rect(140.5, 43, 8.75, 15);
rect(140.5, 58, .75, 15);
rect(149, 58, -.75, 15);

//head (183.5, -10, 66, 90, 10)
fill(170);
stroke(white);
line(216, 74, 200, 55);
line(216.5, 74, 233, 55);
ellipse(216.5, 43, 40);
strokeWeight(1);
stroke(170);
triangle(216.5, 70, 230, 55, 204, 55);
strokeWeight(5);
stroke(white);
point(210, 46);
point(223, 46);
//curve(48, 45, 68, 64, 78, 64, 98, 45);
strokeWeight(3.5);
curve(200, 35, 210, 54, 223, 54, 233, 35);

//hair (255.25, -10, 66, 90, 10)
strokeWeight(4.5);
stroke(white);
rect(271.75,  24, 33, 50, 45);
curve(200, 55, 271.75, 50, 295, 26, 290, -10);
curve(295, -10, 295, 26, 304, 42, 350, 70);

//eyebrows (327, -10, 66, 90, 10)

//eyes (398.75, -10, 66, 90, 10)

//nose (470.5, -10, 66, 90, 10)

//mouth (542.25, -10, 66, 90, 10)

//details (614, -10, 66, 90, 10)

//SAVE BUTTON
rect(40, 380, 160, 65, 10);
textAlign(CENTER)
textSize(30);
fill(white);
stroke(white);
strokeWeight(2);
text("Save", 120, 420);
if (mouseX > 40 && mouseY > 380 && mouseX < 200 && mouseY < 445)
{
  fill(170);
  stroke(100);
  strokeWeight(4.5);
  rect(30, 370, 180, 85, 10);
  fill(white);
  stroke(white);
  textSize(40);
  strokeWeight(2);
  text("Save", 120, 425);
}

//SETTINGS
strokeWeight(4.5);
stroke(100);
fill(225);
rect(240, 130, 450, 380, 10); //main box

fill(190);
stroke(190);
rect(255, 145, 420, 72.5, 10); //nickname
stroke(110);
rect(270, 181.25, 172.5, 30, 10); 

stroke(190);
rect(255, 232.5, 202.5, 72.5, 10);
stroke(110);
rect(305.625, 269, 101.25, 28, 10);

stroke(190);
rect(472.5, 232.5, 202.5, 72.5, 10);
stroke(110);
rect(523.125, 269, 101.25, 28, 10);

stroke(190);
rect(255, 320, 202.5, 72.5, 10);
stroke(110);

fill(shirt[dye]);
rect(336.5, 345, 40, 40, 10);

stroke(190);
fill(190);
rect(472.5, 320, 202.5, 72.5, 10);
stroke(110);

stroke(190);
rect(255, 407.5, 420, 80, 10);
stroke(110);

mii(108, 195);
//***************************************************************
}

/*function late()
{//***************************************************************
  if (millis() > 180000)
{
  state = "late"
  
  //toolate.loop();
  
image(matt, -660, -700, matt.width * 4, matt.width * 3);
fill(255,0,10);
stroke(0);
textAlign(CENTER)
text(threats[chance], width / 2, height / 2)

 if (millis() > 180000 && chance == threats.length)
    {
      state = "menu"
     toolate.stop();
     doom.loop();
    }
}
//***************************************************************
}*/

function mii(x, y)
{//***************************************************************
  //BODY
fill(90);
stroke(90);
ellipse(x, y + 100, 28, 39);
fill(shirt[dye]);
stroke(shirt[dye]);
rect(x - 14, y + 100, 28, -60);

strokeWeight(8);
line(x - 14, y + 80, x - 50, y + 60);
line(x + 14, y + 80, x + 50, y + 90);
ellipse(x + 50, y + 90, 10,10);
ellipse(x - 50, y + 60, 10, 10);
stroke(90);
line(x + 7, y + 110, x + 30, y + 150);
line(x - 7, y + 110, x - 30, y + 150);
fill(90);
strokeWeight(3);
ellipse(x + 30, y + 150, 20,10);
ellipse(x - 30, y + 150, 20, 10);

//HEAD
fill(107, 54, 32);
stroke(107, 54, 32);
rect(x - 32.5, y + 10,65,40);
ellipse(x, y + 10,65,45);
ellipse(x, y + 50,65,45);

//EYES
fill(w);
stroke(0);
strokeWeight(2);
ellipse(x - 16.25, y + 30,15,10);
ellipse(x + 16.25, y + 30,15,10);

fill(0);
ellipse(x - 16.25, y + 29,5,5);
ellipse(x + 16.25, y + 29,5,5);
strokeWeight(4);
curve(x - 23.75, y + 40, x - 23.75, y + 28, x - 8.75, y + 28, x - 8.75, y + 40);
curve(x + 23.75, y + 40, x + 23.75, y + 28, x + 8.75, y + 28, x + 8.75, y + 40);

//BEARD
stroke(94, 51, 29);
fill(107, 54, 32);
strokeWeight(7);
curve(x - 27, y, x - 26, y + 61, x + 26, y + 61, x + 27, y);

stroke(0);
fill(0);
strokeWeight(4);
ellipse(x, y + 65, 30, 35);

fill(107, 54, 32);
stroke(107, 54, 32);
strokeWeight(0);
ellipse(x, y + 60, 20, 20);

fill(b);
triangle(x, y + 67, x - 1.5, y + 70, x + 1.5, y + 70);
triangle(x - 3, y + 67, x - 1.5, y + 70, x - 6, y + 70);
triangle(x - 3, y + 67, x - 1.5, y + 70, x - 6, y + 70);
triangle(x + 3, y + 67, x + 1.5, y + 70, x + 6, y + 70);

//nose
fill(94,51,29);
stroke(b);
strokeWeight(2);
curve(x - 16, y, x - 7, y + 45, x + 7, y + 45, x + 16, y);
//***************************************************************
}

function win()
{
image(utopia, 0, 0, utopia.width / 1.5, utopia.height)
}

function mousePressed()
{//***************************************************************
  if (state == "menu")
  {
    doom.loop();
    doom.setVolume(0.05);

    if (mouseX > 225 && mouseY > 370 && mouseX < 525 && mouseY < 450)
    {
      state = "miiChannel"
      doom.stop();
      Plaza.loop();
      Plaza.setVolume(0.1);
    }
  }
  else if (state == "miiChannel")
  { 
    if (mouseX > 40 && mouseY > 120 && mouseX < 120 && mouseY < 200)
    {
      state = "editMii"
      Plaza.stop();
      maker.loop(); 
      maker.setVolume(0.1);
    }
    else if (mouseX > 40 && mouseY > 280 && mouseX < 120 && mouseY < 360)
    {
      state = "eraseMii"
      Plaza.stop();
      eraseMusic.loop();
      eraseMusic.setVolume(0.1);
    }
  }
  else if (state == "editMii")
  { rect(336.5, 345, 40, 40, 10);
    
    if (mouseX > 324 && mouseY > 343 && mouseX < 364 && mouseY < 379)
    {
      dye = dye + 1;
      if (dye == shirt.length){
      dye = 0
      }
    } 
    if (mouseX > 40 && mouseY > 380 && mouseX < 200 && mouseY < 445)
    {
      state = "miiChannel"
      maker.stop(); 
      Plaza.loop();
      Plaza.setVolume(0.1);
    }
  }
  else if (state == "eraseMii")
  {
    if (mouseX > 50 && mouseY > 350 && mouseX < 350 && mouseY < 430)
    {
      state = "miiChannel"
      eraseMusic.stop();
      Plaza.loop();
      Plaza.setVolume(0.1);
    }
    else if (mouseX > 370 && mouseY > 350 && mouseX < 670 && mouseY < 430)
    {
      state = "win"
      eraseMusic.stop();
      credits.loop();
      credits.setVolume(0.1);
    }
  }
  else if (state == "win")
  {
    state = "menu"
    credits.stop();
    doom.loop();
  }
  /*else if (state == "late")
  {
    chance = chance + 1;
  }*/
}
//***************************************************************
