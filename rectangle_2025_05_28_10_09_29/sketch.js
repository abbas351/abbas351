function setup() {

  createCanvas(150, 150); // Create a 150x150 pixel canvas

  colorMode(HSB, 360, 100, 100); // Set color mode to HSB

  background(255); // Set background color to white

  noStroke(); // Remove outlines from shapes

  

  for (var i = 0; i < width / 10; i++) { // Loop through columns

    for (var j = 0; j < height / 10; j++) { // Loop through rows

      fill(0, 100, 10 * i); // Set fill color with increasing brightness

      rect(10 * i, 10 * j, 9, 9); // Draw a 9x9 square at (10*i, 10*j)

    }

  }

}