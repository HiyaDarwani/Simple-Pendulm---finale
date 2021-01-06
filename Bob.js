class Bob{
    constructor(x, y, radius){
        var options ={
            isStatic:false,
            restitution:1,
            friction:0.1,
            density:0.1
        }
        this.body = Bodies.circle(x, y, radius, options)
        World.add(world, this.body)
        this.radius = radius
       
    }
    display(){
        ellipseMode(RADIUS)
        fill("Cyan")
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
        
    }
}
