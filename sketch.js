
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var polygon1
var ground1,ground2,ground3,ground4
var slingshot1
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	polygon1=new Polygon(400,400,50)
    slingshot1=new SlingShot(polygon1.body,{x:100,y:350});
	ground1= new Ground(550,270,150,20)
	ground2= new Ground(500,650,1000,20)
	ground3= new Ground(500,450,200,20)
	ground4= new Ground(700,400,150,20)
    box1=new Box(500,420,30,40)
	box2=new Box(530,420,30,40)
	box3=new Box(470,420,30,40)
	box4=new Box(500,390,30,40)
	box5=new Box(530,390,30,40)
	box6=new Box(470,390,30,40)
	box7=new Box(500,350,30,40)
	box8=new Box(440,420,30,40)
	box9=new Box(560,420,30,40)
	box10=new Box(500,290,30,40)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();
  
  ground3.display();
  
  
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
 
  polygon1.display();
  slingshot1.display();
}

function mouseDragged() {

	Matter.Body.setPosition(polygon1.body, { x: mouseX, y: mouseY });
	
	}
	
	function mouseReleased() {
	
	slingshot1.fly();
	
	}

	function keyPressed(){

		if(keyCode === 32){
	
			slingshot1.attach(polygon1.body);
		}
	
	
	}