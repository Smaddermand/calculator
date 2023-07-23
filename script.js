


let number1 = 0;
let number2 = 0;
let operatorSelection = "";
let displayValue ="";
let resultFlag = false;



// Get all the buttons with the class "btn"
const buttons = document.querySelectorAll('.btn');

// Get the output div element
const outputDiv = document.getElementById('output'); 


// Function to handle button click
function handleButtonClick(event) {
  // Get the clicked button
  const clickedButton = event.target;

  // Get the text content of the clicked button
  const buttonText = clickedButton.textContent;

  // Display the text content in the output div
  displayOutput(buttonText);
}

// Function to display the output in the output div
function displayOutput(text) {
  // If 'AC' is pressed, clear the output div
  if (text === 'AC') {
    outputDiv.textContent = '';
    number1 = '';
    number2 = '';
    resultFlag = false;
  } else if (text === '+' || text === '-' || text === '/' || text === '*'){
    operatorSelection = text;
    number1 = outputDiv.textContent;
    outputDiv.textContent = '';
    resultFlag = false;
  } else if(text === '='){
    //operate
    number2 = outputDiv.textContent;
    number1 = Number(number1);
    number2 = Number(number2);
    outputDiv.textContent = operate(number1, number2, operatorSelection);
    number1 = number2;
    number2 = 0;
    resultFlag = true;

  } else  {
    // Otherwise, append the text to the existing content
    if(!resultFlag){
        outputDiv.textContent += text;
    }
  }

}

// Attach click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});


//======OPERATOR FUNCTIONS======

const operate = function(a, b, operator){
    if(operator === "+"){
        return add(a, b);        
    } else if (operator === "-"){
        return subtract(a, b);
    } else if (operator === "*"){
        return multiply(a, b);
    } else if (operator === "/"){
        return divide(a, b);
    } else {
        return "SYNTAX ERROR"
    }
};

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};


