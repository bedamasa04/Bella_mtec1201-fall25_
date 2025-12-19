//Bella Martinez-Sager
//"Late Evening Driver"
//WASD to move

'This is super unfinished sorry I was too ambitious'
'I could not figure out how to do collision physics I tried so many things and it did not work'

//background scroll comes from this
//https://editor.p5js.org/chjno/sketches/ByZlypKWM


let state = "gameStart";


//CAR OBJECTS
let leftlane = [298, 227, 52, 123];
let rightlane = [471, 399, 576, 648]
let idk = [1, 2, 3, 4]
let player;
let ppls = [];
let pprs = [];

let countdown = ['3', '2', '1', 'GO']
let index = [0]

//BACKGROUND
let street;
let mph = 2;
let johnI = 0; //i did not know what to call these variables
let johnII;
let fin;

//AUDIO
let count;
let crash;
let drive;
let finishline;
let go;
let music;

function preload()
{
street = loadImage("images/background.png")
}

function setup() 
{
  createCanvas(1280, 720);
  player = new carPk();
  fin = new finish();


  for (let i = 0; i < 3; i++)
  {
     ppls[i] = new carPpL;
  }
  for (let i = 0; i < 3; i++)
  {
     pprs[i] = new carPpR();
  }

  johnII = width;
  //score += score + 10;
  
music = loadSound("audio/240 Bits Per Mile draft 2.mp3", loaded);
crash = loadSound("audio/crash.wav", loaded);
drive = loadSound("audio/drive2.wav", loaded);
count = loadSound("audio/countdown.wav", loaded);
go = loadSound("audio/GO3.wav", loaded);
finishline = loadSound("audio/score.wav", loaded)
}

function loaded()
{//***************************************************************
    // if (state === "gameStart")
    // {
  
    //  }
    
    music.loop();
    music.setVolume(0.09);
    drive.loop();
    drive.setVolume(0.02);

//***************************************************************
}

function draw() 
{//***************************************************************
background(0);


  if (state == "gameStart")
  {
    gameStart();
    player.show();

    if (index > 3)
    {
      state = "gamePlay"
    }
  }
  else if (state == "gamePlay")
  {
    gamePlay();

    for (let i = 0; i < ppls.length; i++) //cars going left
  {
    ppls[i].move();
    ppls[i].show();

    if (this.carPplX = width / 2)
    {
    ppls[i].move();
    ppls[i].show();
    }
  }
    for (let i = 0; i < pprs.length; i++) //cars going right
  {
    pprs[i].move();
    pprs[i].show();

    if (this.carPprX = width / 3)
    {
    pprs[i].move();
    pprs[i].show();
    }
  }

//  if (millis() > 80000)
//   {
//     chkr.move();
//     chkr.show();
//   }
    // fin.show();
    // fin.move();

    player.move();
    player.show();

  if (millis > 30000)
  {
    fin.show();
    fin.move();
  }
  }
  else if (state == "gameOver")
  {
    gameOver();
    music.stop();
    finishline.play();

    if (keyIsDown(65) || keyIsDown(68) || keyIsDown(87) || keyIsDown(83))
    {
    state = "gameStart"
    }
  }

  for (let y = 0; y < height; y = y + 7)
  { //crt lines
    stroke(0);
    strokeWeight(4);
    line(0, y, 1280, y);
  }

textSize(15)
strokeWeight(1)
stroke(255)
fill(255)
text(mouseX + "," + mouseY, 20, 50)
//***************************************************************
}


class carPk
{//***************************************************************
  constructor()
  { 
    this.carPkX = 100
    this.carPkY = 400

    this.angle = this.angle + 10
  }

