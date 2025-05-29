let trail = [];

function setup() {
  createCanvas(800, 600); // Set canvas size
  noStroke();
}

function draw() {
  background(0, 30); // Slight transparency creates fading trail

  // Add current mouse position to the trail array
  trail.push({
    x: mouseX,
    y: mouseY,
    r: random(100, 255),
    g: random(100, 255),
    b: random(100, 255),
    size: random(5, 20)
  });

  // Limit the trail length to 100 points
  if (trail.length > 100) {
    trail.shift(); // Remove the oldest point
  }

  // Draw all points in the trail
  for (let i = 0; i < trail.length; i++) {
    let t = trail[i];
    fill(t.r, t.g, t.b, 150); // Semi-transparent fill
    ellipse(t.x, t.y, t.size); // Draw circle at each trail point
  }
}
