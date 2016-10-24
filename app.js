var player;
var ball;
var goal;
var score = 0;

function setup() {
  createCanvas(250, 500);
  
  player = createSprite(125, 400, 50, 50);
  ball = createSprite(125, 250, 25, 25);
  goal = createSprite(125, 5, 100, 25);
}
function draw() {
  background(255, 240, 220);
  
  textSize(25);
  text("Score: " + score, 140, 495)
  drawSprites();
  
  player.position.x = mouseX;
  player.position.y = mouseY;
  
  ball.bounce(player);
  if (ball.overlap(goal)) {
    score++;
    console.log("Score: " + score);
    
  
  }
  if (ball.overlap(goal)) {
    ball.remove();
    ball = createSprite(125, 250, 25, 25);
    
  
    
    
  
  
   
  }
  if(score == 20)  {
    textSize(25)
    text("YOU WIN!!", 55, 400);
    
    
  }
  if(score == 21) {
    score = 0;
  }
}
