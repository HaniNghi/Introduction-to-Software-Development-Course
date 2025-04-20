function showStudyGrant() {

    // Read values from the input fields
    var age = Number(document.getElementById("age").value)
    var withParents = document.getElementById("withParents").value
    var outputText

    // if student is living with parents and his/her age is greater than 20 or equal
    if (age >= 20 && withParents === "y") {
        outputText = "The study grant is 87.23 - 196.27 euros."
    }
    // if student is not living with parents and his/her age is greater than 20 or equal
    else if (age >= 20 && withParents === "n") {
        outputText = "The study grant is 268.23 euros."
    }
    //otherwise if ....
    else {
        outputText = "Ask Kela."
    }

    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("answer").innerHTML = outputText
}

