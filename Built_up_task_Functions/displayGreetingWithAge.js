function displayGreetingWithAge(name, year) {
    const date = new Date() // get current date
    var currentYear = date.getFullYear() // get current year
    var age = currentYear - year	// caculate age
    console.log(`Hello ${name}! You are ${age} years old this year.`)
}

displayGreetingWithAge("Mike", 1989)