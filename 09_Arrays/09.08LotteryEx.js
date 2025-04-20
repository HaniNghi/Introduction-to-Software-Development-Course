// The array variable names is declared inside the script element, but NOT inside the function.
// The array is availabe for both functions to read from or write to.
let names = [];
function addName() {
  // Assign name from the input field to the array (use push())
	var nameInput = document.getElementById("name");
	names.push(nameInput.value);
	var namesText = "";
	for (i = 0; i < names.length; i++) {
    // Go through the array in a for loop adding each name at the end of the namesText
		namesText += names[i] + " ";
	}
    // Write the names on the page, to the names div, as content of the div
	document.getElementById("nameList").innerHTML = `Inserted names: ${namesText}`;

  // Empty the input field of name as that name was just put in the array
	nameInput.value = ""
	nameInput.focus()
  // Empty the answer text
	document.getElementById("answer").innerHTML = ""

}
function makeDraw() {
  // Randomize the index of the winner
  let winningIndex = Math.floor(Math.random() * names.length)
  // Write the answer on the page, to the answer div, as content of the div
	document.getElementById("answer").innerHTML = `<br>Winner is ${names[winningIndex]}`
}
