function modifyTitle() {

    // Read value of title from the input field
	let text = document.getElementById("title").value
    // Call allCapsTitleTrimmed() function
	allCapsTitleTrimmed(text)

}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
	text.trim()
	// Changes the text given to it to be ALL CAPS
	let cappsText = text.toUpperCase()
	console.log(cappsText)
	// Return the changed text
	document.getElementById("title").value = cappsText
}

function calculate() {
    // Calculate length of the work as minutes.
	let startTimeStr = document.getElementById("startTime").value
	let endTimeStr = document.getElementById("endTime").value
	let startTime = new Date()
	let endTime = new Date()

	let startHour = parseInt(startTimeStr.substring(0,2))
	let startMin = parseInt(startTimeStr.substring(3,5))

	let endHour = parseInt(endTimeStr.substring(0,2))
	let endMin = parseInt(endTimeStr.substring(3,5))

	startTime.setHours(startHour, startMin)

	endTime.setHours(endHour, endMin)

	let lengthOfWork = endTime - startTime
	let mins = Math.round(lengthOfWork/60000)


    let dateText = document.getElementById("date").value

    // If it is Sunday  (Call isSunday() function)
    if (isSunday(dateText) == true) {
        //Calculate and show price of the repair work during the Sundays
		document.getElementById("answer").innerHTML = `Length of the work was ${mins} minutes.<br>The hourly price is during the Sundays 72.00 euros.<br>The price of this repair work is ${((mins/60)*72).toFixed(2)} euros.`
	}
	//otherwise
	else {
        //Calculate and showprice of the repair work on workdays
		document.getElementById("answer").innerHTML = `Length of the work was ${mins} minutes.<br>The hourly price is during the workdays 48.00 euros.<br>The price of this repair work is ${((mins/60)*48).toFixed(2)} euros.`
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


