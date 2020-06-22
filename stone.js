class Bird extends BaseClass {
  constructor(x,y){
  super(x,y,50,50);
  this.image = loadImage("sprites/See_All_Polygon_tgratb.jpg");
  }

display() {
 // this.body.position.x = mouseX;
//   this.body.position.y = mouseY;
    super.display();
  }
}

//class Stone{
 // constructor (){
   // this.body = Bodies.pol
  //}
//}






//class Bird{
  //constructor(x, y, width, height, angle) {
    //  var options = {
      // isStatic:false,
        ///  'restitution':0.3,
          //'friction':0.5,
          //'density':1.2
      //}
      //this.body = Bodies.rectangle(x, y, width, height, options);
      //this.width = width;
     // this.height = height;
      //this.image = loadImage("sprites/bird.png");
      //World.add(world, this.body);
    //}
    //display(){
      //var angle = this.body.angle;
      //push();
      //translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
      //imageMode(CENTER);
      //image(this.image, 100, 300, this.width, this.height);
    //pop();
    //}
//}
