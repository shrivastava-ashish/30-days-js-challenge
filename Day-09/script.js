// script.js

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const inputEl = document.getElementById("input");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let countdown;
let targetDate;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(countdown);
        daysEl.innerHTML = `0<br><span>Days</span>`;
        hoursEl.innerHTML = `0<br><span>Hours</span>`;
        minutesEl.innerHTML = `0<br><span>Minutes</span>`;
        secondsEl.innerHTML = `0<br><span>Seconds</span>`;
        alert("Time’s up!");
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerHTML = `${days}<br><span>Days</span>`;
    hoursEl.innerHTML = `${hours}<br><span>Hours</span>`;
    minutesEl.innerHTML = `${minutes}<br><span>Minutes</span>`;
    secondsEl.innerHTML = `${seconds}<br><span>Seconds</span>`;
}

startBtn.addEventListener("click", () => {
    const inputValue = inputEl.value;
    if (!inputValue) {
        alert("Pick a date and time first, time traveler.");
        return;
    }

    targetDate = new Date(inputValue).getTime();
    clearInterval(countdown);
    updateCountdown();
    countdown = setInterval(updateCountdown, 1000);
});

resetBtn.addEventListener("click", () => {
    clearInterval(countdown);
    inputEl.value = "";
    daysEl.innerHTML = `<span>Days</span>`;
    hoursEl.innerHTML = `<span>Hours</span>`;
    minutesEl.innerHTML = `<span>Minutes</span>`;
    secondsEl.innerHTML = `<span>Seconds</span>`;
});