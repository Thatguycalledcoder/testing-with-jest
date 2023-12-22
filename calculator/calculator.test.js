const Calculator = require("./calculator");

const calc = new Calculator();

it("Division by zero error message", () => {
    expect(() => calc.divide(4, 0)).toThrowError("Division by zero error");
});

it("division by zero", () => {
    expect(() => calc.divide(4, 0)).toThrow();
})

it("float value from division", () => {
    expect(calc.divide(3, 2)).toBe(1.50);
});

it("division", () => {
    expect(calc.divide(2, 1)).toBe(2);
});

it("multiplication", () => {
    expect(calc.multiply(1, 2)).toBe(2);
});

it("subtraction", () => {
    expect(calc.subtract(1, 2)).toBe(-1);
});

it("addition", () => {
    expect(calc.add(1, 2)).toBe(3);
});

it("calculator object", () => { 
    expect(calc).toBeInstanceOf(Calculator)
});