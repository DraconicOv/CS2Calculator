
var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  operator = document.querySelectorAll('.operators div'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  resultDisplayed = false; // flag to keep an eye on what output is displayed

var currentValue = "";
var currentOperator = "";

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {
    input.innerHTML += e.target.innerHTML;
  });
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(number1, operator, number2){
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
    switch(operator){
        case '+':
            console.log(add(number1, number2));
            return add(number1, number2);
            break;
        case '-':
            return subtract(number1, number2);
            break;
        case '×':
            return multiply(number1, number2);
            break;
        case '÷':
            return divide(number1, number2);
            break;
    }
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {
    if(currentValue === ""){
        currentValue = input.innerHTML;
        currentOperator = e.target.innerHTML;
        input.innerHTML = "";
    } else {
        currentValue = operate(currentValue, currentOperator, parseFloat(input.innerHTML));
        currentOperator = e.target.innerHTML;
        input.innerHTML = "";
    }
  });
}

result.addEventListener("click", function() {
  console.log(currentValue);
  console.log(currentOperator);
  console.log(input.innerHTML);
    currentValue = operate(currentValue, currentOperator, parseFloat(input.innerHTML));
    input.innerHTML = currentValue;
    currentValue = "";
    currentOperator = "";
});