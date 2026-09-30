let x,y,d;
let colorPalette = ['#fba4fc','#fbadfc','#fbb6fc','#fcbffc','#fcc8fd','#fdd1fd','#fddafd','#fde3fe','#feecfe','#fef5fe'];
let numCircles;
let spacing;
let posY = [150, 30, 200, 350, 50];
let posX = [200, 50, 100, 80, 50];
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  d = width/2;
  numCircles = 10;
  spacing = d/numCircles;

}

function draw() {
  // Set background to black
  background(0);
  d = width/2;
for(i = 0; i < numCircles; i++)
{
fill(colorPalette[i]);
 circle(posX[0],posY[0],d);
d = d - spacing;

fill(colorPalette[i]);
circle(posX[1],posY[2],d);

fill(colorPalette[i]);
circle(posX[2],posY[2],d);

fill(colorPalette[i]);
circle(posX[3],posY[3],d);

fill(colorPalette[i]);
circle(posX[4],posY[4],d);

fill(colorPalette[i]);
circle(posX[5],posY[5],d);

}


}
