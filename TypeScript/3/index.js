export function calculate1(a, b, type) {
    if (type == "sum")
        return a + b;
    if (type == "mul")
        return a * b;
    if (type == "div")
        return a / b;
    if (type == "sub")
        return a - b;
    return -1;
}
let finalsum = calculate1(6, 5, "sub");
console.log(finalsum);
