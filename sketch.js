
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var piso;
var piso_opciones={
	isStati:true
}
var paredi;
var paredd;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var opciones ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}

	
	


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

	ball = Bodies.circle( 200, 190, 20, opciones);
  World.add (world,ball);

  //piso =new Barreras(200,390,400,20);

   /*piso = new Barreras( 400, 600, 800, 20, piso_opciones);
   World.add (world, piso);*/

   piso = new Barreras(width/2, 670,width, 20);

   paredi = new Barreras(500, 610, 20, 100);
   paredd = new Barreras(650, 610, 20, 100);

	Engine.run(engine);
  
 }

 function keyPressed() {

	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,{x:0, y:0}, {x:40, y:15.5} )
 }

 }


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();
 
  ellipse(ball.position.x,ball.position.y,20);
  piso.show()
  paredi.show()
  paredd.show()
 
}



