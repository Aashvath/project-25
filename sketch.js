const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var raindrop1;

      function setup() {
        var canvas = createCanvas(800,400);
        engine = Engine.create();
          world = engine.world;
          raindrop1 = new Raindrop(200,0,10,10)
      }

      function draw() {
        background(255,255,255);  
        Engine.update(engine);
        raindrop1.display();
        drawSprites();
      }