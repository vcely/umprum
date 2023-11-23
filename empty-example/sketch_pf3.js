function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  backgroundColor = [20, 20, 20]
  background(backgroundColor);

  delay = 0;

  horizon = delay;
  verticalPos = 0;

  verSize = 100;
  horSize = 100;

  x = 0;
  time = 0;

  mouseMove = false;
  padding = 0;

  fillColor = [255,255, 255];

  objectSize = 60;

  frameRate(24);
}

function draw() {


  if (!mouseMove) {
    return;
  }
  noStroke();

  fill(200, random(50)+150, random(150));

  randomNum = round(random(3));

  if (round(random(5)) == 5) {
    fillColor = [round(random(255)), round(random(255)), round(random(255))]
  }

    if (randomNum == 0) {
      drawRect(objectSize);
    } else if (randomNum == 1) {
      drawCircle(objectSize);
    } else if (randomNum == 2) {
      drawTriangle(objectSize);
    } else if (randomNum == 3){
      drawReverseTriangle(objectSize);
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
  
  fill(fillColor);



  circle( posX, posY, size - padding);

  fillColor = [255,255, 255];


}

function drawRect(size) {

  posX = round(mouseX/size) * size;
  posY = round(mouseY/size) * size;
  
  fill(backgroundColor);
 // rect( posX - size/2, posY - size/2, size, size);

  fill(fillColor);



  rect( posX - size/2 + padding/2, posY - size/2 + padding/2, size - padding, size - padding);
}

function drawTriangle(size){

  posX = round(mouseX/size) * size;
  posY = round(mouseY/size) * size;

  fill(backgroundColor);
 // rect( posX - size/2, posY - size/2, size, size);


  fill(fillColor);
  

    triangle( posX, posY - size/2 + padding + 1,
              posX-size/2 + padding + 1, posY + size/2 - padding,
              posX+size/2 - padding - 1, posY + size/2 - padding);
  
    //triangle(posX, posY - size/2 + padding + 1, posX-size/2, posY + size/2, posX+size/2, posY + size/2);

}

function drawReverseTriangle(size){

  posX = round(mouseX/size) * size;
  posY = round(mouseY/size) * size;

  fill(backgroundColor);
 // rect( posX - size/2, posY - size/2, size, size);


  fill(fillColor);
  

    triangle( posX, posY - size/2 + padding + 1 + size,
              posX-size/2 + padding + 1, posY + size/2 - padding - size,
              posX+size/2 - padding - 1, posY + size/2 - padding - size);
  
    //triangle(posX, posY - size/2 + padding + 1, posX-size/2, posY + size/2, posX+size/2, posY + size/2);

}

function mouseClicked() {
  objectSize -= objectSize/10;
}

function spanPixel(){
  rect( random(round(windowWidth)), random(round(windowHeight)), 1, 1);
  rect( random(round(windowWidth)), random(round(windowHeight)), 1, 1);

  rect( random(round(windowWidth)), random(round(windowHeight)), 1, 1);
  rect( random(round(windowWidth)), random(round(windowHeight)), 1, 1);
  rect( random(round(windowWidth)), random(round(windowHeight)), 1, 1);
  rect( random(round(windowWidth)), random(round(windowHeight)), 1, 1);
  rect( random(round(windowWidth)), random(round(windowHeight)), 1, 1);
  rect( random(round(windowWidth)), random(round(windowHeight)), 1, 1)
 

}