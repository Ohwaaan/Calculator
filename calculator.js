console.log(operate(1,2,'*'))

let first;
let operator;
let second;

console.log(add(12,3))


function add (a,b){
    return a + b 
}

function substract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

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

let one = document.querySelector('.one')
one.addEventListener('click', function(){console.log('sdfsdf')})
