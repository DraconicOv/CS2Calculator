
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

