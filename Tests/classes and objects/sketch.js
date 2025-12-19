

function setup() {
  createCanvas(400, 400);
  car = new Car(width, );
}

function draw() {
  background(0);
  car.move();
  car.show();


}

class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move(){
    this.x = this.x + random(- 5, 5)
    this.y = this.y + random(- 5, 5)
  }
  show(){
    stroke(255);
    strokeWeight(4);
    rect(this.x, this.y, 30, 20)
  }
}
