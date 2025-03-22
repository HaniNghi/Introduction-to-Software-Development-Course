function tellInfractionFine() {
	var speedLimit = Number(document.getElementById("speedLimit").value)
    var drivingSpeed = Number(document.getElementById("drivingSpeed").value)

    if (speedLimit >=10 && speedLimit<=60) {
        if ((drivingSpeed - speedLimit) <=0) {
            document.getElementById("answer").innerHTML = "No speeding, no fine."
        } else if ((drivingSpeed - speedLimit) <=15 ) {
            document.getElementById("answer").innerHTML = "Infraction fine is 85 euros."
        } else if ((drivingSpeed - speedLimit) <=20) {
            document.getElementById("answer").innerHTML = "Infraction fine is 115 euros."
        } else if ((drivingSpeed - speedLimit) >20){
            document.getElementById("answer").innerHTML = "Income-based unit fine."
        }
    }
    else if (speedLimit >=70 && speedLimit<=120) {
        if ((drivingSpeed - speedLimit) <=0) {
            document.getElementById("answer").innerHTML = "No speeding, no fine."
        } else if ((drivingSpeed - speedLimit) <=15 ) {
            document.getElementById("answer").innerHTML = "Infraction fine is 70 euros."
        } else if ((drivingSpeed - speedLimit) <=20) {
            document.getElementById("answer").innerHTML = "Infraction fine is 100 euros."
        } else if ((drivingSpeed - speedLimit) >20) {
            document.getElementById("answer").innerHTML = "Income-based unit fine."
        }
    }

}