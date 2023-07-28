const jokeEl = document.querySelector('.joke')
const button = document.querySelector('.btn')
const getAnotherJoke = () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => jokeEl.innerHTML = data.joke)
}

// get a joke at very beginning on page load
getAnotherJoke()

button.addEventListener('click', getAnotherJoke)


