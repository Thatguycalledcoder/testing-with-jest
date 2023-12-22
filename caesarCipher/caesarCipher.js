const caesar = function(input, factor) {
    if (input === undefined) return undefined;

    if (input === null) return null;


    let encryption = "";
    for (var i = 0; i < input.length; i++) {
        if (input[i] === " ") {
            encryption += " ";
        }
        else {
            encryption += String.fromCharCode(input.charCodeAt(i) + factor);
        }
    }
    return encryption;
}

module.exports = caesar;