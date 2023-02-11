// Selecting elements
const numberBtn = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll(".operation");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".data-clear");
const deleteBtn = document.querySelector(".data-delete");
let previousNumDisplay = document.querySelector(".previous-result");
let currentNumDisplay = document.querySelector(".current-result");

let current = '';
let previous = '';
let operation = undefined;

//  Operation
const selectOperation = (op) => {
    operation = op;
    if (current === '') return;
    if (previous !== '') {
        compute()
    }
    previous = current;
    current = '';
}

// Computing

const compute = () => {
    let result;
    const numOne = parseFloat(previous);
    const numTwo = parseFloat(current);

    if (isNaN(numOne) || isNaN(numTwo)) return

    if (operation === "+") {
        result = numOne + numTwo;
    }
    else if (operation === "−") {
        result = numOne - numTwo;
    }
    else if (operation === "×") {
        result = numOne * numTwo;
    }
    else if (operation === "÷") {
        result = numOne / numTwo;
    }

    current = result;
    operation = undefined;
    previous = '';
    display();
}

//  To clear the result
const clear = () => {
    current = '';
    previous = '';
    display();
}

// To delete the last number
const deleteNum = () => {
    current = current.slice(0, -1);
    display();
}

const append = (number) => {
    if (number === '.' && current.includes('.')) return;
    current = current.toString() + number.toString();
}
// Display Function
const display = () => {
    currentNumDisplay.innerText = current;
    previousNumDisplay.innerText = previous;
}


// All the Event Listeners

// Event listener for number buttons
numberBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        append(btn.innerText);
        display()
    });
});

// Event listener for operation buttons
operationBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        selectOperation(btn.innerText);
        display();
    });
})

// Event listener for clearing
clearBtn.addEventListener('click', clear);

//  Event listener for deleting
deleteBtn.addEventListener('click', deleteNum);

// Event listener for equal

equalsBtn.addEventListener('click', () => {
    compute();
    display();
});

