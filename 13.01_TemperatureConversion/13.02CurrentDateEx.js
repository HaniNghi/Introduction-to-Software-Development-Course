const date = new Date()
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const dayName = days[date.getDay()]
const day = String(date.getDate()).padStart(2, '0')
const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
const year = date.getFullYear()

const hours = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const seconds = String(date.getSeconds()).padStart(2, '0')

const result = `${dayName}<br> ${day}.${month}.${year}<br> ${hours}:${minutes}:${seconds}`

document.getElementById("answer").innerHTML = result