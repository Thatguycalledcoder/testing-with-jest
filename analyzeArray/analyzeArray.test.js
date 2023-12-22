const analyzeArray = require('./analyzeArray');

const a = analyzeArray([1,8,3,4,2,6]);

it("null", function () {
    expect(analyzeArray(null)).toEqual({});
});

it("empty array", function() {
    expect(analyzeArray([])).toEqual({});
})

it("maximum", function () {
    expect(a.max).toBe(8);
});

it("minimum", function () {
    expect(a.min).toBe(1);
});

it("average", function() {
    expect(a.average).toBe(4);
});

it("length", function() {
    expect(a.length).toBe(6);
});