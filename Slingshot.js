class Slingshot {
    constructor(object1,pointB){
        var options={
            bodyA:object1,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
    this.slingshot = Matter.Constraint.create(options);
        World.add(world,this.slingshot);
      }
    display(){
        if(this.slingshot.bodyA!= null){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            push();
            strokeWeight(10); 
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
            
    }
    fly(){
        this.slingshot.bodyA = null;
    }
}






