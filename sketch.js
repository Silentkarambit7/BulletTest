var wall;
var speed;
var weight;
var thickness,bullet;


function setup() {
  createCanvas(1600,400);
  background(0);
  bullet=createSprite(50,200,50,25);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2)
  speed=random(55,90);
  weight=random(400,1500);
  bullet.velocityX=(speed);
 }

function draw() {
  
  speed=(random(223,321));
  weight=(random(30,52));
  thickness=(random(22,83));
  var damage=(0.5*weight*speed*speed/(thickness*thickness*thickness))/2;
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    text("Damage done by the bullet="+damage,800,350)
    bullet.velocityX=0;
    bullet.collide(wall);
    if(damage>10){
      bullet.shapeColor="red";
      text("The wall is not affective against the bullet",800,365);
    }else{
      bullet.shapeColor="green";
      text("The wall is affective against the bullet",800,365);
    }
  }  
 drawSprites();
}

