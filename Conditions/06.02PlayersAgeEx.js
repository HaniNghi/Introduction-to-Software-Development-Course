function checkAge() {
    var ageText = document.getElementById("age").value
    var age = Number(ageText)
    var outputText
    //if age smaller than 18
    if (ageText < 18) {
        outputText = "Adolescents are not allowed to play."// assign text "Adolescents are not allowed to play." to a variable
    }
    // otherwise
    else {
        outputText = "Old enough to play."	// assign text "Old enough to play." to a variable
    }

    // Write the answer to the web page DOM, in the answer div, as the content
    document.getElementById("answer").innerHTML = outputText
}