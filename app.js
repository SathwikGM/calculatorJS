
// Selecting elements
const numberBtn = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll(".operation");
const equalsBtn = document.querySelector(".equals");
const previousResult = document.querySelector(".previous-result");
const currentResult = document.querySelector(".current-result");
const clearBtn = document.querySelector(".data-clear");
const deleteBtn = document.querySelector(".data-delete");



const display = (event) => {
    currentResult.innerText = event.target.innerText;
    console.log(event.target.innerText)
}
numberBtn.forEach(btn => {
    btn.addEventListener('click', display);
});

