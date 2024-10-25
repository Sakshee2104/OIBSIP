function convertTemperature() {
    const tempInput = document.getElementById("tempInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const result = document.getElementById("result");

    if (tempInput === '') {
        result.textContent = "Please enter a temperature!";
        return;
    }

    let convertedTemp;
    if (unitSelect === "C") {
        // Convert Celsius to Fahrenheit
        convertedTemp = (tempInput * 9/5) + 32;
        result.textContent = `${tempInput} °C is equal to ${convertedTemp.toFixed(2)} °F`;
    } else {
        // Convert Fahrenheit to Celsius
        convertedTemp = (tempInput - 32) * 5/9;
        result.textContent = `${tempInput} °F is equal to ${convertedTemp.toFixed(2)} °C`;
    }
}
