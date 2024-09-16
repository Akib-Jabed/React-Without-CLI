const counterEl = document.querySelector('.counter');
const counterValueEl = document.querySelector('.counter_value');
const increaseBtnEl = document.querySelector('.counter_button--increase');
const decreaseBtnEl = document.querySelector('.counter_button--decrease');
const resetBtnEl = document.querySelector('.counter_reset_button');
const counterTitleEl = document.querySelector('.counter_title');

function resetCounter() {
    counterValueEl.textContent = 0;
    counterTitleEl.textContent = "Fancy Counter"
    increaseBtnEl.disabled = false;
    decreaseBtnEl.disabled = false;
}
resetBtnEl.addEventListener('click', resetCounter);

function incrementCounter() {
    const currentValue = +counterValueEl.textContent;
    let newValue = currentValue + 1;
    if (newValue > 5) {
        newValue = 5;
        counterTitleEl.textContent = "Limit Exceed!!"
        increaseBtnEl.disabled = true;
        decreaseBtnEl.disabled = true;
    }
    counterValueEl.textContent = newValue;
}
increaseBtnEl.addEventListener('click', incrementCounter);

function decrementCounter() {
    const currentValue = +counterValueEl.textContent;
    let newValue = currentValue - 1;
    if (newValue < 0) {
        newValue = 0;
    }
    
    counterValueEl.textContent = newValue;
}
decreaseBtnEl.addEventListener('click', decrementCounter);

document.addEventListener('keydown', incrementCounter);