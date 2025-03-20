enum Arthmatics {
    Add,
    Sub,
    Mul,
    Div
}

function calculate(a: number, b: number, op: Arthmatics): number {
    console.log(op)
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