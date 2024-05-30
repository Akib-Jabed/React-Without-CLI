const button = document.querySelector('.button')
const jokeContainer = document.querySelector('.joke')

const getAnotherJoke = () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config)
    .then(resp => resp.json())
    .then(data => jokeContainer.innerHTML = data.joke)
}

button.addEventListener('click', getAnotherJoke)

getAnotherJoke()