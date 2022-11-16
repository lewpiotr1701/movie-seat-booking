const hallContainer = document.querySelector(".hall-container");
const seatsAll = document.querySelectorAll(".row .seat");
const seatsAvailable = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.querySelector("#movie");

populateUI();

updateSelectedInfo();

let ticketPrice = parseInt(movieSelect.value, 10);

// Mark selected seat with .selected class
function selectSeat(e) {

    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");

        updateSelectedInfo();

    }
}

// Update count and total
function updateSelectedInfo() {

    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const selectedSeatsIndex = [...selectedSeats].map(function (seat) {
        return [...seatsAll].indexOf(seat);
    });

    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatsIndex))

    count.innerText = selectedSeats.length;

    const ticketPrice = parseInt(movieSelect.value, 10);

    total.innerText = selectedSeats.length * ticketPrice;

}

// Save selected movie index and price into Local Storage
function setMovieData(movieIndex, moviePrice) {

    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);

}

// Get data from Local Storage and populate UI
function populateUI() {

    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    // Check if something is in Local Storage && and if it is check if it is not an empty array
    if (selectedSeats !== null && selectedSeats.length > 0) {

        selectedSeats.forEach((seatIndex) => {
            [...seatsAll][seatIndex].classList.add("selected");
        });

    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

}

// Add event listener to hallContainer because
// this way it will not be neccessary to add event listener to each seat
// but only to the seat that was clicked on
hallContainer.addEventListener("click", selectSeat);

// Movie select event
movieSelect.addEventListener("change", e => {
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedInfo();
});