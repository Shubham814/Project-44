var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
  score = 0;
}

function draw() {
  background(bg);

  
  
  clues();
  security.display();

  

  // Add code to display score in the middle of the screen
  fill(255);
  text("Score: " + score,width/2,20);


  // Add code to display the end screen
  if(score === 3){
    clear();
    background(bg2);

    fill(0);
    textAlign(CENTER);
    textSize(25);
    text("TREASURE UNLOCKED",width/2-100,height/2 + height/3);
  }
  

  drawSprites()
}