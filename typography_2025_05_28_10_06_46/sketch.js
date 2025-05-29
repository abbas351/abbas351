function setup() {
  createCanvas(windowWidth, windowWidth);
  background(255);

  // Set basic font properties
  textFont('Helvetica');
  textSize(32);
  fill(50);

  // Display heading
  textAlign(CENTER);
  text("Simple Typography", width / 2, 100);

  // Subheading with smaller font
  textSize(18);
  fill(100);
  text("Clean, readable, and centered", width / 2, 150);

  // Body text
  textAlign(LEFT);
  textSize(14);
  fill(80);
  text("This is an example of using simple typography principles in p5.js. We use alignment, spacing, and contrast for clarity.", 50, 200, 500);
}
