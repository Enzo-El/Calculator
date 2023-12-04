let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

//  This is the function to add the pressed button to the display panel.
function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

// This is the function for "clear".
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

//  This is the calculating function.
function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

//  This is the function for pressing the "Enter" and "Backspace" key.
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (!isNaN(key) || key === '.' || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearDisplay();
    }
});
