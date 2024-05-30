let first;
let operator;
let second;

function add(a,b)       {return a + b }
function substract(a,b) {return a - b;}
function multiply(a,b)  {return a * b;}
function divide(a,b)    {return a / b;}

function operate(left, right, operator)
{
    if(operator === '+')
        return add(left,right);    
    if(operator === '-')
        return substract(left,right);   
    if(operator === '*')
        return multiply(left,right);    
    if(operator === '/')
        return divide(left,right);
}

let numbers      = document.querySelectorAll('.number');
let displayValue = document.createElement('div');
let result       = document.querySelector('p');
let operators    = document.querySelectorAll('.operator');
let equal        = document.querySelector('.equal');

function printDisplayValue(num) {
    displayValue.textContent += num;
    result.appendChild(displayValue);
}

function makeStringIntoFirst(){
        first = Number(displayValue.textContent);
}

function clear(){
    result.removeChild(displayValue);
    displayValue.textContent = ''
}

function operatorPressed(value){
    makeStringIntoFirst();
    clear();
    printDisplayValue(value);
}

for(let i = 0;i<numbers.length; i++){
    numbers[i].addEventListener('click',   () => printDisplayValue(numbers[i].value))
}

for (let i = 0;i<operators.length;i++){
    operators[i].addEventListener('click', () => operatorPressed(operators[i].value))
}

equal.addEventListener('click', () => console.log(operate(first,1,'+')))
