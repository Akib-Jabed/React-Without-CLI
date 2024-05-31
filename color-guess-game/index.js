let pickedColor;
let numOfSquares = 6;
let colors = [];
const squares = document.querySelectorAll('.square');
const colorDisplay = document.querySelector('#color-display');
const messageDisplay = document.querySelector('#message');
const resetBtn = document.querySelector('#reset');
const modeBtns = document.querySelectorAll('.mode');
const h1 = document.querySelector('h1');


const init = () => {
    reset()
    modeChange()
    setupSquares()
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function () {
            let clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!"
                resetBtn.textContent = "Play Again?"
                changeColors(pickedColor)
                h1.style.background = pickedColor
            } else {
                this.style.background = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}

function modeChange() {
    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener('click', function() {
            modeBtns[0].classList.remove('selected');
            modeBtns[1].classList.remove('selected');
            modeBtns[2].classList.remove('selected');
            this.classList.add('selected')
            switch (this.textContent) {
                case 'Easy':
                    numOfSquares = 3;
                    break;
                case 'Hard':
                    numOfSquares = 9;
                    break;
                default:
                    numOfSquares = 6;
            }
            reset()
        })
    }
}

function reset() {
    colors = generateRandomColor(numOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = 'New Colors'
    messageDisplay.textContent = ""
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = 'block';
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = 'steelblue';
}

resetBtn.addEventListener('click', reset)

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    
    return `rgb(${red}, ${green}, ${blue})`;
}

function generateRandomColor(numOfSquares) {
    const colorArr = [];
    for (let i = 0; i < numOfSquares; i++) {
        colorArr.push(randomColor())
    }
    return colorArr;
}

init()