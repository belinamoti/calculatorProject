
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


// *************************************************************************

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

// *************************************************************

// //// STEP 3 - Add decimal

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

// function addDecimal() {
//     if (!calculatorDisplay.textContent.includes('.')) { // if the calculator does not include the decimal point
//         calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
//     }

// }

// // Now Add event listener for numbers, operators, decimal buttons

// inputBtns.forEach((inputBtn)=> {
//     if (inputBtn.classList.length === 0) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//     } else if (inputBtn.classList.contains('operator')) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//     } else if (inputBtn.classList.contains('decimal')) {
//         inputBtn.addEventListener('click', () => addDecimal());
//     }
// })


// // STEP 4 STORE THE VALUES TO USE THE OPERATORS

// let firstValue = 0;
// let operator = '';
// let awaitingNextValue = false;

// function sendNumberValue(number) {
//     // IF THE CURRENT DISPLAY IS 0, REPLACE IT, IF NOT ADD NUMBER
//     if (awaitingNextValue === true) {
//         calculatorDisplay.textContent = number;
//         awaitingNextValue = false;
//     } else {
//         const displayValue = calculatorDisplay.textContent;
//         if (displayValue === '0' ) {
//             calculatorDisplay.textContent = number;
//          } else {
//              calculatorDisplay.textContent += number;
//             }
        
//     }
    
// }

// //// Reset all display values , on reset(C) click

// function resetAll() {
//     firstValue = 0;
//     operator = '';
//     awaitingNextValue = false;
//     calculatorDisplay.textContent = '0';
// }
// clearBtn.addEventListener('click', resetAll);

// function addDecimal() {

//     // now make sure no decimal . is added after we already clicked on a value
//     if (awaitingNextValue === true) {
//         return;
//     }
//     // Adding decimal point
//     if (!calculatorDisplay.textContent.includes('.')) { // if the calculator does not include the decimal point
//         calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
//     }

// }

// // Now Add event listener for numbers, operators, decimal buttons

// function useOperator(operator) {
//     const currentValue = Number(calculatorDisplay.textContent);
//     // Assign firstValue if no Value
//     if (!firstValue) {
//         firstValue = currentValue;
//     } else {
//         console.log('currentValue', currentValue);
//     }

//     // READY FOR NEXT VALUE TO STORE OPERATOR
//     awaitingNextValue = true;
//     operatorValue = operator;
//     console.log('firstValue', firstValue);
//     console.log('operator', operatorValue);

// }

// inputBtns.forEach((inputBtn)=> {
//     if (inputBtn.classList.length === 0) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//     } else if (inputBtn.classList.contains('operator')) {
//         inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
//     } else if (inputBtn.classList.contains('decimal')) {
//         inputBtn.addEventListener('click', () => addDecimal());
//     }
// })


// // STEP 5 - NOW LET'S MAKE OUR CALCULATOR TO TAKE ONLY ONE OPERATOR AT A TIME

// let firstValue = 0;
// let operatorValue = '';
// let awaitingNextValue = false;

// function sendNumberValue(number) {
//     // IF THE CURRENT DISPLAY IS 0, REPLACE IT, IF NOT ADD NUMBER
//     if (awaitingNextValue === true) {
//         calculatorDisplay.textContent = number;
//         awaitingNextValue = false;
//     } else {
//         const displayValue = calculatorDisplay.textContent;
//         if (displayValue === '0' ) {
//             calculatorDisplay.textContent = number;
//          } else {
//              calculatorDisplay.textContent += number;
//             }
        
//     }
    
// }

// //// Reset all display values , on reset(C) click

// function resetAll() {
//     firstValue = 0;
//     operator = '';
//     awaitingNextValue = false;
//     calculatorDisplay.textContent = '0';
// }
// clearBtn.addEventListener('click', resetAll);

// function addDecimal() {

//     // now make sure no decimal . is added after we already clicked on a value
//     if (awaitingNextValue === true) {
//         return;
//     }
//     // Adding decimal point
//     if (!calculatorDisplay.textContent.includes('.')) { // if the calculator does not include the decimal point
//         calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
//     }

// }

// // Now Add event listener for numbers, operators, decimal buttons

// function useOperator(operator) {
//     const currentValue = Number(calculatorDisplay.textContent);
    
//     // PREVENT MULTIPLE OPERATORS AT A TIME
//     if (operatorValue && awaitingNextValue === true) {
//         return;
//     }

//     // Assign firstValue if no Value is added
//     if (!firstValue) {
//         firstValue = currentValue;
//     } else {
//         console.log('currentValue', currentValue);
//     }

//     // READY FOR NEXT VALUE TO STORE OPERATOR
//     awaitingNextValue = true;
//     operatorValue = operator;
//     console.log('firstValue', firstValue);
//     console.log('operator', operatorValue);

// }

// inputBtns.forEach((inputBtn)=> {
//     if (inputBtn.classList.length === 0) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
//     } else if (inputBtn.classList.contains('operator')) {
//         inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
//     } else if (inputBtn.classList.contains('decimal')) {
//         inputBtn.addEventListener('click', () => addDecimal());
//     }
// })


// // STEP 6 - Now make the calculation

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
    // IF THE CURRENT DISPLAY IS 0, REPLACE IT, IF NOT ADD NUMBER
    if (awaitingNextValue === true) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        if (displayValue === '0' ) {
            calculatorDisplay.textContent = number;
         } else {
             calculatorDisplay.textContent += number;
            }
        
    }
    
}

//// Reset all display values , on reset(C) click

function resetAll() {
    firstValue = 0;
    operator = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}
clearBtn.addEventListener('click', resetAll);

function addDecimal() {

    // now make sure no decimal . is added after we already clicked on a value
    if (awaitingNextValue === true) {
        return;
    }
    // Adding decimal point
    if (!calculatorDisplay.textContent.includes('.')) { // if the calculator does not include the decimal point
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }

}

// Calculate first and second values depending on operator
// create a calculate object with all the operators behavior
const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

    '=': (firstNumber, secondNumber) => secondNumber,

};


// Now Add event listener for numbers, operators, decimal buttons

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    
    // PREVENT MULTIPLE OPERATORS AT A TIME
    if (operatorValue && awaitingNextValue === true) {
        operatorValue = operator; // this line allows using operator on the already existing result
        return;
    }

    // Assign firstValue if no Value is added
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log(firstValue, operatorValue, currentValue);
        const calculation = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.textContent = calculation; // displays result of our calculation
        console.log('Result =', calculation);
        firstValue = calculation; // sets the result of our calculation as the first value so that we can add on it
    }

    // READY FOR NEXT VALUE TO STORE OPERATOR
    awaitingNextValue = true;
    operatorValue = operator;
    

}

inputBtns.forEach((inputBtn)=> {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
})