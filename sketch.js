var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);

  
  drawSprites();
}

function bounceOff(objct1,objct2)
{
  if (objct1.x - objct2.x < objct2.width/2 + objct1.width/2
    && objct2.x - objct1.x < objct2.width/2 + objct1.width/2) {
  objct1.velocityX = objct1.velocityX * (-1);
  objct2.velocityX = objct2.velocityX * (-1);
}
if (objct1.y - objct2.y < objct2.height/2 + objct1.height/2
  && objct2.y - objct1.y < objct2.height/2 + objct1.height/2){
  objct1.velocityY = objct1.velocityY * (-1);
  objct2.velocityY = objct2.velocityY * (-1);
}
}