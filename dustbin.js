class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.leftbody = Bodies.rectangle(x-100,y-50,20,100,options);

      this.rightbody = Bodies.rectangle(x+100,y-50,20,100,options);

      this.basebody = Bodies.rectangle(x,y,200,20,options);

     
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
      World.add(world, this.basebody);
    }
    display(){
      var leftpos =this.leftbody.position;
      var rightpos =this.rightbody.position;
      var basepos =this.basebody.position;
      rectMode(CENTER);
      fill("brown");
      rect(rightpos.x, rightpos.y, 20, 100);
      rect(leftpos.x, leftpos.y, 20, 100);
      rect(basepos.x, basepos.y,200, 20);
    }
  };