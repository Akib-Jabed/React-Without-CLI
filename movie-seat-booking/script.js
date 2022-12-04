const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const total = document.querySelector('#total')
const movieSelect = document.querySelector('#movie')

polpulateUI();

let ticketPrice = parseInt(movieSelect.value);

function updateSelectedSeatCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    
    const selectedSeatCount = selectedSeats.length;
    count.textContent = selectedSeatCount;
    total.textContent = selectedSeatCount * ticketPrice;
}

container.addEventListener('click', event => {
    if (event.target.classList.contains('seat') && !event.target.classList.contains('occupied')) {
        event.target.classList.toggle('selected')
        updateSelectedSeatCount();
    }
})

movieSelect.addEventListener('change', event => {
    ticketPrice = parseInt(event.target.value);
    localStorage.setItem('moviePrice', ticketPrice);
    localStorage.setItem('movieIndex', event.target.selectedIndex);
    updateSelectedSeatCount();
})

function polpulateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovie = localStorage.getItem('movieIndex');
    if (selectedMovie !== null) {
        movieSelect.selectedIndex = selectedMovie;
    }
}

updateSelectedSeatCount();
