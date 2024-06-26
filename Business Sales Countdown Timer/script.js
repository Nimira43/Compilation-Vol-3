const countDownDate = new Date('19 June 2023 12:00:00').getTime();
const time = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let offer = document.getElementById('offer');
    offer.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '; 
    if (distance < 0) {
        clearInterval(time);
        document.getElementById('offer').innerHTML = 'Sale is On!!!'
    }
}, 1000);
