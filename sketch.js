var drop1, drop2, drop3, paperBall, drop1Body, drop2Body, drop3Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;
	
	drop1 = new drop(630,610,80,110);
    paperBall = new paper(400,580);
    
    groundSprite=createSprite(600,680,800,20);
	groundSprite.shapeColor="tan"; 
	
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
   rectMode(CENTER);
   background("white");
   paperBall.display();
   drop1.display();
   drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	   Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:90,y:-780})
	   Body.setStatic(paperBall,true)
	}
}


