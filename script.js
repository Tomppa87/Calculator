// operator functions
let sum = function(num1, num2) {
    return num1 + num2;    
}
let subtract = function(num1, num2) {
    return num1-num2;
}
let multiply = function(num1,num2) {
    return num1*num2;
}
let divide = function(num1, num2) {
    return num1/num2;
}
const container = document.getElementsByClassName("container")
const numContainer = document.getElementById("numberContainer")
const opContainer = document.getElementsByClassName("operatorContainer")

for (i=0; i<10; i++) {
    const numBtn = document.createElement("button")
    const numTxt = document.createTextNode(i+"")
    numBtn.appendChild(numTxt);
    numBtn.classList.add("numBtn")
    numBtn.id ="numBtn"+i
    //console.log(numBtn);
    numContainer.appendChild(numBtn);
}

let buttons = document.querySelectorAll("button")
//buttons.children.style.fontSize = "large"

let firstOperation
let secondOperation
let thirdOperation

function operate(operator,firstNum, secondNum) {
    if (operator === "+"){
        return sum(firstNum,secondNum)        
    }   else if (operator === "-") {
        return subtract(firstNum,secondNum)
    }   else if (operator === "*") {
        return multiply(firstNum,secondNum)
    }   else if (operator === "/") {
        return divide(firstNum,secondNum)
    }   else {
        return "ERROR"
    }    
}
