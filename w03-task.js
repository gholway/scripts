/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
function addNumbers (add1, add2){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);
}
/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}
function subtractNumbers (subtract1, subtract2){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
}

/* Arrow Function - Multiply Numbers */
function multiply (number1, number2){
    return number1 * number2;
}
function multiplyNumbers (factor1, factor2){
    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);
    document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
}

/* Open Function Use - Divide Numbers */
function divide (number1, number2){
    return number1 / number2;
}
function divideNumbers (dividend, divisor){
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
}

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
Array(document.querySelector('#array').value);
/* Output Odds Only Array */
let odds = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Evens Only Array */
let evens = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 1);
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);
document.querySelector('#sumOfArray').innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map(number => number * 2);
sumOfMultiplied = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2) + numbersArray.reduce((sum, number) => sum + number);