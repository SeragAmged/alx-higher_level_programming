#!/usr/bin/node

let x = process.argv[2];
if (isNaN(x) || x === undefined) {
  console.log('Missing size');
} else {
  for (let index = 0; index < x; index++) {
    console.log('X'.repeat(x));
  }
}
