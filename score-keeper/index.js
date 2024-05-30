const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}
let isGameOver = false;
let winningScore = 3;
const winningScoreSelection = document.querySelector('#playTo')
const resetButton = document.querySelector('#reset')
const updateScore = (player, opponent) => {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score
        if (player.score === winningScore) {
            isGameOver = true;
            player.button.disabled = true
            opponent.button.disabled = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
        }
    }
}

player1.button.addEventListener('click', () => updateScore(player1, player2))
player2.button.addEventListener('click', () => updateScore(player2, player1))

const reset = () => {
    for (let player of [player1, player2]) {
        player.score = 0
        player.button.disabled = false
        player.display.textContent = 0
        player.display.classList.remove('has-text-success', 'has-text-danger')
    }
}

resetButton.addEventListener('click', reset)

winningScoreSelection.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset()
})