var speciesArray = ["Pike", "Salmon", "Salmon", "Trout"];
var lengths = [40, 71, 76, 22];
var weights = [4.925, 3.675, 5.400, 1.510];

// ----------------------------------------------------------------------------
function addFish() {
  //Assign variables
  let txtSpecies = document.getElementById("txtSpecies").value
  let txtLength = document.getElementById("txtLength").value
  let txtWeight = document.getElementById("txtWeight").value

  //Check if input field is empty
  if (txtSpecies == "" || txtLength == "" || txtWeight == "") {
    document.getElementById("pOutput1").innerHTML = `Error: do not leave input fields empty`
  } else {
    //Check if weight and lenght' input fields are not NaN
    if (isNaN(txtLength) !== true && isNaN(txtWeight) !== true) {
      speciesArray.push(txtSpecies)
      lengths.push(txtLength)
      weights.push(txtWeight)

      document.getElementById("txtSpecies").value = ""
      document.getElementById("txtLength").value = ""
      document.getElementById("txtWeight").value = ""

    } else {
      // Print error
      document.getElementById("pOutput1").innerHTML = `Error: weight and length must be a number`
    }
  }
}

// ----------------------------------------------------------------------------
function listAllCatch() {
  var outputText = "";

  //Loop through array
  for (let i = 0; i < speciesArray.length; i++) {
    outputText += `Species of fish: ${speciesArray[i]}<br>Length: ${lengths[i]} cm<br>Weight: ${weights[i]} kg<br>`
  }

  document.getElementById("pOutput2").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function showAverageWeight() {
  var outputText = ""
  let totalWeight = 0
  let averageWeight = 0

  //Check if
  if (weights.length == 0) {
    outputText = `Error: There are no fish in array so cannot calculate average`
    console.log("if called")
  } else if (weights.length > 0) {
    for (let i = 0; i < weights.length; i++) {
      totalWeight += weights[i]
    }
    averageWeight = totalWeight / weights.length
    outputText = `Average weight is ${averageWeight.toFixed(2)} kg`
  }


  document.getElementById("pOutput3").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function findFish() {
  var outputText = "";
  let txtSpeciesSearched = document.getElementById("txtSpeciesSearched").value


  if (speciesArray.length > 0) {
  //Use loop to search through array to find
  for (let i = 0; i < speciesArray.length; i++) {
    //If input species match with one of species in array
    if (txtSpeciesSearched.toLowerCase() == (speciesArray[i]).toLowerCase()) {
      outputText = `${speciesArray[i]} has founded.<br>Length: ${lengths[i]} cm<br>Weight: ${weights[i]} kg`
      break //If can find species, stop the loop
    }
    else {
      outputText = `${txtSpeciesSearched} has not found`
    }
  }
} else {
  outputText = `There is no fish. Cannot find anything.`
}

  // Updating the View
  document.getElementById("pOutput4").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function maxWeightFreshmanWay() {
  var outputText = "";

  if(speciesArray.length > 0) {
    var maxWeight = -1
    var maxSpecies = "N/A"

    for(var i=0; i < speciesArray.length; i++) {
      if( maxWeight < weights[i]  ) {
        maxWeight = weights[i]
        maxSpecies = speciesArray[i]
      }
    }

    outputText = `Heaviest fish is ${maxSpecies}<br>Weight: ${maxWeight} kg`
  } else {
    outputText = `There is no fish. Do not have maximum weight.`;
  }

  // Updating the View
  document.getElementById("pOutput5").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function maxWeightUsingIndex() {
  var outputText = "";
  index = 0

  if (speciesArray.length > 0) {
    for (let i = 0; i < speciesArray.length; i++) {
      if (weights[index] <= weights[i]) {
        index = i
      }
    }
    outputText = `Heaviest fish is ${speciesArray[index]} <br>Length: ${lengths[index]} cm<br>Weight: ${weights[index]} kg`

  } else {
    outputText = `There is no fish. Do not have maximum weight.`
  }

  // Updating the View
  document.getElementById("pOutput5").innerHTML = outputText;
}

// ------------ library function for converting kg to lbs ---------------------
function convertKgToLbs(kilograms) {
  let pounds = 0.454 * kilograms
  return pounds
}



























// ----------------------------------------------------------------------------
function fishSpeciesReport() {
  // Read input
  var speciesSearched = document.getElementById("txtSpeciesSearched").value;
  var found = false;
  var count = 0;
  var outputText = "";

  for (var i = 0; i < speciesArray.length; i++) {
    if (speciesSearched === speciesArray[i]) {
      found = true;
      count++;
      outputText = outputText + speciesArray[i] + ": " + lengths[i]
        + "cm, " + weights[i] + "kg.<br />";
    }
  }

  if (found === false) {
    outputText = outputText + speciesSearched + " not found!";
  } else {
    outputText = outputText + count + " " + speciesSearched + "(s)";
  }

  // Updating the View
  document.getElementById("txtSpeciesSearched").value = "";
  document.getElementById("pOutput5").innerHTML = outputText;
}