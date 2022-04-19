function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  background(55);
  noLoop();

  push();
  translate(width / 2, height / 2);

  let x = 0;
  let y = 0;
  let w = 400;
  let h = 250;
  let n = 10;

  let angle = (2 * Math.PI) / n;
  let halfAngle = angle / 2;

  noFill();

  noStroke();

  fill(0, 0, 102);
  beginShape();
  for (let a = 0; a <= 2 * Math.PI; a += angle) {
    let sx = x + Math.cos(a) * h;
    let sy = y + Math.sin(a) * h;

    vertex(sx, sy);

    sx = x + Math.cos(a + halfAngle) * w;
    sy = y + Math.sin(a + halfAngle) * w;

    vertex(sx, sy);

  }

  endShape();

  beginShape();

  fill(255);
  stroke(255, 128, 0);
  for (let a = 0; a < 2 * Math.PI; a += angle) {
    sx = x - Math.cos(a) * h;
    sy = y - Math.sin(a) * h;

    vertex(sx, sy);

    sx = x + Math.cos(a + halfAngle) * w;
    sy = y + Math.sin(a + halfAngle) * w;

    vertex(sx, sy);

  }

  endShape();

  noFill();
  stroke(0);
  x = 0;
  y = 0;
  h = 410;
  n = 9;

  angle = (2 * Math.PI) / n;

  console.log(angle);

  beginShape();
  // fill(0)
  for (let a = 0; a < 2 * Math.PI; a += angle) {
    sx = x + Math.cos(a) * h;
    sy = y + Math.sin(a) * h;

    vertex(sx, sy);
  }
  endShape();

  pop();
}

function draw() {
  // put drawing code here
  fill(255);
}

function tileGen(xStart, yStart, x, y, w, h, n) {
  this.pattern1Complete = false;
  this.pattern2Complete = false;
  this.angle = (2 * Math.PI) / n;
  this.halfAngle = angle / 2;


  this.run = function () {
    if (!pattern1Complete) {
      // draw pattern1
      // calc 
      ;

    } else if (!pattern2Complete) {
      // draw pattern2
      ;
    }
  };

  this.draw = function () {

  }

  this.calcVertex = function () {

  }
}

