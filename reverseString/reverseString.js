const reverseString = function(input) {
    if (input === undefined) return undefined;

    else if (input === null) return null;

    else {
        var new_word = input.split("");
        var len = input.length;
        for (var i = 0; i < len / 2; i++) {
            [new_word[i], new_word[len - 1 - i]] = [new_word[len - 1 - i], new_word[i]]
        }
        return new_word.join("");
    }
}

reverseString("father is good");

module.exports = reverseString;