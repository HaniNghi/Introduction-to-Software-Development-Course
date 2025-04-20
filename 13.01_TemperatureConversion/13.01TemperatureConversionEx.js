function convert() {
    let conversion = document.getElementById("conversion").value
    let temperature = Number(document.getElementById("temperature").value)
    let result

    if (conversion == "celsius") {
        result =  ( temperature - 32) * 5 / 9
    } else if (conversion) {
        result = ( temperature * 1.8) + 32
    }

    result = result.toFixed(0)
    document.getElementById("result").value = result
}