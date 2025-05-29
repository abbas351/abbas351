function setup() {

  createCanvas(400, 400); // Set the canvas size

  maxCol = 5;

  maxRow = 4;

  circleD = 60;



  xSpacing = width / maxCol;

  ySpacing = height / maxRow;



  for (var x = 0; x < maxCol; x++) {

    for (var y = 0; y < maxRow; y++) {

      if (x == 1) {

        fill(255, 0, 0);

      } else {

        fill(0, 0, 255);

      }

      ellipse(x * xSpacing, y * ySpacing, circleD, circleD);

    }

  }

}