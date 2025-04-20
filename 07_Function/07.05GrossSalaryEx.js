function calculateSalary(hours, hourlySalary) {
		// calculate salary
		var grossSalary = hourlySalary*hours
		// return the gross salary with the return statement
		return grossSalary
}

function showGrossSalary() {
		// assign the input field value to the variable hours
		var hours = Number(document.getElementById("hours").value)
		// assign the second input field value to the variable hourlySalary
		var hourlySalary = Number(document.getElementById("hourlySalary").value)
		// call caculateSalary funcion and write the answer on the html page
		document.getElementById("answer").innerHTML = `Gross salary is ${calculateSalary(hours, hourlySalary).toFixed(2)} euros.`
}

