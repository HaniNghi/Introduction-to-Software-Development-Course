function calculateBMI() {
    // assign input field values into a variables & caculate BMI
    var weight = Number(document.getElementById("weight").value)
    var height = Number(document.getElementById("height").value)
    var bmi =  weight / (height/100.0 * height/100.0)
    bmiFixed = bmi.toFixed(2)
    var outputText
    // if bmi <= 18.4 output Weight less than normal weight
    if (bmiFixed <= 18.4) {
        outputText = "Body Mass Index (BMI) is "+ bmiFixed + " (Weight less than normal weight)"
    } else if (bmiFixed <=24.9) {
        outputText = "Body Mass Index (BMI) is "+ bmiFixed + " (Normal weight)"
    } else {
        outputText = "Body Mass Index (BMI) is "+ bmiFixed + " (Overweight)"
    }

    // write the answer to the web page DOM, in the answer div, as the content
    document.getElementById("answer").innerHTML = outputText
  }