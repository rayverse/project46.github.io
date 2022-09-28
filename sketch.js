var screen1;
var titleImg;

function preload(){
titleImg = loadImage("assets/title.png");
}

function setup() {
  createCanvas(50, 400);
  screen1 = new Screen1();

  titleImg = createSprite(400, 200, 30, 50)
  titleImg.addImage("title", titleImg);
}

function draw() {
  background(255,255,255);  
  screen1.display();
  drawSprites();
}

