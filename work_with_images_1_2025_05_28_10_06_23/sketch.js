var img, x, y;

function preload() {
  img = loadImage("flower1.jfif"); // Loads the image before the sketch starts
}

function setup() {
  createCanvas(400, 400); // Creates a canvas of 400x400 pixels
  background(0);          // Sets the background color to black
  noStroke();             // Disables drawing the stroke (outline)
}

function draw() {
  background(0);          // Clears the background every frame
  x = mouseX;             // Sets x to the current horizontal mouse position
  y = mouseY;             // Sets y to the current vertical mouse position

  image(img, 0, 0);       // Draws the image at the top-left corner

  var c = get(x, y);      // Retrieves the color of the pixel at the mouse position (x, y)
  
  fill(c);                // Sets the fill color to the sampled color from the image

  var size = dist(mouseX, mouseY, pmouseX, pmouseY) * 10; // Size changes with mouse speed

  ellipse(x, y, size, size); // Draws an ellipse at the mouse position with dynamic size
}
