let song;
let fft;

function preload() {
  // Load your sound file before the program starts
  song = loadSound('Drum roll sound effect.mp3'); 
}

function setup() {
  createCanvas(800, 400); // Set the canvas size
  fft = new p5.FFT();     // Create FFT object to analyze audio frequencies
  noStroke();             // No outline for shapes
  textAlign(CENTER, CENTER); // Center the instruction text
  textSize(20);           // Set text size
}

function draw() {
  background(0); // Clear the screen with black background

  let spectrum = fft.analyze(); // Get the frequency spectrum data from the sound

  let barWidth = map(mouseX, 0, width, 5, 30); // Bar width changes based on mouse X
  let brightness = map(mouseY, 0, height, 50, 255); // Brightness changes based on mouse Y

  for (let i = 0; i < spectrum.length; i += 10) {
    let x = i * (barWidth + 2); // Set x-position of each bar
    let h = map(spectrum[i], 0, 255, 0, height); // Map frequency value to bar height

    fill((i % 255), brightness, 255); // Set fill color with changing hue and brightness
    rect(x, height - h, barWidth, h); // Draw the frequency bar
  }

  // Show message when sound is not playing
  if (!song.isPlaying()) {
    fill(255);
    text("Click to Play Music", width / 2, height / 2);
  }
}

function mousePressed() {
  // Toggle between playing and pausing the sound when the canvas is clicked
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
