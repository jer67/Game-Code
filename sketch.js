//create an empty array called balls
let median = [];
let d;


function setup() {
  	createCanvas(500, 400);
    d = new Dashes (250,10, 6.5);
}

function draw(){
	background(176, 196, 222);
  d.drawDash();
  d.moveDash();

  if (frameCount % 25 == 0) {
      let  b = new Dashes(250,10,6.5);
      median.push(b);
      console.log(median); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < median.length; i++) {
	 	      median[i].drawDash();
       	  median[i].moveDash();

	  }




}



// make the paddle and attach it to the mouse

//ball class from which to create new balls with similar properties.
class Dashes {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    		this.y = y;

        	this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawDash(){
    		stroke("yellow");
        strokeWeight(8);
    		fill("yellow");
line(this.x,this.y,this.x,this.y+30)
	}

	//update the location of the ball, so it moves across the screen
	moveDash(){
		this.y = this.y+ this.speed;


	}

	//if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)


}
