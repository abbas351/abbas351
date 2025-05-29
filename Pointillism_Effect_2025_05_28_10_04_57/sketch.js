let img;

function preload() {
  // Load the image before the sketch starts
  img = loadImage("Flower.JPG"); // Make sure the image is in your project folder
}

function setup() {
  createCanvas(600, 400);
  background(255); // White background
  img.resize(width, height); // Resize image to fit the canvas
  noStroke(); // Remove borders from dots
}

function draw() {
  // Pick a random x and y position on the canvas
  let x = floor(random(width));
  let y = floor(random(height));

  // Get the color at the random position from the image
  let col = img.get(x, y);

  // Set the fill color to the sampled color
  fill(col);

  // Draw a small circle (dot) at that position
  ellipse(x, y, 6, 6); // Adjust size for more or less detail
}
