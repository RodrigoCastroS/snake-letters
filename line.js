class Line {
  constructor(maxLength) {
    this.lines = [];
    this.length = maxLength;
  }

  push(point) {
    this.lines.push(point);
    this.lines = this.lines.slice(-1 * this.length);
  }

  draw() {
    noFill();
    strokeWeight(4);
    stroke('white');
    beginShape();
    this.lines.forEach((point) => {
      vertex(point.x, point.y);
    });
    endShape();
  }
}
