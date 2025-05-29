// Dataset of most spoken languages with number of native speakers (in millions)
let data = [
  { language: "English", speakers: 1500 },
  { language: "Mandarin", speakers: 1117 },
  { language: "Hindi", speakers: 615 },
  { language: "Spanish", speakers: 559 },
  { language: "French", speakers: 274 },
  { language: "Arabic", speakers: 274 },
  { language: "Bengali", speakers: 273 }
];

function setup() {
  createCanvas(800, 500);         // Set canvas size
  textAlign(CENTER, CENTER);      // Center the text
  textSize(14);                   // Set default text size
  noStroke();                     // Remove border from shapes
}

function draw() {
  background(30);                 // Dark background color

  let barWidth = width / data.length; // Width of each bar

  for (let i = 0; i < data.length; i++) {
    let d = data[i];                                       // Current language data
    let barHeight = map(d.speakers, 0, 1600, 0, height - 100); // Map speaker value to canvas height

    let x = i * barWidth + barWidth / 2; // X position of bar
    let y = height - barHeight;         // Y position of top of the bar

    // If mouse is over this bar
    if (mouseX > x - barWidth / 3 && mouseX < x + barWidth / 3 && mouseY > y && mouseY < height) {
      fill(255, 150, 100);             // Highlight color
      rect(x - barWidth / 3, y, barWidth / 1.5, barHeight); // Draw highlighted bar

      fill(255);                       // White text
      text(`${d.language}: ${d.speakers}M`, x, y - 20); // Show speaker count above bar
    } else {
      fill(100, 200, 255);             // Normal bar color
      rect(x - barWidth / 3, y, barWidth / 1.5, barHeight); // Draw normal bar

      fill(255);                       // White text
      text(d.language, x, height - 10); // Show language label below bar
    }
  }

  // Draw title at top of canvas
  fill(255);
  textSize(20);
  text("Most Spoken Languages by Native Speakers (2024)", width / 2, 30);
}
