"use strict";
function greet(person) {
    return `Hello ${person.name}! I know you are ${person.age} years old.`;
}
console.log(greet({ name: "John", age: 30 }));
