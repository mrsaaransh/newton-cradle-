class Rope{
    constructor(body1,body2, offsetX, offsetY){
        var options = {
            bodyA: body1, 
            bodyB :body2, 
            pointB: {x: offsetX, y:offsetY}
        }
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
        this.offsetX = offsetX
        this.offsetY = offsetY
    }

    display(){
        var bobAnchor = this.rope.bodyA.position
        var roofanchor =this.rope.bodyB.position
        line(bobAnchor.x, bobAnchor.y, roofanchor.x+this.offsetX, roofanchor.y+this.offsetY)
    }
}