const hallContainer = document.querySelector(".hall-container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.querySelector("#movie");

let ticketPrice = parseInt(movieSelect.value, 10);

function selectSeat(e) {

    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");

        updateSelectedInfo();

    }
}

// Update count and total
function updateSelectedInfo() {

    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const allSeats = document.querySelectorAll(".row .seat");

    const selectedSeatsIndex = [...selectedSeats].map(function (seat) {
        return [...allSeats].indexOf(seat);
    });

    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatsIndex))

    count.innerText = selectedSeats.length;

    total.innerText = selectedSeats.length * ticketPrice;

}

// Save selected movie index and price into Local Storage
function setMovieData(index, price) {

    localStorage.setItem("selectedMovieIndex", index);
    localStorage.setItem("selectedMoviePrice", price);

}

// Add event listener to hallContainer because
// this way it will not be neccessary to add event listener to each seat
// but only to the seat that was clicked on
hallContainer.addEventListener("click", selectSeat);

// Movie select event
movieSelect.addEventListener("change", e => {
    ticketPrice = parseInt(movieSelect.value, 10);
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedInfo();
});