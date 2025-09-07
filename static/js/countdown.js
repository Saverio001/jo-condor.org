const eolDate = new Date(document.getElementById('countdown').getAttribute("data-countdown") ).getTime();
function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eolDate - now;
        if (timeLeft <= 0) {
            timeLeft = 0
        }
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        const daysText = days === 1 ? 'day' : 'days';
        const hourText = hours === 1 ? 'hour' : 'hours';
        const minuteText = minutes === 1 ? 'minute' : 'minutes';
        document.getElementById('countdown').innerHTML = 
            `${days} ${daysText} ${hours} ${hourText} and ${minutes} ${minuteText}`;
 
}

updateCountdown();
setInterval(updateCountdown, 30000);