  move()
  {
    if (keyIsDown(65) && this.carPkX > 7){
    this.carPkX -= 5;
    }
   if (keyIsDown(68) && this.carPkX < 1212){
    this.carPkX += 7;
    }
    if (keyIsDown(87) && this.carPkY > 50){
    this.carPkY -= 7;
    }
    if (keyIsDown(83) && this.carPkY < 670){
    this.carPkY += 10;
    }
  }

//   spin()
//   {
//     if(this.hit = true)
//     {
//       translate(this.carPkX, this.carPkY)
//       rotate(this.angle)
//     }
//   }

//   intersects(other)
//   {
//     if (this.carPkX - this.carPprX <= 70)
//   {
//     this.hit = true;
//     return true;
//   }
//   else if (this.carPplX - this.carPkX <= 70)
//   {
//     this.hit = true;
//     return true;
//   }
//   else if (this.carPplY - this.carPkY <= 70)
//   {
//     this.hit = true;
//     return true;
//   }
//   else if (this.carPprY - this.carPkY <= 40)
//   {
//     this.hit = true;
//     return true;
//   }
//   if (this.carPkY - this.carPprY <= 40)
//   {
//     this.hit = true;
//     return true;
//   }
//   if (this.carPkY - this.carPplY <= 40)
//   {
//     this.hit = true;
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// }
  // this.lftsd = dist(this.carPkX, this.carPplX);
  // this.lfttp = dist(this.carPkY, this.carPplY);
  // this.rghtsd = dist(this.carPkX, this.carPprX);
  // this.rghttp = dist(this.carPkY, this.carPprY);

  // if (this.lftsd < 70 && this.lfttp < 55)
  // {
  //   this.hit = true;
  //   return true;
  // }
  // else if (this.rghtsd < 70 && this.rghttp < 55)
  // {
  //   this.hit = true;
  //   return true;
  // }
  // }

  show()
  {
  fill(255, 232, 255);
  stroke(242, 101, 209);
  strokeWeight(10);
  rect(this.carPkX, this.carPkY, 70, 20); //outline
  rect(this.carPkX + 5, this.carPkY - 15, 12, 12);
  rect(this.carPkX + 42, this.carPkY - 15, 12, 12);
  rect(this.carPkX + 5, this.carPkY + 25, 12, 12);
  rect(this.carPkX + 42, this.carPkY + 25, 12, 12);
  fill(255, 232, 255);
  stroke(255, 232, 255);
  strokeWeight(4);
  rect(this.carPkX, this.carPkY, 70, 20); //white
  rect(this.carPkX + 5, this.carPkY - 15, 12, 12);
  rect(this.carPkX + 42, this.carPkY - 15, 12, 12);
  rect(this.carPkX + 5, this.carPkY + 20, 12, 12);
  rect(this.carPkX + 42, this.carPkY + 20, 12, 12);

  // push()
  // if (this.intersects = true)
  // {
  //     rectMode(CENTER)
  //     translate(this.carPkX, this.carPkY)
  //     rotate(this.angle)
  // }
  // pop()

  }
//***************************************************************
}

class carPpR
{//***************************************************************
  constructor()
  {
    this.carPprX = 0
    this.carPprY = random(leftlane)
  }

  hits(player)
  {
    if (this.carPprY - player.carPkY < 40 || player.carPkY - this.carPprY < 40)
    {
      if (player.carPkX - this.carPprX < 70)
      {
      return true;
      }
    return true;
    }
    return false;
  }

  move()
  {
      this.carPprX += 15;
      if (this.carPprX > width)
      {
        this.carPprX = -width
        this.carPprY = random(leftlane)
      }
  }

  show()
  {
  fill(255, 232, 255);
  stroke(165, 37, 230);
  strokeWeight(10);
  rect(this.carPprX, this.carPprY, 70, 20); //outline
  rect(this.carPprX + 5, this.carPprY - 15, 12, 12);
  rect(this.carPprX + 42, this.carPprY - 15, 12, 12);
  rect(this.carPprX + 5, this.carPprY + 25, 12, 12);
  rect(this.carPprX + 42, this.carPprY + 25, 12, 12);
  fill(255, 232, 255);
  stroke(255, 232, 255);
  strokeWeight(4);
  rect(this.carPprX, this.carPprY, 70, 20); //white
  rect(this.carPprX + 5, this.carPprY - 15, 12, 12);
  rect(this.carPprX + 42, this.carPprY - 15, 12, 12);
  rect(this.carPprX + 5, this.carPprY + 20, 12, 12);
  rect(this.carPprX + 42, this.carPprY + 20, 12, 12);
  }

//***************************************************************
}

class carPpL
{//***************************************************************
  constructor()
  { 
    this.carPplX = width
    this.carPplY = random(rightlane)

  }

  move()
  {
    this.carPplX -= 15;
    if (this.carPplX < 0)
    {
      this.carPplX = width
      this.carPplY = random(rightlane)
    }
  }

