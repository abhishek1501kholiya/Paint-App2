const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var ground2;
var ground3;

var stone ;
var slingshot;
var block1 , block2 , block3, block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,
block22 ;

var block23,block24,block25,block26,block27,block28,block29,block30,block31,block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42,block43;
var bg;
var score = 0;
function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(320,400,150,5);
     ground3 = new Ground(440,190,135,5);

    block1 = new Box(260,380,20,20);
    block2 = new Box(280,380,20,20);
    block3 = new Box(300,380,20,20);
    block4 = new Box(320,380,20,20);
    block5 = new Box(340,380,20,20);
    block6 = new Box(360,380,20,20);
    block7 = new Box(380,380,20,20);

    block8 = new Box(270,360,20,20);
    block9 = new Box(290,360,20,20);
    block10 = new Box(310,360,20,20);
    block11 = new Box(330,360,20,20);
    block12 = new Box(350,360,20,20);
    block13 = new Box(370,360,20,20);

    block14 = new Box(280,340,20,20);
    block15 = new Box(300,340,20,20);
    block16 = new Box(320,340,20,20);
    block17 = new Box(340,340,20,20);
    block18 = new Box(360,340,20,20);

    block19 = new Box(300,320,20,20);
    block20 = new Box(320,320,20,20);
  block21 = new Box(340,320,20,20);

    block22 = new Box(330,300,20,20);
  
// 2nd platform blocks 

block23 = new Box(420,180,20,20);
block24 = new Box(400,180,20,20);
block25 = new Box(380,180,20,20);;
block26 = new Box(440,180,20,20);
block27 = new Box(460,180,20,20);
block28 = new Box(480,180,20,20);
block29 = new Box(500,180,20,20);

block30 = new Box(420,170,20,20);
block31 = new Box(440,170,20,20);
block32 = new Box(460,170,20,20);
block33 = new Box(480,170,20,20);
block34 = new Box(500,170,20,20);
block35 = new Box(400,170,20,20);

block36 = new Box(440,150,20,20);
block37 = new Box(460,150,20,20);
block38 = new Box(480,150,20,20);
block39 = new Box(500,150,20,20);
block40 = new Box(420,150,20,20);

block41  = new Box(440,140,20,20);
block42  = new Box(460,140,20,20);
block43  = new Box(480,140,20,20);
//block35 = new Box(530,190,20,20);


//block27 = new Box(300,300,20,20);


    stone = new Bird(75,300);
    slingshot = new SlingShot(stone.body,{x:75,y:300})


    // platform = new Ground(150, 305, 300, 170);

   

    
}

function draw(){
  if(bg)
  background(bg);
    
    textSize(35);
  //  fill("white");
    text("score :"+ score,200,250);
   // background(backgroundImg);
    Engine.update(engine);
  //  strokeWeight(4);
 
    ground.display();
    ground2.display();
    ground3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();

    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();
   block21.display();

    block22.display();

    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();

    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
  block35.display();

  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();

  block41.display();
  block42.display();
  block43.display(); 

  block1.score();
  block2.score(); 
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();
  block32.score();
  block33.score();
  block34.score();
  block35.score();
  block36.score();
  block37.score();
  block38.score();
  block39.score();
  block40.score();
  block41.score();
  block42.score();
  block43.score();


  //  block23.display();



    stone.display();
    slingshot.display();
    changebackground();
    //log6.display();

}

function mouseDragged(){
   Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(stone.body);
  }
}
 async function changebackground(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var time = datetime.slice(11,13);
  console.log(time);

  if(time<=6 && time>=18){
    bg = 0;
  }else{
    bg = 255;
  }
}