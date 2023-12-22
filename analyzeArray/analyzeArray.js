
const analyzeArray = function(array) {
    if (array === null) return {};

    else if (array.length === 0) return {};

    const len = array.length;
    const average = array.reduce((prev, cur) => prev + cur, 0) / len;
    array.sort((a, b) => a - b);
    const min = array[0];
    const max = array[len - 1];

    return {
        average,
        min,
        max,
        length: len,
    }
}

module.exports = analyzeArray;