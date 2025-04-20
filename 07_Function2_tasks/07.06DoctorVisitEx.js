// Defne a function (1.)

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
// Defne a function (2.)
function payment(doctorFee, lengthOfDoctorVisit) {
	let kela = kelaReimbursement(lengthOfDoctorVisit)
	let payment = parseFloat(doctorFee) - parseFloat(kela) + 15.9
	return payment
}

// Define a function (3.)
function calculate() {
		// Read values from the input fields
	let length = Number(document.getElementById("length").value)
	let doctorFeeOutput = Number(document.getElementById("doctorsFee").value)
		// Call the function (1.) which calculates Kela reimbursement
	let kelaOutput = kelaReimbursement(length)
		// Call the function (2.) which calculates amount left for the customer to pay
	let paymentOutput = payment(doctorFeeOutput, length)
		// Write the answer on the page, to the answer div, as content of the div
	document.getElementById("answer").innerHTML = `Doctor's Fee is ${(doctorFeeOutput).toFixed(2)} euros.<br>Kela reimbursement is ${(kelaOutput).toFixed(2)} euros.<br>Office Fee is 15.90 euros.<br>Customer needs to pay ${(paymentOutput).toFixed(2)} euros.`

}