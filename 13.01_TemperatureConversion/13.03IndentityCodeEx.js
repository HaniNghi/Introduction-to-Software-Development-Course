// function shows details about Identity Number
function show() {
    // Read value of identity number from the input field
    const identityNumber = document.getElementById("identityNumber").value
    let gender = ""

    //Check gender
    // Get the second last character with charAt() method
    // Convert digit text to number with parseInt() function
    const genderKey = parseInt(identityNumber.charAt(9))

    // Check gender with modulo (%) operation (even number-> female, odd number-> male)
    if (genderKey % 2 == 1) {
        gender = `Male`
    } else {
        gender = `Female`
    }

    // Parse birth day information
    // Take certain characters (dd, mm, yy and separator character)) from the string with substring() method
    const day = identityNumber.substring(0,2)
    const month = identityNumber.substring(2,4)
    const yearTwoEndDigits = parseInt(identityNumber.substring(4,6))
    let yearFourDigits

    // Calculate the year with four digits
    const century = identityNumber.substring(6,7)
    if (century == "-") {
        yearFourDigits = 1900 + yearTwoEndDigits
    } else if (century == "+") {
        yearFourDigits = 1800 + yearTwoEndDigits
    } else if (century == "A") {
        yearFourDigits = 2000 + yearTwoEndDigits
    }
    // Concatenate birth day text
    const dayOfBirth = `${day}.${month}.${yearFourDigits}`
    // Write the answer on the page, to the answer div, as content of the div

    document.getElementById("answer").innerHTML = `<p>${gender}, born ${dayOfBirth}.</p>`
}