// Function returns the four digit key codes between min-max
function generateKeyCode(min, max) {

    // Randomize the key code with Math.random() function
    let keyCode = Math.round((Math.random() * max) + min)

    // Convert a number to a string with the toString() method.
    keyCode = keyCode.toString()
    // Use the length property of the text string.
    let length = 4 - keyCode.length
    // Add leading zeros to keyCode, if needed (eg. 9 -> 0009)
    // with loop
    for (let i = 1; i <= length; i++){
    // Return four digit key code as a text
    keyCode = "0" + keyCode
    }

    return keyCode
    console.log(keyCode)
}

let keyCodes = ""
// For hundred times
    for (let i = 1; i <= 100; i++) {
    // Call generateKeyCode() function
    keyCode = generateKeyCode(0,9999)
    console.log(keyCode)
    // Print key code to the document
    keyCodes += `${keyCode} `
    // If ordinal number of the keyCode MODULO (%) 10 equals zero
        if (i % 10 == 0) {
        // Print html line break to the document
            keyCodes += `<br>`
        }
    }

//Show result in html page (div with id value "keycodes")
document.getElementById("keycodes").innerHTML = keyCodes

