#!/usr/bin/node
var c = 0;
exports.logMe = function (item) {
  console.log(`${c}: ${item}`);
  c++;
};
