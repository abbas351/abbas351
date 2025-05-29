var circleSize = 80;



function setup() {

  createCanvas(400, 400); // Create a canvas of size 400x400

  translate(circleSize / 2, circleSize / 2); // Translate the origin



  for (var x = 0; x < width; x += circleSize) {

    for (var y = 0; y < height; y += circleSize) {

      fill(255);

      ellipse(x, y, circleSize * 1.2, circleSize * 1.2); // Outer circle

      fill(0);

      ellipse(x, y, circleSize * 0.8, circleSize * 0.8); // Middle circle

      fill(255);

      ellipse(x, y, circleSize * 0.3, circleSize * 0.3); // Inner circle

    }

  }

}



function draw() {

  // Nothing needed here for static drawings

}