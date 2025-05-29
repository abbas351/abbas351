function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  noStroke();
  for (let i = 0; i < 400; i = i + 1) {
    fill(
    127 + 177 * sin(i / 20+ frameCount/40),
    127 + 177 * sin(i / 21+ frameCount/60),
    127 + 177 * sin(i / 22+ frameCount/21)
    );
    
    circle(
    i,
      height / 2 + 100 * sin(TWO_PI * i / 400+ frameCount/40),
      height / 2 + 100 * cos(TWO_PI * i / 400+ frameCount/10),
      
      50 * sin(10*PI * i / 400 + frameCount/10)
    );
   } 
}