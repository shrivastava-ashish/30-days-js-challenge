const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const input = document.getElementById('input');
const start = document.getElementById('start');
const reset = document.getElementById('reset');

function startCountdown() {
    let countdown;
    const targetDate = new Date(input.value).getTime();
    if (isNaN(targetDate)) {
        alert('Please enter a valid date and time.');
        return;
    }
    countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance < 0) {
            clearInterval(countdown);
            alert('Countdown finished!');
            return;
        }
        days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds.innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
}

start.addEventListener('click', startCountdown);
reset.addEventListener('click', () => {
    days.innerText = '0';
    hours.innerText = '0';
    minutes.innerText = '0';
    seconds.innerText = '0';
    clearInterval(countdown);
});