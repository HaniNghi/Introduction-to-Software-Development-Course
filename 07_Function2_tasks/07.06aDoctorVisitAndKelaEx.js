// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function kelaReimbursement(lengthOfDoctorVisit) {
	let kela
	if (lengthOfDoctorVisit <= 10){
		kela = 8 // 8 euros
	} else if (lengthOfDoctorVisit <= 20) {
		kela = 11 // 11 euros
	} else if (lengthOfDoctorVisit <= 30) {
		kela = 13.5 // 13.5 euros
	} else if (lengthOfDoctorVisit <= 45) {
		kela = 16.5 // 16.5 euros
	} else {
		kela = 21 // 21 euros
	}
	return kela
}


// Define a function
function calculate() {
		// Read values from the input fields
	let length = Number(document.getElementById("length").value)
		// Call the function (1.) which calculates and returns Kela reimbursement
	let kelaOutput = kelaReimbursement(length)

		// Write the answer on the page, to the answer div, as content of the div
	document.getElementById("answer").innerHTML = `Length of visit is ${length} minutes.<br>Kela reimbursement is ${(kelaOutput).toFixed(2)} euros.`
}