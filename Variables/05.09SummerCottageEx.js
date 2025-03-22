function calculateRent() {
	var rent = document.getElementById("rent").value
    var participants = document.getElementById("participants").value
    var cal = rent/participants
    var calFixed = cal.toFixed(2)
    document.getElementById("answerDiv").innerHTML = "Rent per participants is " + calFixed + " euros."
}