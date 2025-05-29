function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  noStroke();
  for (let i = 0; i < 400; i = i + 1) {
    fill(
    127 + 177 * sin(i / 20+ frameCount / 25),
    127 + 177 * sin(i / 25+ frameCount / 30),
    127 + 177 * sin(i / 27+ frameCount / 20),
    );
    
    circle(
    i,
      height / 2 + 100 * sin(i / 30 + frameCount / 20),
      50 * sin(i / 20 + frameCount / 20)
    );
   } 
}