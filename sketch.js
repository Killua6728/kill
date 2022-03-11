var shipe
var funi
function preload(){
shipeimg=loadAnimation("ship-1.png","ship-2.png")
funiimg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  funi=createSprite(200,200,20,20)
  funi.addImage(funiimg)
  shipe=createSprite(300,200,40,45)
  shipe.addAnimation("shipe",shipeimg)
  shipe.scale=0.2
  if (funi.x < 0){
    funi.x = funi.width/400
  }
 

}

function draw() {
  
    drawSprites() 
}