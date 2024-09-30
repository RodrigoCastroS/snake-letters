class Letter {
  constructor(text, position, rotation) {
    this.text = text;
    this.position = position;
    this.rotation = rotation;
  }

  draw() {
    textSize(60);
    textFont('Inconsolata');
    textStyle(BOLD);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);

    push();
    translate(this.position.x, this.position.y);
    rotate(this.rotation);
    text(this.text, 0, 0);
    pop();
  }
}
