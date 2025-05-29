function setup() {
  createCanvas(400, 200); // Create a canvas
}

function draw() {
  background(220); // Set background color

  // Car body
  fill(255, 0, 0); // Red color
  rect(100, 100, 150, 40); // Main body
  rect(130, 80, 90, 30);   // Top part

  // Wheels
  fill(0); // Black color
  ellipse(120, 140, 30, 30); // Left wheel
  ellipse(230, 140, 30, 30); // Right wheel
}
