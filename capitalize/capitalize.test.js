const capitalize = require('./capitalize');

it("undefined", () => {
    expect(capitalize()).toBeUndefined();
})

it("null", () => {
    expect(capitalize(null)).toBeNull();
})

it("empty string", () => {
    expect(capitalize("")).toBe("");
});

it("all lowercase letters", () => {
    expect(capitalize("lowercase")).toBe("Lowercase");
});

it("string in all caps", () => {
    expect(capitalize('CAPS')).toBe("CAPS");
});

it('first letter already capitalized', () => {
  expect(capitalize("Abe")).toBe("Abe");
});