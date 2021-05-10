
var bg,catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3,jerry,tom;
function preload() {
 bg=loadImage("images/garden.png")
 catImg1=loadImage("images/cat1.png")
 catImg2=loadAnimation("images/cat2.png","images/cat3.png")
 catImg3=loadImage("images/cat4.png")
 mouseImg1=loadImage("images/mouse1.png")
 mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
 mouseImg3=loadImage("images/mouse4.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600)
tom.addAnimation("tomspleep",catImg1)
tom.scale=0.2;
jerry=createSprite(200,600)
jerry.addAnimation("jerrystanding",mouseImg1)
jerry.scale=0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
         tom.velocityX=0;
          tom.addAnimation("tomLastImage", catImg3);
           tom.x =300; tom.scale=0.2;
            tom.changeAnimation("tomLastImage"); 
            jerry.addAnimation("jerryLastImage", mouseImg3); 
            jerry.scale=0.15; 
            jerry.changeAnimation("jerryLastImage"); }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("tomRunning",catImg2)
    tom.changeAnimation("tomRunning")
    jerry.addAnimation("jerry2",mouseImg2)
    jerry.changeAnimation("jerry2")
}

}
