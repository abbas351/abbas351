function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Face
  fill(255, 204, 153); // Skin color
  ellipse(200, 200, 200, 200); // Head
  
  // Eyes
  fill(0); // black for eyes
  ellipse(150, 150); // Left eye
  ellipse(240, 160, 30, 30); // Right eye
  
  
  
  
  // Mouth
 ellipse(160, 160, 30, 30)       
 ellipse(250,200,10,10)
  fill(255)
  ellipse(250,200,20,20)
}