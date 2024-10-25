function appendToOutput(value) {
    document.getElementById("output").value += value;
}

function clearOutput() {
    document.getElementById("output").value = "";
}

function deleteLast() {
    let outputField = document.getElementById("output");
    outputField.value = outputField.value.slice(0,-1);
}

function calculate() {
    let expression = document.getElementById("output").value;

    try{
        let result = eval(expression);
        document.getElementById("output").value = result;
    }
    catch(error) {
        alert("Invalid input! Please enter a valid number.")
    }    
}