function tellAge() {
    // Read value of yearOfBirth from the input field
    let yearOfBirth = Number(document.getElementById("yearOfBirth").value)

    // Figure out the current date into today letiable
    let date = new Date()

    // Use getFullYear() method to get the current year out from the today variable
    let currentYear = date.getFullYear()

    // Calculate the (rough estimate of the) age
    let age = currentYear - yearOfBirth


    // If age is less than zero
    if (age < 0) {
        //  Show an error message
        document.getElementById("answer").innerHTML = `error`
    } else {
    // otherwise tell the age
        document.getElementById("answer").innerHTML = `You are now ${age} years old.<br> (Current year is ${currentYear}.)`
    }
}