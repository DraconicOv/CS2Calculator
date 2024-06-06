
var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  operator = document.querySelectorAll('.operators div'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  resultDisplayed = false; // flag to keep an eye on what output is displayed

var currentValue = "";
var currentOperator = "";
var newEquation = false;
var float = false;
for (var i = 0; i < number.length; i++) {
  if (number[i].innerHTML === "C") {
    number[i].addEventListener("click", function() {
      input.innerHTML = "";
      currentValue = "";
      currentOperator = "";
    });
    continue;
  }
  else if (number[i].innerHTML === ".") {
    number[i].addEventListener("click", function() {
      if (!float) {
        if (input.innerHTML === "") {
          input.innerHTML = "0";
        }
        input.innerHTML += ".";
        float = true;
      }
    });
    continue;
  }
  number[i].addEventListener("click", function(e) {
    if (newEquation){input.innerHTML = e.target.innerHTML; newEquation = false;}
    else{    input.innerHTML += e.target.innerHTML;   }
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
    if (b === 0) {
      alert("blows up access with mind");
      document.body.remove(document.getElementById("main"));
      return 0;
    }
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
    float = false;
    if(currentValue === ""){
        currentValue = input.innerHTML;
        currentOperator = e.target.innerHTML;
        input.innerHTML = "";
    } else {
        currentValue = operate(currentValue, currentOperator, parseFloat(input.innerHTML));
        currentOperator = e.target.innerHTML;
        input.innerHTML = Math.round((currentValue+Number.EPSILON)*1000000)/1000000;;
        newEquation = true;
    }
  });
}

result.addEventListener("click", function() {
    currentValue = operate(currentValue, currentOperator, parseFloat(input.innerHTML));
    if (currentValue === undefined || isNaN(currentValue)){
        currentValue = "";
    }
    input.innerHTML = Math.round((currentValue+Number.EPSILON)*1000000)/1000000;
    currentValue = "";
    currentOperator = "";
    newEquation = true;
    float = false;
});