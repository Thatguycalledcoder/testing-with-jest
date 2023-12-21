const capitalize = function(input) {
    if (input === undefined) return undefined;

    else if (input == null) return null;

    else if (input.length === 0) return input;

    else {
        return input.charAt(0).toUpperCase() + input.slice(1, input.length);
    }
}

module.exports = capitalize;