function processName() {

    // read value of name from the input field
    let name = document.getElementById("name").value

    // show it with "ALL CAPS" using toUpperCase()
    let nameUpperCase = name.toUpperCase()

    // show it with  "all small letters" using toLowerCase()
    let nameSmallLetters = name.toLowerCase()

    //tell how many characters are there (length, includes also all spaces)
    let nameLength = name.length

    document.getElementById("upperCase").innerHTML = `With upper case letters: ${nameUpperCase}`

    document.getElementById("lowerCase").innerHTML = `With lower case letters: ${nameSmallLetters}`

    document.getElementById("length").innerHTML = `Character count: ${nameLength}`


}