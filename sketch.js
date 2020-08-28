var fixedRect, movingRect, Rect3,Rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect3 = createSprite(200, 300, 50, 80);
  Rect3.shapeColor = "green";
  Rect3.debug = true;
  Rect4 = createSprite(100, 200,80,30);
  Rect4.shapeColor = "red";
  Rect4.debug = true;


  //fixedRect.velocityY=5;
  //movingRect.velocityY = -5;
  Rect3.velocityY = 2;
  Rect4.velocityY = -2;
}

function draw() {
  background(0,0,0);  
 


  //bounceOff(movingRect,fixedRect);
  //bounceOff(Rect3,fixedRect);
 // bounceOff(Rect4,fixedRect);
  bounceOff(Rect4,Rect3);

  
  drawSprites();
}