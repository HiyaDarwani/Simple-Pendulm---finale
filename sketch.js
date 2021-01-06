
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(100,300,50)
	bobObject2= new Bob(200,300,50)
	bobObject3= new Bob(300,300,50)
	bobObject4= new Bob(400,300,50)
	bobObject5= new Bob(500,300,50)
    roof= new Roof(400, 50, 650, 20)
	rope1 = new Chain(bobObject1.body, {x:200, y:50})
	rope2 = new Chain(bobObject2.body, {x:300, y:50})
	rope3 = new Chain(bobObject3.body, {x:400, y:50})
	rope4 = new Chain(bobObject4.body, {x:500, y:50})
	rope5 = new Chain(bobObject5.body, {x:600, y:50})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,63);
  
  drawSprites();

 bobObject1.display()
 bobObject2.display()
 bobObject3.display()
 bobObject4.display()
 bobObject5.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
 roof.display()

}
function keyPressed(){
	if (keyCode === UP_ARROW){
   Matter.Body.applyForce(bobObject1.body,bobObject1.position, {x:-50,y:-50})
	}
}


