class dustbin
{
    constructor(x,y)
    {
     var option =  {
         isStatic:true
        }
     
 	this.body = Bodies.rectangle(x,y, 200,20 , option );
	 World.add(world, this.body);
     this.image=loadImage("images/dustbingreen.png");
    }
    display()
    {
        var pos=this.body.position;
        push();
	    image(this.image,pos.x,pos.y-180,200,200);
	    pop();

    }
}