var sea,seaImg,ship,shipImg1;

function preload(){
  seaImg  = loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");


}
//code to reset the background

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,400,400);
  sea.addImage(seaImg);
  sea.velocityX = -4;

  ship = createSprite(100,300,50,50);
  ship.addAnimation("ship",shipImg1);
  ship.scale = 0.2

  
}

function draw() {
  background("blue");
 
  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  drawSprites();
}