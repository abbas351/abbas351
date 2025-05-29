function setup (){

  createCanvas(400,400);

  colorMode (HSB, 360, 100, 100);

  background ( 0, 0, 0);

  

  for (var i = 0; i <100; i++) {

    face(random(width), random (height),
random(20,100), random(40,50), random(360));

  }

  

  face(width/2, height/2, 100, 150, random (360));

}



function face (x, y, w, h, c) {

  fill(c, 100, 100);

  ellipse (x,y, w, h);

  fill (0 ,0, 100);

  ellipse (x - w/6, y - h/8, w/4, h/4);

  ellipse (x + w/6, y - h/8, w/4, h/4);

  ellipse ( x, y + h/9, w/8, h/8);

  ellipse ( x, y + h/3, w/8, h/8);

  

}