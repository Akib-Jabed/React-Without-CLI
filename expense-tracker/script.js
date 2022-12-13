const balanceElement = document.querySelector('#balance')
const moneyPlusElement = document.querySelector('#money-plus')
const moneyMinusElement = document.querySelector('#money-minus')
const listElement = document.querySelector('#list')
const textInputElement = document.querySelector('#text')
const amountInputElement = document.querySelector('#amount')
const formElement = document.querySelector('#form')

let transactions = localStorage.getItem('transactions') !== null ? JSON.parse(localStorage.getItem('transactions')) : [];

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function updateAmount() {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    const income = amounts.filter(amount => amount > 0).reduce((acc, item) => acc + item, 0).toFixed(2);
    const expense = amounts.filter(amount => amount < 0).reduce((acc, item) => acc + item, 0).toFixed(2);

    balanceElement.textContent = `$${total}`;
    moneyPlusElement.textContent = `$${income}`;
    moneyMinusElement.textContent = `$${expense}`;
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const list = document.createElement('li');
    list.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    list.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>`
    listElement.appendChild(list)
}

function generateId() {
    return Math.floor(Math.random() * 100000000);
}

function addTransaction(event) {
    event.preventDefault();
    if (textInputElement.value.trim() === '' || amountInputElement.value.trim() === '') {
        alert('Please add both text and amount')
    } else {
        const transaction = {
            id: generateId(),
            text: textInputElement.value,
            amount: +amountInputElement.value
        }
        addTransactionDOM(transaction);
        transactions.push(transaction);
        updateLocalStorage();
        updateAmount();
        textInputElement.value = '';
        amountInputElement.value = '';
    }
}

function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    init();
}

function init() {
    listElement.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateAmount();
}

init();

formElement.addEventListener('submit', addTransaction);