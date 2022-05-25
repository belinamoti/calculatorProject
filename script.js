
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');


// // STEP 1 - DISPLAY EACH VALUE ON CLICK

// function sendNumberValue(number) {
//     calculatorDisplay.textContent = number;
// }

// // Now Add event listener for numbers, operators, decimal buttons

// inputBtns.forEach((inputBtn)=> {
//     if (inputBtn.classList.length === 0) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//     } else if (inputBtn.classList.contains('operator')) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//     } else if (inputBtn.classList.contains('decimal')) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//     }
// })





// // //// STEP 2 - DO NOT REPLACE VALUE UNLESS IT'S 0. EXAMPLE, IF YOU PRESS 8 TWO TIMES IT SHOULD BE 88

// function sendNumberValue(number) {
//     // IF THE CURRENT DISPLAY IS 0, REPLACE IT, IF NOT ADD NUMBER

//     const displayValue = calculatorDisplay.textContent;
//     if (displayValue === '0' ) {
//         calculatorDisplay.textContent = number;
//     } else {
//         calculatorDisplay.textContent += number;
//     }
// }

// //// Reset display, reset on click

// function resetAll() {
//     calculatorDisplay.textContent = '0';
// }
// clearBtn.addEventListener('click', resetAll);


// // Now Add event listener for numbers, operators, decimal buttons

// inputBtns.forEach((inputBtn)=> {
//     if (inputBtn.classList.length === 0) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//     } else if (inputBtn.classList.contains('operator')) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//     } else if (inputBtn.classList.contains('decimal')) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//     }
// })


// //// STEP 3 - Add decimal

function sendNumberValue(number) {
    // IF THE CURRENT DISPLAY IS 0, REPLACE IT, IF NOT ADD NUMBER

    const displayValue = calculatorDisplay.textContent;
    if (displayValue === '0' ) {
        calculatorDisplay.textContent = number;
    } else {
        calculatorDisplay.textContent += number;
    }
}

//// Reset display, reset on click

function resetAll() {
    calculatorDisplay.textContent = '0';
}
clearBtn.addEventListener('click', resetAll);

function addDecimal() {
    if (!calculatorDisplay.textContent.includes('.')) { // if the calculator does not include the decimal point
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }

}

// Now Add event listener for numbers, operators, decimal buttons

inputBtns.forEach((inputBtn)=> {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
})