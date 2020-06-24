const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drawing = [];
var cursorimage;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(600,600);
    cursorimage = loadImage("Sprites/drwaing.jpg");
    engine = Engine.create();
    world = engine.world;



}

function draw(){
  background(0);
    if(mouseIsPressed){
      cursor(cursorimage);
      var point = {
        x: mouseX,
        y: mouseY
      }
      drawing.push(point);
    }
beginShape();
stroke(255);
strokeWeight(4);
noFill();
    for(var x = 0 ; x<drawing.length ; x++){
      vertex(drawing[x].x,drawing[x].y)
    }
endShape();
    
   
    Engine.update(engine);

  //  block23.display();




}




 //async function changebackground(){
 // var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //var responseJSON = await response.json();
  //var datetime = responseJSON.datetime;
  //var time = datetime.slice(11,13);
  //console.log(time);

//  if(time<=6 && time>=18){
 // bg = 0;
 // }else{
   // bg = 255;
  //}
//}

