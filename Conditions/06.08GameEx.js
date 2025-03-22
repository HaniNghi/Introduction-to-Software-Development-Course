
function play() {
    // Read value from the input field
    var bet = Number(document.getElementById("bet").value)
    var pay
    // Randomize dice pips between 1-6
    var pips = Math.round( (Math.random( ) * 5) + 1 )
    // Calculate win base on pips
    if (pips == 1 || pips == 3 || pips == 5) {
        pay = "no pay"
    } else if (pips == 2 || pips == 4 ) {
        pay ="Pips was " + pips + " Paid back: " + (bet * 1.25).toFixed(2) + " euros"
    } else if (pips == 6) {
        pay ="Pips was " + pips + " Paid back: " + (bet * 1.5).toFixed(2) + " euros"
    }

    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("answer").innerHTML = pay
}