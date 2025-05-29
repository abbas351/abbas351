function setup() {
  createCanvas(400, 400);
  background(255);

  // Face Box
  fill(255, 255, 204); // Light yellow
  stroke(0);
  rect(50, 50, 300, 300);

  // Eyes
  fill(0, 102, 204); // Blue
  ellipse(150, 150, 20, 40);
  ellipse(250, 150, 20, 40);

  // Smile
  noFill();
  stroke(255, 105, 180); // Pink
  strokeWeight(5);
  arc(200, 250, 150, 100, 0, PI);
}