// Sketch Name: Interactive Art - "Emotion Orbs"

let balls = []; // Array to store all ball objects
let bgColor; // Background color variable
let numBalls = 60; // Number of balls in the sketch

function setup() {
  createCanvas(windowWidth, windowHeight); // Set canvas size to full window
  bgColor = color(0); // Set initial background color to black

  // Create 'numBalls' number of Ball objects and store in array
  for (let i = 0; i < numBalls; i++) {
    balls.push(new Ball()); // Add a new ball to the array
  }
}

function draw() {
  background(bgColor, 20); // Draw semi-transparent background to create motion trails

  // Loop through each ball to update position, display it, and handle interaction
  for (let b of balls) {
    b.update();   // Move the ball
    b.display();  // Draw the ball on screen
    b.interact(); // Apply interaction behavior based on mouse
  }

  // Instruction text for user interaction
  fill(255); // Set text color to white
  textSize(18); // Set text size
  textAlign(CENTER); // Align text to center
  text("Click: Change Ball Colors | Press 'R' to Reset | Move Mouse to Interact", width / 2, height - 30); // Display instructions
}

function mousePressed() {
  // When mouse is clicked, change color of all balls
  for (let b of balls) {
    b.changeColor(); // Randomize ball color
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') { // If 'R' key is pressed
    balls = []; // Clear current balls

    // Recreate balls with fresh random positions and velocities
    for (let i = 0; i < numBalls; i++) {
      balls.push(new Ball());
    }

    bgColor = color(0); // Reset background color to black
  }
}

// Ball class defines properties and behaviors of each ball
class Ball {
  constructor() {
    this.pos = createVector(random(width), random(height)); // Set initial random position
    this.vel = p5.Vector.random2D().mult(random(1, 3)); // Random 2D velocity vector
    this.radius = random(15, 40); // Random radius size
    this.color = color(random(255), random(255), random(255)); // Random initial color
  }

  update() {
    this.pos.add(this.vel); // Update ball position by velocity

    // Reverse direction if ball hits canvas edge (bounce)
    if (this.pos.x < this.radius || this.pos.x > width - this.radius) {
      this.vel.x *= -1; // Reverse X direction
    }
    if (this.pos.y < this.radius || this.pos.y > height - this.radius) {
      this.vel.y *= -1; // Reverse Y direction
    }
  }

  display() {
    noStroke(); // No outline around the ball
    fill(this.color); // Fill ball with its color
    ellipse(this.pos.x, this.pos.y, this.radius * 2); // Draw circle representing ball
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255)); // Assign a new random color
  }

  interact() {
    let mouse = createVector(mouseX, mouseY); // Create vector for mouse position
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y); // Distance between mouse and ball

    if (d < 100) { // If ball is within 100 pixels of the mouse
      let push = p5.Vector.sub(this.pos, mouse).setMag(0.5); // Calculate small repelling force
      this.vel.add(push); // Apply repelling force to velocity
    }
  }
}
