const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options = {
		restitution: 0.8,
		friction:1,
		density : 0.2
	  }

	rope1 =new rope(bob1,roof,-80,0);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(200,50,10,ball_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(250,50,10,ball_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(300,50,10,ball_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(350,50,10,ball_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(400,50,10,ball_options);
	World.add(world,bob5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  Engine.update(engine);
  //call display() to show ropes here
 rope1.show()

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);

  drawSprites(); 

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
