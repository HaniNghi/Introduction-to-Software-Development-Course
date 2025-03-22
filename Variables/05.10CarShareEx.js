function calculateCosts() {
    var km = document.getElementById("kilometers").value
    var consump = document.getElementById("consumption").value
    var price = document.getElementById("price").value
    var part = document.getElementById("participants").value

    var costPer = km*(consump/100)*price/part
    var costPerFixed = costPer.toFixed(2)

    document.getElementById("answerId").innerHTML = "Fuel costs per participant is " + costPerFixed + " euros."
}