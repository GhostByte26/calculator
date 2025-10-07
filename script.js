// User input is always a string
const userInput = prompt("Please enter the first number for arithmetic operations:");
const numberValue = Number(userInput);

const userInput2 = prompt("Please enter the second number for arithmetic operations:");
const numberValue2 = Number(userInput2);

console.log("=== User Input Arithmetic Symbols ===");
const userSymbol = prompt("Please enter the arithmetic operation symbol (+, -, *, /):");
//variable declarations for arithmetic operations
let addition, subtraction, multiplication, division;

if (numberValue2 === 0 && userSymbol === "/") {
    console.log("Division by zero is not allowed please `enter a valid number");
} else {
    addition = numberValue + numberValue2;
    subtraction = numberValue - numberValue2;
    multiplication = numberValue * numberValue2;
    division = numberValue / numberValue2;
}

//Switch case to handle different arithmetic operations based on user input
switch (userSymbol) {
    case "+":
        console.log(`The addition of ${numberValue} and ${numberValue2} is: ${numberValue + numberValue2}`);
        break;
    case "-":
        console.log(`The subtraction of ${numberValue} and ${numberValue2} is: ${numberValue - numberValue2}`);
        break;
    case "*":
        console.log(`The multiplication of ${numberValue} and ${numberValue2} is: ${numberValue * numberValue2}`);
        break;
    case "/":
        if (numberValue2 === 0) {
            console.log("Cannot divide by zero.");
        } else {
            console.log(`The division of ${numberValue} and ${numberValue2} is: ${numberValue / numberValue2}`);
        }
        break;
    default:
        console.log("Invalid operation symbol. Please use +, -, *, or /");
}



