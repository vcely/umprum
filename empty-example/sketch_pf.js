function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  //background(56, 94, 95);

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

  switch (randomNum) {
    case 0:
      //rect( mouseX-100, mouseY-100, horSize, verSize);
    case 1:
    
      drawCircle(100, 0, 200);
      drawCircle(100, 50, 50);
      drawCircle(50, 150, 100);

      fill(200, random(100)+100, random(150));


      triangle(mouseX, mouseY, mouseY, mouseX, mouseY, mouseY);
      //triangle(mouseX, mouseY, mouseX-100, mouseY+200, mouseX+100, mouseY+200);
    case 2:
  fill(200, random(100)+100, random(150));

      triangle(mouseX, mouseY, mouseX, mouseX, mouseY, mouseY);
      //circle( mouseX+100, mouseY, horSize);
     // triangle(mouseX, mouseY, mouseX-sin(time)*50, mouseY+sin(time)*100, mouseX+sin(time)*50, mouseY+sin(time)*100);

     mouseMove = false;
  }

  time++;
}

function mouseMoved() {
  mouseMove = true;
}

function drawCircle(posX, posY, size) {

  
  fill(100, random(200)+100, random(150));
  circle( mouseX-posX, mouseY-posY, size);
  fill(100, random(200)+100, random(150));
  circle( mouseX-posX, mouseY-posY, size/2);
  fill(100, random(200)+100, random(150));
  circle( mouseX+posX, mouseY-posY, size);
  fill(100, random(200)+100, random(150));
  circle( mouseX+posX, mouseY-posY, size/2);


}