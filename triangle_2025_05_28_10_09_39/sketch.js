function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(335);

translate (25, 25);

triangle ( 50, 0, 100, 100, 0, 100);

push();

translate ( 25, 25);

triangle ( 50, 0, 100, 100, 0, 100);

pop();



push();

translate (50, 60);

triangle (25, 0, 50, 50, 0, 50);

pop();
  
}