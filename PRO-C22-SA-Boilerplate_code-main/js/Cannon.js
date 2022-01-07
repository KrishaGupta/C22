class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.cannonImg = loadImage("assets/canon.png");
    this.cannon_Base = loadImage("assets/cannonBase.png");
  }
   
  display(){
   push();
   imageMode(CENTER);
    image(this.cannonImg, this.x,this.y,this.width, this.height, this.angle);

  pop();

  image(this.cannon_Base, 70,20,200,200);
  noFill();
  }
}
