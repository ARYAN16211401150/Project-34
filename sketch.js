const Engine=Matter.Engine;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var world,engine;
var ground1;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17;
var hero;
var fly1;
var monster;
var backgroundImg;

function preload()
{
  backgroundImg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(2700,800);
  engine=Engine.create();
  world=engine.world;

  ground1=new Ground(400,600,1500,20);

  b1=new Block(860,500,50,70);
  b2=new Block(860,400,50,70);
  b3=new Block(860,300,50,70);
  b4=new Block(860,200,50,70);
  b5=new Block(860,100,50,70);
  b6=new Block(860,0,50,70);
  b7=new Block(800,500,50,70);
  b8=new Block(800,400,50,70);
  b9=new Block(800,300,50,70);
  b10=new Block(800,200,50,70);
  b11=new Block(740,500,50,70);
  b12=new Block(740,400,50,70);
  b13=new Block(740,300,50,70);
  b14=new Block(740,200,50,70);
  b15=new Block(740,100,50,70);
  b16=new Block(740,0,50,70);
  b17=new Block(740,-100,50,70);
  
  hero=new Hero(200,200,250);

  fly1=new Fly(hero.body,{x:20,y:200});

  monster=new Monster(1084,300,200);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();

  hero.display();

  fly1.display();

  monster.display();

}
function mouseDragged()
{
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}