var img;
function preload() {
img = loadImage("yi.jpeg");

}



function setup () {

createCanvas (300, 300);

background(0);

}

function draw() { // It continuously redraws everything on the canvas

background(0);

tint(255, 0, 0);

image(img, 0, 0, img.width/2, img.height/2);

noTint();

image(img, 0, img.height/2, img.width/2, img.height/2);



}