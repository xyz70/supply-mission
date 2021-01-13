var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var man, manImage;
var girl, girlImage;
var child, childImage;
var bg, bgImage;
var bag, bagBody,  bagImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	manImage = loadImage("man.png");
	girlImage   = loadImage("girl.jpg");
	childImage  = loadImage("child.jpg");
	bgImage = loadImage("bg.jpg");
	bagImage = loadImage("bag.png");

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	bg = createSprite(300, 280, 10, 10);
	bg.addImage(bgImage);
	bg.scale = 2.3;
	
	man = createSprite(260, 500, 10, 10);
	man.addImage(manImage);
	man.scale = 0.4;

	girl = createSprite(80, 490, 10 , 10);
	girl.addImage(girlImage);
	girl.scale = 0.3;

	child = createSprite(650, 500, 10, 10);
	child.addImage(childImage);
	child.scale = 0.7;

bag = createSprite(width/2, 200, 10, 10);
bag.addImage(bagImage);
bag.scale = 0.1;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.8

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:false});  
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	//boxPosition=width/2-100
 	//boxY=610;


 	//boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	//boxleftSprite.shapeColor=color(255,0,0);

 	//boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	//World.add(world, boxLeftBody);

 	//boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	//boxBase.shapeColor=color(255,0,0);

 	//boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	//World.add(world, boxBottomBody);

 	//boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	//boxleftSprite.shapeColor=color(255,0,0);

 	//boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	//World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 

  helicopterSprite.velocityX = 0;

  if(keyDown("right")){
helicopterSprite.velocityX = 4;

  }

  if(keyDown("left")){
	helicopterSprite.velocityX = -4;
	
	  }

	 
	packageBody.position.x = helicopterSprite.position.x; 
	
	  

  drawSprites();
  
  
 
}
