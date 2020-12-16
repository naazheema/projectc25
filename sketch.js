
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,ground,bin;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	bin = new dustbin(1200,640); 
	paper = new Paper(100,640,65);
	ground = new Ground(width/2,670,width,20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);

	
}


function draw() {
	rectMode(CENTER);
	background("grey");
	Engine.update(engine);

 	paper.display(); 
	ground.display();
	bin.display();

	

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:850,y:-700});
	  
	}
}


