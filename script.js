const hallContainer = document.querySelector(".hall-container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.querySelector("#movie");

const ticketPrice = parseInt(movieSelect.value, 10);

// Add event listener to hallContainer because
// this way it will not be neccessary to add event listener to each seat
// but only to the seat that was clicked on
hallContainer.addEventListener("click", selectSeat)

function selectSeat(e) {

    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
    }

}