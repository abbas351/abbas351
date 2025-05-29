let img;

function preload() {
  // Load the image before the sketch starts
  img = loadImage("Flower.JPG"); // Replace with your own image if needed
}

function setup() {
  createCanvas(600, 400);      // Create a canvas
  img.resize(width, height);   // Resize the image to match the canvas
}

function draw() {
  background(0);               // Set background to black

  image(img, 0, 0);            // Draw the image on the canvas at position (0, 0)

  let levels = map(mouseX, 0, width, 2, 10); // Use mouseX to control posterize levels

  filter(POSTERIZE, levels);   // Apply the posterize filter with chosen level
}
