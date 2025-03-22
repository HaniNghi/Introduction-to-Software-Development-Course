function getRandomInteger(min, max) {
    // Return randomizedNumber between 'min' and 'max'.
    var randomizedNumber = Math.floor(min + Math.random() * ( max + 1 - min ) )
    return randomizedNumber
}

function rollTheDice() {
    // 1. Call the function getRandomInteger(min, max) with parameter values 1 and 6, and assign the return value of the function to the variable.
    var diceValue = getRandomInteger(1,6)
    // 2. Insert the value of the variable diceValue into the HTML div element whose id is 'dice'.
    document.getElementById("dice").innerHTML = diceValue
}