  show()
  {
    fill(255, 232, 255);
    stroke(165, 37, 230);
    strokeWeight(10);
    rect(this.carPplX, this.carPplY, 70, 20); //outline
    rect(this.carPplX + 53, this.carPplY - 15, 12, 12);
    rect(this.carPplX + 16, this.carPplY - 15, 12, 12);
   rect(this.carPplX + 53, this.carPplY + 25, 12, 12);
    rect(this.carPplX + 16, this.carPplY + 25, 12, 12);
    fill(255, 232, 255);
    stroke(255, 232, 255);
    strokeWeight(4);
    rect(this.carPplX, this.carPplY, 70, 20); //white
    rect(this.carPplX + 53, this.carPplY - 15, 12, 12);
    rect(this.carPplX + 16, this.carPplY - 15, 12, 12);
    rect(this.carPplX + 53, this.carPplY + 20, 12, 12);
    rect(this.carPplX + 16, this.carPplY + 20, 12, 12);
  }
//***************************************************************
}

// function intersects()
// {
// //   let lftsd = dist(this.carPkX, this.carPplX);
// //   let lfttp = dist(this.carPkY, this.carPplY);
// //   let rghtsd = dist(this.carPkX, this.carPprX);
// //   let rghttp = dist(this.carPkY, this.carPprY);

//   if (this.carPkX - this.carPprX <= 70)
//   {
//     return true;
//   }
//   else if (this.carPplX - this.carPkX <= 70)
//   {
//     return true;
//   }
//   else if (this.carPplY - this.carPkY <= 70)
//   {
//     return true;
//   }
//   else if (this.carPprY - this.carPkY <= 40)
//   {
//     return true;
//   }
//   if (this.carPkY - this.carPprY <= 40)
//   {
//     return true;
//   }
//   if (this.carPkY - this.carPplY <= 40)
//   {
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// } 


function road() //this was just to get the background design that i screenshotted
{//***************************************************************
  for (let x = -50; x < width; x = x + 130){ //dotted lines
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
   for (let a = 5; a < height; a = a + 345) // solid lines
    {
    stroke(38, 102, 173);
    fill(155, 207, 207);
    strokeWeight(7);
    rect(-10, a, 1290, 20);
    strokeWeight(1);
    stroke(250);
    fill(250);
    rect(-10, a + 2, 1290, 7);
  }
  //***************************************************************
}

function gameStart()
{//***************************************************************
  image(street, johnI, 0, width, height);
  textAlign(CENTER);
  stroke(255);
  textSize(40);
  text('W', 80, 610);
  text('A  S  D', 80, 650);
  if (frameCount % 60 == 0 && index < countdown.length) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    index ++;
  }
  if (index == 3){
    stroke(52, 235, 147);
  }
  else if (index < countdown.length){
    stroke(165, 37, 230);
  }
  strokeWeight(10);
  textSize(500);
  text(countdown[index], width / 2, height * .75);
  //***************************************************************
}

function gamePlay()
{ //***************************************************************
  if (mph < 10)
  {
    mph += .8
  }
  image(street, johnI, 0, width, height);
  image(street, johnII, 0, width, height);

 johnI -= mph;
 johnII -= mph;

 if (johnI < -width)
 {
  johnI = width;
 }

 if (johnII < -width)
 {
  johnII = width;
 }
 //***************************************************************
}

function gameOver()
{
  image(street, johnI, 0, width, height);

  strokeWeight(10);
  textSize(500);
  textAlign(CENTER);
  stroke(245, 63, 63);
  text("GAME OVER", width / 2, height / 2);
  textSize(100);
  text("score:", width / 2, height / 2 + 300) ;

}


class finish 
{
  constructor()
  {
    this.linex = width
    this.liney = 0
    
  }

  move()
  {
    this.linex -= 10;
  }

  show()
  {
    
    for (this.linex = width; this.linex <= this.linex + 60; this.linex += 20)
    {
      for (this.liney = 0; this.liney <= height; this.liney += 20)
      {
        noStroke;
        fill(255);
        rect(this.linex, this.liney, 10, 10)
      }
    }
     for (this.linex = width + 10; this.linex <= this.linex + 60; this.linex += 20)
    {
      for (this.liney = 0; this.liney <= height; this.liney += 20)
      {
        noStroke;
        fill(255);
        rect(this.linex, this.liney, 10, 10)
      }
    }  
  }
}
