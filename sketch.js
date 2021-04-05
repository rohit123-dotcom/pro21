var movingRect,fixedRect;
var car,wall;
function setup()
{
 createCanvas(1200,800);
 fixedRect = createSprite(600,400,50,80);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green";

 car = createSprite(200,200,30,30);
 car.shapeColor = "white";
 car.velocityX = 4;

 wall = createSprite(1000,200,30,80);
 wall.shapeColor = "yellow";
}

function draw()
{
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,wall))
  {
    textSize(30);
    text("it is Touching",300,400);
  }
  bounceOff(car,wall);



 
  drawSprites();
}
