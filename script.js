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
const displayBtn = document.getElementById("display")

for (i=0; i<10; i++) {
    const numBtn = document.createElement("button")
    const numTxt = document.createTextNode(i+"")
    numBtn.appendChild(numTxt);
    numBtn.classList.add("numBtn")
    numBtn.id ="numBtn"+i
    numContainer.appendChild(numBtn);
}
let equalsCount = 0;

let numButtons = document.querySelectorAll(".numBtn")
numButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", (e) => {
        if (secondOperation.length === 0 && equalsCount === 0) {
            firstOperation.push(button.innerHTML)
            displayBtn.innerText = firstOperation.join("")            
        }
        else {
            thirdOperation.push(button.innerHTML)
            displayBtn.innerText = displayBtn.innerText.concat(e.target.innerText)
        }         
    });
  });

let opButtons = document.querySelectorAll(".operatorBtn")
opButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        secondOperation.splice(0,1,button.innerHTML)
        displayBtn.innerText = displayBtn.innerText.concat(secondOperation.join(""))
        
      console.log(button.innerHTML);
    });
  });

  let equalBtn = document.getElementById("equalsBtn")
  equalBtn.addEventListener("click", () => {
    let initial = parseInt(firstOperation.join(""))
    let op = secondOperation.join("")
    let secondary = parseInt(thirdOperation.join(""));
    let result = operate(op,initial,secondary)
    displayBtn.innerText = result
    equalsCount += 1;
    firstOperation = [result]
    thirdOperation = [];    
  })

  let clearBtn = document.getElementById("clearBtn")
  clearBtn.addEventListener("click", () => {
    equalsCount = 0;
    firstOperation = [];
    secondOperation = [];
    thirdOperation = [];
    displayBtn.innerText = ""
  })

let firstOperation = [];
let secondOperation = [];
let thirdOperation = [];

function operate(operator,firstNum, secondNum) {
    if (operator === "+"){
        return sum(firstNum,secondNum)        
    }   else if (operator === "-") {
        return subtract(firstNum,secondNum)
    }   else if (operator === "*") {
        return multiply(firstNum,secondNum)
    }   else if (operator === "/") {
        if (secondNum === 0) {
            return "ERROR"
        } else {
            return divide(firstNum,secondNum)
        }        
    }   else {
        return "ERROR"
    }    
}
