


let number1 = 0;
let number2 = 0;
let operator1 = "";

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
}


//======OPERATOR FUNCTIONS======

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


//============

let result = operate(2, 4, "+");
console.log(result);

let result2 = operate(2, 4, "-");
console.log(result2);

let result3 = operate(3, 7, "*");
console.log(result3);

let result4 = operate(6, 2, "/");
console.log(result4);