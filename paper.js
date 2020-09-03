class paper{
    constructor(x,y){
        var options = {
          isStatic:false,
          restitution : 0.3,
          friction : 0.2,
          density : 1.2
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 40;
        this.image = loadImage("paper.png")
        World.add(world,this.body);
    }
    display(){
    var p = this.body.position
    push()
    translate(p.x,p.y)
    imageMode(CENTER)
    strokeWeight(4)
    stroke("green")
    fill(255);
    image(this.image,0,0,this.radius)
    pop()
   }
}
