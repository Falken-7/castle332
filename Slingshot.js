class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.pointB = pointB

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
        gameState = "launched";
    }
    display(){
        
        //image(this.sling1,120,290);
        //mage(this.sling2,170,120);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
           
            //stroke(48,22,8);
            if(pointA.x < 220) {
                //strokeWeight(7);
               
               rect(pointA.x-300,320,20,20);
           
            
           
            
            pop();
        }
    }
    
}}
