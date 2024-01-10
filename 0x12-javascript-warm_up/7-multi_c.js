#!/usr/bin/node

let x = process.argv[2];
if (isNaN(x) || x === undefined) {
    console.log("Missing number of occurrences");
} else {

    for (let index = 0; index < x; index++) {
        console.log('C is fun');
    }
}