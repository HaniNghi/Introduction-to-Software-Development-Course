function getGreetingWithAge(name, year){
    var date = new Date()
    var currentYear = date.getFullYear()
    var age = currentYear - year
    return `Hello ${name}! You are ${age} years old this year.`
}

function displayGreetingWithAge(name, year) {
    console.log(getGreetingWithAge(name, year))
}
displayGreetingWithAge("Mike", 1989)