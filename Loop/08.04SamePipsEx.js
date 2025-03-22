// Randomize the pips once
let pips1 = Math.floor((Math.random() * 6) + 1)
let pips2 = Math.floor((Math.random() * 6) + 1)

// Set the count to be one (now you have randomized once)
let i = 1
// Repeat as long as (pips are not equal)
while (pips1 != pips2) {
    // Randomize again
    pips1 = Math.floor((Math.random() * 6) + 1)
    pips2 = Math.floor((Math.random() * 6) + 1)
    // Increment counter by one
    i = i + 1
}
document.getElementById("answer").innerHTML = "Same dice pips: "+ pips1 + " and " + pips2 + "<br />"+ "There were " + i + " randomization rounds until we got the same pips."// Write the answer (including the count) to the html page (answer div)*/








