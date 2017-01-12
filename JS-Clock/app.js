const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
function setDate(){
    const today = new Date();
    const seconds = today.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = today.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = today.getHours();
    const hoursDegress = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegress}deg)`;
    console.log(hours + ":" + minutes);
}

setInterval(setDate, 1000);