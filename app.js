let line;
let lastPoint;
let letters;
let phrase;
let phrasePosition;

function setup() {
  createCanvas(windowWidth, windowHeight);

  letters = [];
  phrase = 'Esto es un ejemplo de código limpio'.split('');
  phrasePosition = 0;

  line = new Line(phrase.length);
}

function draw() {
  background('#ffda00');
  line.draw();

  letters.forEach((letter) => {
    letter.draw();
  });
}

function mouseMoved() {
  let currentPoint = createVector(mouseX, mouseY);
  let distance = 1000;
  let position = 0;

  if (lastPoint) {
    distance = p5.Vector.dist(lastPoint, currentPoint);

    let diffVector = currentPoint.copy().sub(lastPoint);
    position = diffVector.heading();
  }

  if (distance > 40) {
    line.push(currentPoint);
    letters.push(new Letter(phrase[phrasePosition], currentPoint, position));

    letters = letters.slice(-1 * phrase.length);

    lastPoint = currentPoint;

    phrasePosition++;
    if (phrasePosition > phrase.length - 1) {
      phrasePosition = 0;
      letters.pop();
    }
  }
}
