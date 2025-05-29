var img;

function preload() {

img = loadImage("dog.jpg");

}



function setup () { 

createCanvas (400, 400);

background(0);

}



function draw() { //It redraws the canvas continuously.

background(0); 

image(img, 0, 0);

filter(BLUR,8);

}

