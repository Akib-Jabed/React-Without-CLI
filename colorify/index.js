const circle = document.querySelector('.circle')
const redBtn = document.querySelector('.red-btn')
const greenBtn = document.querySelector('.green-btn')
const blueBtn = document.querySelector('.blue-btn')
const randomBtn = document.querySelector('.random-btn')


function getRandomNumber() {
    return Math.floor(Math.random() * 255)
}

function generateRandomColor() {
    const red = getRandomNumber()
    const green = getRandomNumber()
    const blue = getRandomNumber()

    return `rgb(${red}, ${green}, ${blue})`
}

function paint(color) {
    circle.style.backgroundColor = color;
}

redBtn.addEventListener('click', () => paint(`rgb(255, 0, 0)`))
greenBtn.addEventListener('click', () => paint(`rgb(0, 255, 0)`))
blueBtn.addEventListener('click', () => paint(`rgb(0, 0, 255)`))
randomBtn.addEventListener('click', () => paint(generateRandomColor()))
