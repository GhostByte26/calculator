//User input for numbers and operation symbol
const userInput = prompt("Please enter the first number for arithmetic operations:");
const numberValue = Number(userInput);

const userSymbol = prompt("Please enter the arithmetic operation symbol (+, -, *, /):");

const userInput2 = prompt("Please enter the second number for arithmetic operations:");
const numberValue2 = Number(userInput2);

//Validation of user input

switch (userSymbol) {
    case '+':
        console.log(`The addition result is: ${add(numberValue, numberValue2)}`);
        break;
    case '-':
        console.log(`The subtraction result is: ${subtraction(numberValue, numberValue2)}`);
        break;
    case '*':
        console.log(`The multiplication result is: ${multiplication(numberValue, numberValue2)}`);
        break;
    case '/':
        const divisionResult = division(numberValue, numberValue2);
        if (typeof divisionResult === "string") {
            console.log(divisionResult);
        } else {
            console.log(`The division result is: ${divisionResult}`);

        }
        break;
    default:
        console.log("Invalid operation symbol. Please try again.");

}

// Functions for arithmetic operations

function add(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 === 0) {
        console.log("Can't divide by zero");
    } else {
        return num1 / num2;
    }

}



