
class Paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1
			}	
		this.radius=radius;
		this.image=loadImage("images/paper.png");
		this.body=Bodies.circle(x, y, radius, options)
		World.add(world, this.body);
	}
	display()
	{
			
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER);
            fill("white");
			imageMode(RADIUS);
			image(this.image, 0,0,this.radius, this.radius)
			pop()
			
	}

}