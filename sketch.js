var fixedRect, movingRect;
var r,ro
var colors=['red','yellow','orange','green','blue','pink','white','violet','brown']
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(400,700,80,30);
  movingRect.shapeColor = "violet";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  invisibleBlock1=createSprite(1100,0,2500,10);
  invisibleBlock1.visible=false
  invisibleBlock2=createSprite(0,800,2500,10);
  invisibleBlock2.visible=false
}

function draw() {
  r=Math.round(random(1,8));
  ro=Math.round(random(1,8));
  background(0,0,0); 
  Bounceoff(movingRect,fixedRect);
  Bounceoff(movingRect,invisibleBlock2);
  Bounceoff(fixedRect,invisibleBlock1);
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor=colors[int(r)];
    fixedRect.shapeColor=colors[int(ro)];
  }
  if(isTouching(movingRect,invisibleBlock2)){
    movingRect.shapeColor=colors[int(r)];
    // invisibleBlock2.shapeColor=colors[int(ro)];
  }
  if(isTouching(fixedRect,invisibleBlock1)){
    fixedRect.shapeColor=colors[int(r)];
    // invisibleBlock1.shapeColor=colors[int(ro)];
  }
  drawSprites();
}
