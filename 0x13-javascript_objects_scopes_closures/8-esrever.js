#!/usr/bin/node

exports.esrever = function (list) {
  let arr = [];
  for (let index = list.length - 1; index > -1; index--) {
    arr.push(list[index]);
  }
  return (arr);
};
