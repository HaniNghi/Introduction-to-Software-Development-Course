let names = [];
let scores = [];

// Create a function to add name and score of player to names and scores array
function addNameAndScoreToArray() {
    let txtNameOfPlayer = document.getElementById("txtName")
    let nameOfPlayer = txtNameOfPlayer.value // Assign variable from input field
    let txtScoreOfPlayer = document.getElementById("txtScore")
    let scoreOfPlayer = txtScoreOfPlayer.value // Assign variable from input field

    names.push(nameOfPlayer) // Add name of player to the end of names array
    scores.push(scoreOfPlayer) // Add score of player to the end of scores array

    txtNameOfPlayer.value = "" // Delete field
    txtNameOfPlayer.focus()
    txtScoreOfPlayer.value = "" // Delete field

    document.getElementById("pOutput0").innerHTML = `Number of player: ${names.length}`
}


// Create a function to list name and score of players
function listPlayers() {
    let output1 = "" // Create string variable
    for (let i=0; i < names.length; i++){
        output1 += `Name: ${names[i]}; score: ${scores[i]} <br>` // show name and score of player one by one
    }
    document.getElementById("pOutput1").innerHTML = output1
}


// Create a function to search name of player by input name
function searchByName() {
    let nameToSearch = document.getElementById("txtNameToSearch").value

    let output2 = "" // Create string variable

    for (let i=0; i < names.length; i++) {
        // Checks if the value of nameToSearch matches the name at the current index i in the names array
        if (nameToSearch == names[i]) {
            output2 = `Player is found! Name: ${names[i]}, Score: ${scores[i]}`// Print on screen
            break //  Once the player is found, the break statement immediately exits the loop, preventing unnecessary iterations after the name is found.
        } else {
            output2 = `Player can not found.` // if no match is found after the loop completes, print on screen player can not found
        }

    }
    document.getElementById("pOutput2").innerHTML = output2

}

// Create function to find the winner
function findWinner() {
    let winnerIndex = 0
    // Find the winner by finding the index of the highest score in array
    for (let i=0; i < scores.length; i++){
        // Check if value at the current index (scores[i]) is greater than the score at the index stored in the winnerIndex variable
        if (scores[winnerIndex] < scores[i]) {
            winnerIndex = i // If the condition is true, it updates the winnerIndex to be the index of the current score (i)
        }
    }

    document.getElementById("pOutput3").innerHTML = `The winner is ${names[winnerIndex]}. Score is ${scores[winnerIndex]} `
}

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

