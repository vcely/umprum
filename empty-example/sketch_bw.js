function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);

  delay = 1;

  horizon = delay;
  vertical = 0;

  verSize = random(20);
  horSize = random(20);

  x = 0;
}

function draw() {
  noStroke();

  fill(255);
  rect( horizon,
        vertical,
        horSize, 
        verSize);
  
    //vertical = vertical + verSize;
    horizon = horizon + horSize + 5;

    //verSize = random(5);
    horSize = random(20)+1;

    if (x > 50) {
  
      vertical = vertical + verSize + 5;
      verSize = random(15) + 1;
      horizon = 0;
      x = 0;
    }



  x++;
  horizon++;

  print(horSize);
}
