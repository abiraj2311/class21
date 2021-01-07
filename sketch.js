var zRect,madRect;

function setup() {
  createCanvas(800,400);
 zRect = createSprite(200,200,70,30);
 madRect = createSprite(210,210,110,40);
}
function draw() {
  background(255,255,255);  
  madRect.x = World.mouseX;
  madRect.y = World.mouseY;
 
  //console.log(fixedRect.x-movingRect.x);

  if(abirajTouch(zRect,madRect)){
    zRect.shapeColor = "green";
    madRectshapeColor = "green";
  }
  else{
    zRect.shapeColor  = "red";
    madRect.shapeColor= "red";
  }
  //msg.html(fixedRect.x - movingRect.x);
  //msg.position(100,100)
  //x1-x2 = if x1 is greater than x2// -10+5  = -5(x1)
  //-x2+x1  =  - 5+10  = (5)
 

  drawSprites();
}

