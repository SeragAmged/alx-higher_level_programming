#!/usr/bin/node
let arr = process.argv.slice(2);
arr.forEach(function (element, index) {
    arr[index] = Number(element);
})
console.log(arr.sort((a, b) => b - a)[1]);
