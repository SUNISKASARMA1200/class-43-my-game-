var lachit,king;
var sword,ground;





function setup() {
  createCanvas(800,400);
  lachit=createSprite(30,340 ,50 ,100);
 ground=createSprite(400,380,800,10);
 //sword=createSprite()
}

function draw() {
  background(0); 
  lachit.collide(ground); 
  if (keyDown("UP_ARROW")){
    lachit.velocityY=-12;
  }
  lachit.velocityY=lachit.velocityY+0.8;
  if (keyDown("LEFT_ARROW")){
    lachit.x=lachit.x-5;
  }
  if (keyDown("RIGHT_ARROW")){
    lachit.x=lachit.x+5;
  }
  drawSprites();
}
