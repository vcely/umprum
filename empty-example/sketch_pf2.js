function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  backgroundColor = [106, 154, 205]
  background(backgroundColor);

  delay = 0;

  horizon = delay;
  verticalPos = 0;

  verSize = 100;
  horSize = 100;

  x = 0;
  time = 0;

  mouseMove = false;
}

function draw() {

  if (!mouseMove) {
    return;
  }
  noStroke();

  fill(200, random(50)+150, random(150));

  randomNum = round(random(2));

    if (randomNum == 0) {
      drawRect(40);
    } else if (randomNum == 1) {
      drawCircle(40);
    } else if (randomNum == 2) {
      drawTriangle(40);
    }
  
    mouseMove = false;
  time++;
}

function mouseMoved() {
  mouseMove = true;
}

function drawCircle(size) {

  posX = round(mouseX/size) * size;
  posY = round(mouseY/size) * size;
  
  fill(backgroundColor);
  //rect( posX - size/2, posY - size/2, size, size);


  padding = 5;
  
  fill(100, random(200)+100, random(150));



  circle( posX, posY, size - padding);


}

function drawRect(size) {

  posX = round(mouseX/size) * size;
  posY = round(mouseY/size) * size;
  
  fill(backgroundColor);
 // rect( posX - size/2, posY - size/2, size, size);

  fill(random(200)+100, 100, random(150));



  rect( posX - size/2, posY - size/2, size, size);
}

function drawTriangle(size){

  posX = round(mouseX/size) * size;
  posY = round(mouseY/size) * size;

  fill(backgroundColor);
 // rect( posX - size/2, posY - size/2, size, size);


  fill(random(150), 100, random(200)+100);
  

  
    triangle(posX, posY - size/2, posX-size/2, posY + size/2, posX+size/2, posY + size/2);

}

function backgroundOfObject(size){

}