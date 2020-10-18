const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,log1,log2,log3,log4,bird,pig1,pig2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,370,50,50);
    box2 = new Box(350,370,50,50);
    ground = new Ground(200,height,400,20)
    pig1 = new Pig(270,370);
    log1 = new Log(270,310,220,PI/2);
    bird = new Bird(100,100);
    box3 = new Box(200,280,50,50);
    box4 = new Box(350,280,50,50);
    pig2 = new Pig(270,280);
    log2 = new Log(270,220,250,PI/2);
 box5 = new Box(270,200,50,50);
 log3 = new Log(310,200,130,-PI/5);
 log4 = new Log(230,200,130,PI/5);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
}