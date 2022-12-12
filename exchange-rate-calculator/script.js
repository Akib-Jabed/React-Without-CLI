const currencyOneElement = document.getElementById('currency-one');
const amountOneElement = document.getElementById('amount-one'); 
const currencyTwoElement = document.getElementById('currency-two');
const amountTwoElement = document.getElementById('amount-two'); 
const swapButton = document.getElementById('swap');

function calculate() {
    const currencyOne = currencyOneElement.value;
    const currencyTwo = currencyTwoElement.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        const rate = data['rates'][currencyTwo];
        amountTwoElement.value = (Number(amountOneElement.value) * rate);
    });
}

currencyOneElement.addEventListener('change', calculate);
currencyTwoElement.addEventListener('change', calculate);
amountOneElement.addEventListener('input', calculate);
amountTwoElement.addEventListener('input', calculate);

swapButton.addEventListener('click', () => {
    const temp = currencyOneElement.value;
    currencyOneElement.value = currencyTwoElement.value;
    currencyTwoElement.value = temp;
    calculate();
})

calculate();
