function comparePackages() {

    // assign input field values into a variables
    var text = Number(document.getElementById("textMessages").value)
    var call = Number(document.getElementById("callTime").value)
    var outputText
    // calculate the costs of the Special Package
    var specialPackage = 0.069*(call + text) + 19.90
    var specialPackageFixed = specialPackage.toFixed(2)

    // If the Special package is cheaper than the All-inclusive package
    if (specialPackageFixed < 29.90) {
        outputText = "The Special package (" +  (specialPackageFixed) + ") is cheaper than the All-inclusive package (29.90)" // assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
        // to a variable
    }
    // otherwise
    else {
        outputText ="The All-inclusive package (29.90) is cheaper than the Special package (" + (specialPackageFixed)  + ")"  // assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
        // to a variable
    }
    // write the answer to the web page DOM, in the answer div, as the content
    document.getElementById("answer").innerHTML = outputText
}