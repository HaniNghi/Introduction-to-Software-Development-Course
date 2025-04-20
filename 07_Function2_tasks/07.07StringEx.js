function processName() {

    // read value of name from the input field
    let name = document.getElementById("name").value

    // show it with "ALL CAPS" using toUpperCase()
    let nameUpperCase = name.toUpperCase()

    // show it with  "all small letters" using toLowerCase()
    let nameSmallLetters = name.toLowerCase()

    //tell how many characters are there (length, includes also all spaces)
    let nameLength = name.length

    // tell, whether the input string contains the word 'muumi'
    let checkIfContainMuumi = name.indexOf("muumi")

    // tell the first character using charAt()
    let nameFirstCharacter = name.charAt(0)

    // tell which ones are the first three characters using substring().
    let nameFirstThreeCharacter = name.substring(0,3)

    // print
    document.getElementById("upperCase").innerHTML = `With upper case letters: ${nameUpperCase}`

    // print
    document.getElementById("lowerCase").innerHTML = `With lower case letters: ${nameSmallLetters}`

    // print
    document.getElementById("length").innerHTML = `Character count: ${nameLength}`

    // check if name contains "muumi"
    if (checkIfContainMuumi < 0){
        document.getElementById("contains").innerHTML = `Doesn't contain the text muumi.`
    } else {
        document.getElementById("contains").innerHTML = `Contain the text muumi`
    }

    // print
    document.getElementById("firstCharacter").innerHTML = `First character: ${nameFirstCharacter}`

    //print
    document.getElementById("manyCharacters").innerHTML = `First three characters: ${nameFirstThreeCharacter}`


}