var fixedRect, movingRect, rect1, rect2;
var didTouch = false;
function changeColor(obj1, obj2) {
  if(rectCollides(obj1,obj2)) {obj1.shapeColor = "green"; didTouch=true;} else {obj1.shapeColor = "red"; obj2.shapeColor = "red";}
}
function rectCollides(obj1,obj2) {
  return obj1.x-obj2.x<(obj1.width+obj2.width)/2 && obj2.x-obj1.x<(obj1.width+obj2.width)/2 && obj1.y-obj2.y<(obj1.height+obj2.height)/2 && obj2.y-obj1.y<(obj1.height+obj2.height)/2
}
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX=-1;
  movingRect = createSprite(400,400,80,30);
  movingRect.velocityX=1;
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(800, 200, 30, 90);
  rect1.debug=true;
  rect2 = createSprite(100, 400, 30, 10);
  rect2.debug=true;
}

function draw() {
  background(0,0,0);


  changeColor(rect1,movingRect);
  changeColor(fixedRect,movingRect);
  changeColor(rect2, movingRect);
  if(didTouch) {movingRect.shapeColor="green";}
  didTouch = false;
  if(rectCollides(movingRect, fixedRect)){
    fixedRect.velocityX*=-1;
    movingRect.velocityX*=-1;
  }
  drawSprites();
}