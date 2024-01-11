#!/usr/bin/node

const SquareS = require('./5-square');
class Square extends SquareS {

  printChar (c) {
    if (c === undefined) {
      super.print();
    } else {
      for (let index = 0; index < this.height; index++) {
        console.log(c.repeat(this.height));
      }
    }
  }
}
module.exports = Square;
