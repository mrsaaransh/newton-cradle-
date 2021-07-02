class Bob{
    constructor(x,y,r){

        var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
        this.body = Bodies.circle(x,y,r/2, options)
        World.add(world, this.body);
        this.x = x;
        this.y=y;
        this.r =r;


    }
    display(){
        var bobPos=this.body.position;
        push()
        translate(bobPos.x, bobPos.y);
        fill(255,0,255)
        ellipse(0,0,this.r, this.r);
        pop()
    }
}