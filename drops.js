class Drops {
    constructor(x,y){
        var options = {
            restitution:0.1,

        }
        
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain)
        //load Image for BestMan
        
    }
updateY(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
    }

    }

   showDrops(){
        var pos = this.rain.position;
        ellipseMode(RADIUS);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}
