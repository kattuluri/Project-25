class drop{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("garbagecan.png")
        World.add(world,this.body);
    }
    display(){
       var p = this.body.position
       imageMode(CENTER)
       strokeWeight(4)
       stroke("brown")
       fill(255);
       image(this.image,p.x,p.y,this.width,this.height)
    }
}