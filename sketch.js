const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone;
var rubber;
var sand_1,sand_2,sand_4,sand_5,sand_6;
var iron;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,680,800,20);
	hammer = new Hammer(400,400);
	stone = new Stone(400,400);
	rubber = new Rubber(300,400,5);
	sand_1 = new Sand(500,500,10);
	sand_2 = new Sand(510,500,10);
	sand_3 = new Sand(520,500,10);
	sand_4 = new Sand(530,500,10);
	sand_5 = new Sand(540,500,10);
	sand_6 = new Sand(550,500,10);
	iron = new Iron(200,200);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand_1.display();
  sand_2.display();
  sand_3.display();
  sand_4.display();
  sand_5.display();
  sand_6.display();
  iron.display();
  drawSprites();

 
}



