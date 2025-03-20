"use strict";
var Arthmatics;
(function (Arthmatics) {
    Arthmatics[Arthmatics["Add"] = 0] = "Add";
    Arthmatics[Arthmatics["Sub"] = 1] = "Sub";
    Arthmatics[Arthmatics["Mul"] = 2] = "Mul";
    Arthmatics[Arthmatics["Div"] = 3] = "Div";
})(Arthmatics || (Arthmatics = {}));
function calculate(a, b, op) {
    console.log(op);
    switch (op) {
        case Arthmatics.Add:
            return a + b;
        case Arthmatics.Sub:
            return a - b;
        case Arthmatics.Mul:
            return a * b;
        case Arthmatics.Div:
            return a / b;
        default:
            throw new Error('Invalid Operation');
    }
}
console.log(calculate(10, 20, Arthmatics.Div));
