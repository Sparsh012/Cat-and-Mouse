var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png")
    mouseImg2 = loadAnimation("images/mouse2.png");
    //catImg3 = loadAnimation("image/cat3.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("catSitting", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(220,650);
    mouse.addAnimation("mouseTeasing", mouseImg2)
    mouse.scale = 0.1

    
}

function draw() {

    background(bgImg, 200,200);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLastImage", catImg2);
    cat.changeAnimation("catLastImage")
    cat.scale = 0.2
    mouse.addAnimation("mouseHappy", mouseImg2)
    mouse.changeAnimation("mouseHappy")
    cat.velocityX = 0;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseImg1);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 1;

    cat.velocityX = -5
}

}
