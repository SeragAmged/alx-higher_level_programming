#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }
  print () {
    for (let index = 0; index < this.height; index++) {
      console.log('X'.repeat(this.width));
    }
  }
  rotate () {
    const temp = this.height;
    this.height = this.width;
    this.width = temp;
  }
  double () {
    this.height *= 2;
    this.width *= 2;
  }
}
module.exports = Rectangle;
