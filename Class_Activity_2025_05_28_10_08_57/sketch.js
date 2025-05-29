var x;
var y;
var size = 20;
var shape = 0;
function setup() {
  createCanvas(400,400);
  frameRate(5);
  rectMode(CENTER);
}
function draw() {
  background(60, 72, 100);
  
  for (x = 25; x < 400; x = x + 50) {
    for (y = 25; y < 400; y = y + 50) {
      size = random(10, 40);
      shape = random(0, 1);
      
      if (shape < 0.5) {
        ellipse(x, y, size, size);
        fill(27, 89, 70);
      } else {
      rect(x, y, size, size);
      }
    }
  }
}