#!/usr/bin/node

let a = Number(process.argv[2]);
let b = Number(process.argv[3])
function isNum(x) {
    return !isNaN(x) && x !== undefined;
}


function add(a, b) {
    return a + b;
}
if (!(isNum(a) && isNum(b))) {
    console.log("NaN");
} else {
    console.log(add(a, b));

}
