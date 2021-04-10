const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubbles
var plain



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubbles=new Rubber(600,200,20)
    rubbles2=new Rubber(500,200,20)
    rubbles3=new Rubber(400,200,20)

    


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubbles.display();
    rubbles2.display();
    rubbles3.display();
    
 
}