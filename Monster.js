class Monster {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          density:1,
          frictionAir:1
      }
      this.x=x;
      this.y=y;
      this.radius = radius;
      this.image=loadImage("images/Monster-01.png");
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
  }