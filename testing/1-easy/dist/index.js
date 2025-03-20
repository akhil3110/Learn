"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = sum;
function sum(a, b) {
    return a + b;
}
const test1 = sum(1, 2);
if (test1 == 3) {
    console.log("Test Sucessfull");
}
else {
    console.log("test unsucessfull");
}
