class Box{
  constructor(x, y, width, height, angle) {
      var options = {
       isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/wood1.png");
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){

      
      var angle = this.body.angle;
      if(this.body.speed<3.5){
      push();
      console.log(this.body.speed);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility -5;
       tint(255,this.visibility);
       image(this.image,this.body.position.x,this.body.position.y,20,20);
       pop()
      }
      console.log(this.visibility);
    }
    score (){
      if(this.visibility<0 && this.visibility>-1000){
        score++;
      }
    }
    

    
}
//class Box extends BaseClass {
  //constructor(x, y, width, height){
    //super(x,y,width,height);
   // this.image = loadImage("sprites/wood1.png");
 // }

//};
