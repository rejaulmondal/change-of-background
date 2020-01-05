
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1200,400);
}

function draw(){
  
  background( map(mouseX, 0, 250, 25, 75,),map(mouseX, 0, 250, 0, 250,true),map(mouseX, 0, 150, 30, 230,true));
  
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 
  r = map(mouseX, 0, 250, 0, 250,);
  r = mouseX;

  g = map(mouseX, 0, 250, 0, 250,true);
  g = mouseX;

  b = map(mouseX, 0, 150, 0, 250,true);
  b = mouseX;
  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  fill("white");
  ellipse(mouseX,mouseY,40,40);
  // Remember to fill the canvas with white paint before creating the ellipse.
}