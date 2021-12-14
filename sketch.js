
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var myengine;
var myworld
var ball;
var ground;
var wall1;
var wall2;

// function preload()
// {
	
// }

function setup() {
	createCanvas(1000,600);

	myengine = Engine.create();
	myworld = myengine.world;
	
	//Create the Bodies Here.
	ground=new Ground(500,450,1100,25)
	wall1=new Ground(600,340,15,200)
	wall2=new Ground(800,340,15,200)

	var balloptions={
		isStatic:false,
		restitution:1,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(200,50,12,balloptions)
	World.add(myworld,ball)

	Engine.run(myengine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  Engine.update(myengine);
  background(0);
  
  ground.display();
  wall1.display();
  wall2.display();

  fill("white")
  ellipse(ball.position.x,ball.position.y,12)
  
  drawSprites();
}


function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(ball,ball.position.x,{x:10,y:-20})
	}
}
  




