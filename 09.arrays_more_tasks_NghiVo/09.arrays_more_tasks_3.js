//Creat 2 empty arrays for names and ages
var names =[]
var ages =[]
//Add variable outputText as string
var outputText = ""

//When users click save, screen will display number of members
function clubMembersArray() {
    //Assign name
    var name = document.getElementById("name").value
    //Add new name into names
    names.push(name)
    //Assign age
    var age = document.getElementById("age").value
    //Add new age into ages
    ages.push(age)
    //Print on screen quantity of members
    outputText = `${names.length} members`
    document.getElementById("answer1").innerHTML = outputText
    document.getElementById("name").value = ""
    document.getElementById("age").value = ""
    document.getElementById("name").focus()
}

//When users click Show Minors, screen will display list of minors (name and age) in club members
function showMinors(){
    let listOfMinors = ""
    for (let i=0; i<ages.length; i++){
    //If member has age under 18, add member's name and age into list of minors
        if (ages[i] < 18){
            listOfMinors = listOfMinors + `${names[i]}, ${ages[i]} years <br>`
        }
        document.getElementById("answer2").innerHTML = listOfMinors
    }
}

//When users click Show Adults, screen will display list of aldults (name and age) in club members
function showAdults(){
    let listOfAdults = ""
    for (let i=0; i<ages.length; i++){
    //If member has age above or equal 18, add member's name and age into list of adults
        if (ages[i] >= 18){
            listOfAdults = listOfAdults + `${names[i]}, ${ages[i]} years <br>`
        }
        document.getElementById("answer2").innerHTML = listOfAdults
    }
}

function showYoungestMember(){
    let youngest = ages[0]
    for (let i=0; i < ages.length; i++){
        console.log('first loop i with value', i)
        for (let x=i; x < ages.length; x++){
            console.log('second loop with x', x)
            if(ages[x] < ages[x+1]){
                youngest = ages[x]
                console.log("insideloop",youngest)
                // 'age[x]'. age[x], 'ages[x+1]', ages[x+1])
            } else {
                youngest = ages[x+1]

            }
        }
    }
    console.log(youngest)
}