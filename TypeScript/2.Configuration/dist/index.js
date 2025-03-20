"use strict";
var _a;
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let numbers = [1, 2, 3];
console.log(numbers);
let person = ["John", 25];
console.log(person);
;
let mySize = 1;
console.log(mySize);
function callculateTax(income, taxier = 2022) {
    if (taxier < 2022) {
        return income * 1.2;
    }
    return income * 1.4;
}
console.log(callculateTax(100, 2021));
let employee = {
    id: 1,
    retire: (date) => {
        console.log(date);
    }
};
employee.name = "John";
console.log(employee);
function KgToLb(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
        ;
    }
    else
        return parseInt(weight) * 2.2;
}
console.log(KgToLb(10));
console.log(KgToLb("10"));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let metric = "kg";
function greet(name) {
    if (name) {
        return console.log(`Hello ${name.toUpperCase()}`);
    }
    return console.log("Holla");
}
greet(null);
function getBirthDate(id) {
    return id == 0 ? null : { birthDate: new Date() };
}
let Customer = getBirthDate(1);
console.log((_a = Customer === null || Customer === void 0 ? void 0 : Customer.birthDate) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map