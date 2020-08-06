const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var gameState = 'onSling'; 

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(950,200,50,50);
   box2 = new Box(700,200,50,50);
   box3 = new Box(750,200,50,50);
   box4 = new Box(800,200,50,50);
   box5 = new Box(850,200,50,50);
   box6 = new Box(900,100,50,50);
   box7 = new Box(900,100,50,50);
   box8 = new Box(750,100,50,50);
   box9 = new Box(800,100,50,50);
   box10 = new Box(850,200,50,50);
   box11 = new Box(800,100,50,50);
   box12= new Box(850,100,50,50);
   box13= new Box(820,0,50,50);
  
    ground = new Ground(818,335,400,20)
    player = new Player(200,100,50,50);
    slingshot = new Slingshot(player.body,{x:200,y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
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
    box11.display();
    box12.display();
    box13.display();
    ground.display();
    slingshot.display();
    player.display();
    text(mouseX+" "+mouseY,50,50);
}



function mouseReleased(){
slingshot.fly();
}

function mouseDragged(){
    if(gameState === "onSling"){
    Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
    }
}
function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}
