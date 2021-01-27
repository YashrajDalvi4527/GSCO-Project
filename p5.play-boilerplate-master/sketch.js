var car , wall ;
var speed , weight


function setup() {
  createCanvas(1600,400);
 car =  createSprite(50, 200, 50, 50);
 car.shapeColor="red";
  wall = createSprite(1500, 200, 60, height);
  wall.shapeColor="red";

  //speed=random(55,98);
  //weight =random(400,1500);
}

function draw() {
  background("black");  
  
   if(car.x - wall.x < car.width/2 + wall.width/2 &&
    wall.x - car.x < car.width/2 + wall.width/2 && ) {
      wall.shapeColor="red";
      car.shapeColor="red";
   }
   else{
    wall.shapeColor="green";
    car.shapeColor="green";
   }

  drawSprites();
}