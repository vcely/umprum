function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(56, 94, 95);

  delay = 1;

  horizon = delay;
  vertical = 0;

  verSize = random(20);
  horSize = random(20);

  x = 0;
}

function draw() {
  noStroke();

  fill(100, random(100)+130, 200);
  rect( horizon,
        vertical,
        horSize, 
        verSize);
  
    //vertical = vertical + verSize;
    horizon = horizon + horSize;

    //verSize = random(5);
    horSize = random(1000);

    if (x > 5) {
  
      vertical = vertical + random(3);
      verSize = random(1) ;
      horizon = 0;
      x = 0;
    }

    verSize = random(1500);


  x++;
  horizon++;

  print(horSize);
}
