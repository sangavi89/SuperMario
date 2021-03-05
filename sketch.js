var backgroundImg, bg;
var ground, player, marioImage,groundImg;

function preload(){
 backgroundImg = loadImage("Background Image.jpg");
 marioImage=loadAnimation("mario2.png", "mario1.png");
 groundImg=loadImage("ground.png");
}



function setup() {
 createCanvas(displayWidth,displayHeight);

 //bg=createSprite(windowWidth,windowHeight);
 //bg.addImage(backgroundImg);
 //bg.scale=3;

 ground = createSprite(500, 530, 5000, 10);
 ground.addImage(groundImg);

 player = createSprite(200, 300, 50, 50);
 player.addAnimation("mario_running",marioImage);
 //player.scale = 0.01;


 //bg.velocityX = -7;
}

function draw() {
 background(backgroundImg); 



 // player.collide(ground);
drawSprites();
}