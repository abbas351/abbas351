let angle = 0;

function setup() {
  createCanvas(600, 400);
  textFont('Helvetica');
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  fill(50);
  push();                // Save the current transformation state
  translate(width / 2, height / 2); // Move origin to center
  rotate(radians(angle));          // Rotate the text
  text("Hello", 0, 0);     // Draw text at rotated position
  pop();                 // Restore original transformation

  angle += 5;      // Increase angle for rotation
}
