class rope{
	constructor(body1,body2,pointA,pointB)
	{
      this.pointA = pointA
      this.pointB = pointB



  var options={
		 bodyA:body1,
		 bodyB:body2,
		pointB :{x:this.pointA,y:this.pointB},
    length:100,
    stiffness:0.1



		 
	  }
		
	  rope = Matter.Constraint.create(options)({
     
      	})
      World.add(world,rope);

   show()
   {
  

   var pointA=this.rope.bodyA.position;
   var pointB = this.bodyB.position;

   push();
   rectMode(CENTER);
   strokeWeight(2)
   line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
   pop();

   }
   


    


}
}