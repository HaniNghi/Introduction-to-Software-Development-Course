

function calculate() {

    // Read date text from the input field
    let dateText = document.getElementById("date").value
    // If it is not Sunday  (Call isSunday() function with a date text as a parameter)
    if (isSunday(dateText) == true) {
        //Show price of the repair work per hour during the workdays
        document.getElementById("answer").innerHTML = `<p>Date ${dateText} (Sunday).<br>The price of this repair work is  72 euros per hour.</p>`
    }
    //otherwise
        //Show price of the repair work per hour on Sundays
    else {
        document.getElementById("answer").innerHTML = `<p>Date ${dateText} (work day).<br>The price of this repair work is  48 euros per hour.</p>`
    }
}
 // The function gets the date text in the format "dd.MM.yyyy".
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {

	// Split the given dateText into day, month and year parts using the substr() method
	let day = dateText.substring(0,2)
    let month = dateText.substring(3,5)
    let year = dateText.substring(6,10)

    // Create a new Date object to a variable
    const asDate = new Date();
    asDate.setDate(parseInt(day))
    asDate.setMonth(parseInt(month)-1)
    asDate.setYear(parseInt(year))

	// Get the day of the week with its getDay() method. Sunday is number 0 .
    return asDate.getDay() === 0
}


