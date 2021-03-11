var roadimg,road;
var backgroundimg;

function preload(){
  roadimg=loadImage('images/track.png');
  backgroundimg=loadImage("images/background.jpg");
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-30);
  road=createSprite(displayWidth/2,-displayHeight,600,displayHeight*5);
  road.addImage(roadimg);
}
function draw (){
  background(0);
  drawSprites();
}