const textareaEl = document.querySelector('.textarea');
const wordsNumberEl = document.querySelector('.stat-number--words');
const charactersNumberEl = document.querySelector('.stat-number--characters');
const facebookNumberEl = document.querySelector('.stat-number--facebook');
const twitterNumberEl = document.querySelector('.stat-number--twitter');

function inputHandler() {
    if (textareaEl.value.includes('<script>')) {
        alert("You can't use <script> in your text");
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }

    let numberOfWords = 0;
    if (textareaEl.value.length > 0) {
        numberOfWords = textareaEl.value.split(' ').length;
    }

    const numberOfCharacters = textareaEl.value.length;
    const twitterCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 280 - numberOfCharacters;

    if (twitterCharactersLeft < 0) {
        twitterNumberEl.classList.add('stat-number--limit');
    } else {
        twitterNumberEl.classList.remove('stat-number--limit');
    }

    if (facebookCharactersLeft < 0) {
        facebookNumberEl.classList.add('stat-number--limit');
    } else {
        facebookNumberEl.classList.remove('stat-number--limit');
    }

    wordsNumberEl.textContent = numberOfWords;
    charactersNumberEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
} 

textareaEl.addEventListener('input', inputHandler);