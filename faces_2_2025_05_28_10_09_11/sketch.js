// Setup function

function setup (){

  // Create 400x400 canvas

  createCanvas(400,400);

  // Set HSB color mode with max values for Hue, Saturation, and Brightness

  colorMode (HSB, 360, 100, 100);

  // Set background color to black (0 hue, 0 saturation, 0 brightness)

  background (0, 0, 0);

  

  // Draw 100 random faces

  for (var i = 0; i < 100; i++) {

    // Call face function with random position, size, and color

    face(random(width), random(height), random(20,100), random(40,50), random(360));

  }

  // Draw one face in the center with random color

  face(width/2, height/2, 100, 150, random(360));

}

// Function to draw a face

function face(x, y, w, h, c) {

  // Set face color (HSB: hue, 100% saturation, 100% brightness)

  fill(150, c, 100);

  // Draw face ellipse

  ellipse(x, y, w, h);

  // Set eye color (white)

  fill(0, 0, 100);

  // Draw left eye

  ellipse(x - w/6, y - h/8, w/4, h/4);

  // Draw right eye

  ellipse(x + w/6, y - h/8, w/4, h/4);

  // Draw mouth (small ellipse)

  ellipse(x, y + h/8, w/8, h/8);

  // Draw nose (small ellipse)

  ellipse(x, y + h/3, w/8, h/8);

}