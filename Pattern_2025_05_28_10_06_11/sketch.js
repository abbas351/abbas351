function setup() {
  createCanvas(400, 400); // Set canvas size
  noStroke();             // No outlines
}

function draw() {
  background(255);        // White background

  let spacing = 40;       // Space between circles

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      
      let size = map(mouseX, 0, width, 5, 30); // Circle size changes with mouseX

      fill(random(255), random(255), random(255)); // Random colors
      ellipse(x + spacing / 2, y + spacing / 2, size, size); // Draw circle
    }
  }
}
