let rippleList = [];
let shapeMode = 'circle'; // Can toggle between 'circle' and 'square'

function setup() {
  createCanvas(800, 600);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(255);
}

function draw() {
  // Faded background for trail effect
  background(20, 30, 50, 25);

  // Show instructions
  text("Move mouse to create ripples | Click to clear | Press 'S' to toggle shape", width / 2, 30);

  // Draw and update all ripples
  for (let i = rippleList.length - 1; i >= 0; i--) {
    let r = rippleList[i];
    fill(r.col[0], r.col[1], r.col[2], r.alpha);

    if (r.shape === 'circle') {
      ellipse(r.x, r.y, r.size);
    } else if (r.shape === 'square') {
      rectMode(CENTER);
      rect(r.x, r.y, r.size, r.size);
    }

    r.size += 2;
    r.alpha -= 2;

    if (r.alpha <= 0) {
      rippleList.splice(i, 1); // Remove faded ripples
    }
  }
}

// Mouse movement creates ripples
function mouseMoved() {
  addRipple(mouseX, mouseY);
}

// Mouse click clears the canvas
function mousePressed() {
  rippleList = [];
}

// Keyboard input toggles shape mode
function keyPressed() {
  if (key === 's' || key === 'S') {
    shapeMode = shapeMode === 'circle' ? 'square' : 'circle';
  }
}

// Function to add a ripple with random pastel color
function addRipple(x, y) {
  rippleList.push({
    x: x,
    y: y,
    size: 10,
    alpha: 150,
    col: [random(100, 255), random(100, 255), random(200, 255)],
    shape: shapeMode
  });
}
