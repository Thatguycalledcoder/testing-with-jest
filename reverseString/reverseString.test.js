const reverseString = require('./reverseString');

it("a sentence", () => {
    expect(reverseString("The dog is big")).toBe("gib si god ehT")
});

it("empty string", () => {
    expect(reverseString("")).toBe("");
});

it("word", () => {
    expect(reverseString("father")).toBe("rehtaf");
});

it("undefined", () => {
    expect(reverseString()).toBeUndefined();
})

it("null", () => {
    expect(reverseString(null)).toBeNull();
})

it("palindrome", function() {
    expect(reverseString("dad")).toBe("dad");
})