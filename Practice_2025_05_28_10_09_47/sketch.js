var word = "hello word";
var wholeNum = 50 ;
var decimalNum = 20.5;

function setup() {
  createCanvas(450, 450);
  background(255);
  rectMode(CENTER);
  rect(width/2, height/2, decimalNum, wholeNum);
  line(10, 100 ,100 , 10);
  point (75, 75);
  print (word);
  beginShape();
  vertex(0, 50);
  bezierVertex(50, 25, 75, 50, 50,50);
  endShape();
  translate(width/2 - 150, 0);
beginShape();
vertex(0,100);
bezierVertex( 0, 100, 50, 0, 100, 100);
bezierVertex(100, 100, 150, 200, 200, 100);
bezierVertex(200, 100, 250, 0, 300, 100);
vertex(300, 300);
vertex( 0, 300);
vertex( 0, 100);
endShape();
  ellipseMode(CORNER);
  ellipse (0, 0, 100, 100);
  rectMode(CORNER);
  rect(0, 0,100, 100 );
  
strokeWeight(5);
rect( 25, 25, 100, 100);
  translate (25, 25);

triangle ( 50, 0, 100, 100, 0, 100);
}  
