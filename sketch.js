var fish, bg;
var backgroundImage;
var shark1Group,shark2Group;

function preload(){
  backgroundImage=loadImage("background1.jpg");
  fishImage=loadImage("FlappyFish.png");
  shark1Image=loadImage("Shark3.png");
  shark2Image=loadImage("Shark4.png");

}


function setup() {
  createCanvas(displayWidth,displayHeight);
console.log(displayWidth);
console.log(displayHeight);

  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage("background",backgroundImage);
  bg.scale=6;
  bg.velocityX=-3;
  bg.x= bg.x=bg.width/2;

  fish=createSprite(displayWidth/4,displayHeight/2,50,50);
  fish.addImage("fish", fishImage);
  fish.scale=0.5;
  fish.velocityY=6;

  shark1Group=createGroup();
  shark2Group=createGroup();

}

function draw() {
  background(0);
  
  if(bg.x<0){
    bg.x=bg.width/2;
  }

  if(keyDown("space")){
    fish.velocityY=-6;
  }
fish.velocityY=fish.velocityY+1;

  drawSprites();
  shark1();
  shark2();
  
}

function shark1(){
  if(World.frameCount%120===0){
    var shark1=createSprite(displayWidth/2,displayHeight/4,10,40);
    shark1.setAnimation("Shark",Shark1Image);
    shark1.velocityX=-2;
    shark1.scale=0.7;
    shark1Group.add(shark1);
  }
}

function shark2(){
  if(World.frameCount%120===0){
    var shark2=createSprite(displayWidth/2,displayHeight/3,10,40);
    shark2.setAnimation("Shark",Shark1Image);
    shark2.velocityX=-2;
    shark2.scale=0.7;
    shark1Group.add(shark1);
  }
}
 

