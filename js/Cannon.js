class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
   this.cannonImage = loadImage("./assets/canon.png")
   this.cannonbaseImage = loadImage("./assets/cannonBase.png")
  }
  show(){
    push()
    imageMode(CENTER)
   image(this.cannonImage,this.x,this.y,this.width,this.height)
    pop()
    image(this.cannonbaseImage,70,40,200,200)
  }
}
