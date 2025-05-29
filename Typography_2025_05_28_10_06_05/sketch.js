let quotes = [
  "Believe in yourself.",

];

let currentQuote = 0;
let angle = 0;
let font;

function preload() {
  // You can use custom fonts here if hosted or use default system fonts
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Light.otf');
}

function setup() {
  createCanvas(1000, 1000);        // Canvas size
  textFont(font);                  // Set the font
  textSize(48);                    // Set text size
  textAlign(CENTER, CENTER);       // Center align text
}

function draw() {
  background(30, 30, 40);          // Dark background

  // Floating animation using sine wave
  let floatY = height / 2 + sin(angle) * 30;

  // Rainbow gradient fill
  fill((frameCount * 2) % 255, 150, 255);
  textStyle(BOLD);

  text(quotes[currentQuote], width / 2, floatY); // Draw the quote

  angle += 0.03; // Update angle for animation
}

function mousePressed() {
  // Change to next quote on click
  currentQuote = (currentQuote + 1) % quotes.length;
}
