// 09.array_example_2.js JavasScript code
var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"]

function getBloodTypes(){
    // Assign blood value
    var bloodInput = document.getElementById("txtValue").value
    // Assign amount equal count in count function
    var amount = count(bloodInput)
    // Caculate percentage of amount of times bloodInput exist in bloodTypes
    var percent = (amount/bloodTypes.length)*100
    // print outputText on screen
    var outputText = ""
        //Check if that bloodInput is in bloodTypes or not
        if (bloodTypes.includes(bloodInput)){
            outputText = `${bloodInput} ${percent} percent`
        } else {
            outputText = "You need to insert one of these blood types (A+, O-, O+, AB+)"
        }
    document.getElementById("divOutput").innerHTML = outputText

    //Delete input bar
    document.getElementById("txtValue").value = ""
}

function count(value){
    //Set count at 0
    var count = 0
    //Loops through bloodTypes
    for (var i=0; i < bloodTypes.length; i++ ) {
        //if bloodInput equal value at index
        if (value == bloodTypes[i]){
            //Count plus 1
            count = count + 1
        }
    }
    return count
}
// End

