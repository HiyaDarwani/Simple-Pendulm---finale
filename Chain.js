class Chain{
    constructor(body1,pointB){
          //this.offsetX= offsetX
          //this.offsetY= offsetY

          var options ={ 
              bodyA:body1, 
              //bodyB:body2,
              pointB:pointB,
              length:500,
              stiffness:0.04
             }

        this.Chain = Constraint.create(options)
        World.add(world, this.Chain)
        this.bodyA = body1
        //this.bodyB = body2
        this.pointB = pointB
    }
    display(){
        var pointA = this.bodyA.position
        var pointB = this.pointB
        //console.log(pointB)
        strokeWeight(3)
        //var AnchorX = pointB.x + this.offsetX;
        //var AnchorY = pointB.y + this.offsetY;
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }

}