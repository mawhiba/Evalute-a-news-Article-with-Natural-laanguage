// const Regex = require("regex");

function checkForName(inputText) {
    
    var match = inputText.match(/[a-zA-Z]+/g)

    if (match == null)
        return false

    console.log(match)

    if (match.length >= 3) {
        return true
    } else {
        return false
    }
}

export { checkForName }
