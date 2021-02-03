class Fly
{
   constructor(body1, point1)
   {
    var options = 
    {
       bodyA:body1,
       pointB:point1,
       stiffness:0.1,
       length:300
    }
    this.pointB=point1
    this.fly=Constraint.create(options);
    World.add(world,this.fly);
   }
   display()
   {
      var p1=this.fly.bodyA.position;
      var p2=this.pointB;
      push()
      strokeWeight(5);
     // line(p1.x,p1.y,p2.x,p2.y);
      pop();
   }
}
