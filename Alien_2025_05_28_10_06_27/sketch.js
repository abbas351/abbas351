function setup() {
  createCanvas(400, 400); // Create a canvas
}

function draw() {
  background(30); // Dark background (space-like)

  // Alien head
  fill(100, 255, 100); // Green color
  ellipse(200, 200, 100, 120); // Head

  // Eyes
  fill(0); // Black color
  ellipse(180, 190, 20, 40); // Left eye
  ellipse(220, 190, 20, 40); // Right eye

  // Antennas
  stroke(100, 255, 100); // Green stroke
  strokeWeight(4);
  line(180, 150, 170, 120); // Left antenna
  line(220, 150, 230, 120); // Right antenna

  // Antenna tips
  noStroke();
  fill(255, 0, 0); // Red color
  ellipse(170, 120, 10, 10); // Left tip
  ellipse(230, 120, 10, 10); // Right tip
}
