let letters = []; // Array to store interactive letters
let message = "Welcome to Bath Spa University"; // The message to display
let particles = []; // Array to store moving particles
const connectionDist = 120; // Maximum distance to connect particles with lines

function setup() {
  createCanvas(windowWidth, windowHeight); // Fullscreen canvas
  textFont('Georgia'); // Set text font
  textSize(48); // Set text size
  textAlign(CENTER, CENTER); // Center-align text

  // Calculate spacing to evenly spread letters across the screen
  let spacing = textWidth(message) / message.length;
  let startX = width / 2 - (spacing * message.length) / 2;

  // Create letter objects for each character in the message
  for (let i = 0; i < message.length; i++) {
    let x = startX + i * spacing;
    letters.push(new InteractiveLetter(message[i], x, height / 2));
  }

  // Create 150 random moving particles
  for (let i = 0; i < 150; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0); // Clear the screen with black

  // Draw connecting lines between nearby particles
  stroke(255, 100);
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let d = particles[i].pos.dist(particles[j].pos);
      if (d < connectionDist) {
        let alpha = map(d, 0, connectionDist, 255, 0); // Transparency based on distance
        stroke(255, alpha * 0.4); // Slightly transparent lines
        line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
      }
    }
  }

  // Update and draw each particle
  for (let p of particles) {
    p.update();
    p.display();
  }

  // Update and draw each letter
  for (let l of letters) {
    l.update();
    l.display();
  }
}

// Class representing a single particle
class Particle {
  constructor() {
    // Initial position and velocity
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D().mult(random(0.3, 1)); // Random speed
    this.baseSize = random(2, 5); // Default size
    this.size = this.baseSize;
    this.opacity = random(100, 200); // Transparency of particle
    this.pulseSpeed = random(0.01, 0.03); // Speed of pulsing animation
    this.pulsePhase = random(TWO_PI); // Random starting phase for pulsing
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(this.pos, mouse); // Vector from mouse to particle
    let d = dir.mag();

    // Repel particle away from mouse if it's close
    if (d < 150) {
      dir.normalize();
      dir.mult(2 * (150 - d) / 150); // Stronger push if closer
      this.vel.add(dir);
    }

    this.vel.limit(1.5); // Limit maximum speed
    this.pos.add(this.vel); // Move particle

    // Wrap particles around edges
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

    // Pulsing animation effect
    this.size = this.baseSize + sin(frameCount * this.pulseSpeed + this.pulsePhase) * 1.5;
  }

  display() {
    noStroke();
    fill(255, this.opacity); // White with transparency
    ellipse(this.pos.x, this.pos.y, this.size); // Draw particle
  }
}

// Class representing a single letter in the message
class InteractiveLetter {
  constructor(char, x, y) {
    this.char = char; // The character to draw
    this.home = createVector(x, y); // Original position
    this.pos = createVector(x, y); // Current position
    this.vel = createVector(0, 0); // Velocity
    this.acc = createVector(0, 0); // Acceleration
    this.color = color(255); // Default color (white)
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(this.pos, mouse); // Direction from mouse to letter
    let d = dir.mag();

    // Repel letter from mouse if close
    if (d < 100) {
      dir.normalize();
      dir.mult(100 / d); // Stronger repulsion when closer
      this.acc.add(dir);
    }

    // Pull letter back toward its original position
    let homeForce = p5.Vector.sub(this.home, this.pos).mult(0.05);
    this.acc.add(homeForce);

    // Update velocity and position
    this.vel.add(this.acc);
    this.vel.mult(0.9); // Add friction
    this.pos.add(this.vel);
    this.acc.mult(0); // Reset acceleration
  }

  display() {
    fill(this.color);
    noStroke();
    text(this.char, this.pos.x, this.pos.y); // Draw the character
  }

  // Change letter color randomly
  randomizeColor() {
    this.color = color(random(150, 255), random(100, 255), random(150, 255));
  }
}

// When mouse is pressed, change colors of all letters
function mousePressed() {
  for (let l of letters) {
    l.randomizeColor();
  }
}

// Resize canvas and recalculate positions when window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  letters = []; // Clear old letters
  setup(); // Re-initialize everything
}
