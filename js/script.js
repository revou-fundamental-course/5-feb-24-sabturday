var isCelsius = true;

function convert() {
    var input = parseFloat(document.getElementById("input-1").value);
    var result;
    if (isCelsius) {
        result = (input * 9/5) + 32;
        document.getElementById("calculation").value = input + " × (9/5) + 32 = " + result.toFixed(2);
    } else {
        result = (input - 32) * 5/9;
        document.getElementById("calculation").value = "(" + input + " - 32) × 5/9 = " + result.toFixed(2);
    }
    document.getElementById("input-2").value = result.toFixed(2);
}

function reverse() {
    isCelsius = !isCelsius;
    if (isCelsius) {
        document.getElementById('celsius-label').innerHTML = "Celsius (°C)";
        document.getElementById('fahrenheit-label').innerHTML = "Fahrenheit (°F)";
    } else {
        document.getElementById('celsius-label').innerHTML = "Fahrenheit (°F)";
        document.getElementById('fahrenheit-label').innerHTML = "Celsius (°C)";
    }
}

function reset() {
    document.getElementById("calc-form").reset();
}