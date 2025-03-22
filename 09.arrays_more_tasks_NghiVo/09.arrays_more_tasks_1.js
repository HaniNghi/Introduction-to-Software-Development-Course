// 09.array_example_1.js JavasScript code

var aphorisms = ["What you do speaks so loudly that I cannot hear what you say. – Ralph Waldo Emerson",
                "He who has a why to live can bear almost any how. – Friedrich Nietzsche",
                "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.– Buddha",
                "The only true wisdom is in knowing you know nothing. – Socrates",
                "Happiness depends upon ourselves. – Aristotle"];	        // Creates an array includes 5 aphorisms

var aphorismsIndex = Math.floor(Math.random()*aphorisms.length)
document.getElementById("answer").innerHTML = aphorisms[aphorismsIndex]

// End