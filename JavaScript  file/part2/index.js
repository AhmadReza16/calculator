const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
let operation;

function appendNumber(number) {
    if(number === "." && currDisplay.innerText.includes(".")) return;
    currDisplay.innerText += number;
}

function chooseOperations(operand) {
    if (currDisplay.innerText === "") return;
    if (prevDisplay.innerText !== "") {
        computer();
    }
    operation = operand;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText = "";
}
function clearDisplay() {
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
}
function computer(operands) {
    let result;
    const previousValue = parseFloat(prevDisplay.innerText);
    const currentValue  = parseFloat(currDisplay.innerText);

    if (isNaN(previousValue) || isNaN(currentValue))return;

    switch (operation){
        case "+":
            result= previousValue + currentValue;
            break;
        case "-":
            result= previousValue - currentValue;
            break;
        case "*":
            result= previousValue * currentValue;
            break;
        case "/":
            result= previousValue / currentValue;
            break;
        default:
            return;
    }

    currDisplay.innerText = result;
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendNumber(number.innerText);
    });
});

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        chooseOperations(operand.innerText);
    });
});
clearBtn.addEventListener("click", () => {
    clearDisplay();
})
equalBtn.addEventListener("click", () => {
    computer();
    prevDisplay.innerText = ""
})
delBtn.addEventListener("click" , () => {
    currDisplay.innerText = currDisplay.innerText.slice(0,-1);
})


