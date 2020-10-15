
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,350,800,10)
	paper = new Paper(200,300,20);
	dustbin = new Dustbin(550,340,20,200);
	//dustbin2 = new Dustbin(450,300,50,10);
	//dustbin3 = new Dustbin(500,300,1,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();
  //dustbin2.display();
  //dustbin3.display();
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:45,y:-45}) ;
	}    
}
