// Get the output element by its ID
let output = document.getElementById('output');

// Function to append values to the output
function appendToProblem(value) {
    output.innerText += value; // Append the provided value to the current output
}

// Function to perform the calculation
function calculate() {
    let problem = output.innerText; // Retrieve the current value of the output
    let expression = problem.match(/(-?\d+(\.\d+)?|[*+/-])/g); // Match numbers and operators in the expression
    let result = parseFloat(expression[0]); // Initialize the result with the first number

    // Iterate through the expression, performing operations based on the operators
    for (let i = 1; i < expression.length; i += 2) {
        let operator = expression[i]; // Current operator
        let operand = parseFloat(expression[i + 1]); // Next operand

        // Check the operator and perform the corresponding operation
        if (operator === '*') {
            result *= operand; // Multiply the result by the operand
        } else if (operator === '/') {
            result /= operand; // Divide the result by the operand
        } else if (operator === '+') {
            result += operand; // Add the operand to the result
        } else if (operator === '-') {
            result -= operand; // Subtract the operand from the result
        }
    }

    output.innerText = result.toString(); // Display the final result as a string
}
// Subtraction operation is not working properly, and the reason is not known

function clearScreen(){
    output.innerText = "";
}