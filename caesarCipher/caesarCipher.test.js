const caesar = require('./caesarCipher');

it("Mixture of lowercase, uppercase and punctuation", function() {
    expect(caesar("Hello, World!", 7)).toBe("Olssv, Dvysk!");
});

it("Mixture of lowercase and uppercase letters", function() {
    expect(caesar("Hello World", 4)).toBe("Lipps Asvph");
})

it("Uppercase letters", function() {
    expect(caesar("HELLO WORLD", 4)).toBe("LIPPS ASVPH");
})

it("lowercase", function() {
    expect(caesar("zoo", 3)).toBe("crr");
})

it("phrase and factor of 3", function() {
    expect(caesar("hello world", 3)).toBe("khoor zruog");
})

it("word with no factor", function() {
    expect(caesar("hello")).toMatch("");
})

it("no word with a facotr", function() {
    expect(caesar("", 2)).toBe("");
});

it("null", function() {
    expect(caesar(null)).toBeNull();
});

it("no word passed", function() {
    expect(caesar()).toBeUndefined();
})

it("word with spaces", function() {
    expect(caesar("hello ", 3)).toBe("khoor ");
})

it("word", function() {
    expect(caesar("hello", 3)).toBe("khoor");
})