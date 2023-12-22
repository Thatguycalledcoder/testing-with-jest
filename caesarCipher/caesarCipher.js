const caesar = function(input, factor) {
    if (input === undefined) return undefined;

    if (input === null) return null;


    let encryption = "";
    for (var i = 0; i < input.length; i++) {
        if (input[i] === " ") {
            encryption += " ";
        }
        else {
            if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
                if (input.charCodeAt(i) + factor > 90) {
                    encryption += String.fromCharCode(((input.charCodeAt(i) + factor) % 91) + 65)
                }
                else {
                    encryption += String.fromCharCode(input.charCodeAt(i) + factor);
                }
            }
            else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
                if (input.charCodeAt(i) + factor > 122) {
                    encryption += String.fromCharCode(((input.charCodeAt(i) + factor) % 123) + 97)
                }
                else {
                    encryption += String.fromCharCode(input.charCodeAt(i) + factor);
                }
            }
            else {
                encryption += input[i];
            }
        }
    }
    return encryption;
}

module.exports = caesar;