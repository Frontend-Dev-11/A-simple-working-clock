// Required elemets

const hourHand = document.getElementById('hour');
const minHand = document.getElementById('minutes');
const secHand = document.getElementById('seconds');

// Time management

setInterval(() => {

    // Date API
    const newTime = new Date();

    // Present second
    const seconds = newTime.getSeconds();
    // Present minute
    const minutes = newTime.getMinutes();
    // Present hour
    const hours = newTime.getHours();

    //Set the degree accorging to the time 
    const secDeg = ((seconds/60) * 360) + 90
    const minDeg = ((minutes/60) * 360) + 90
    const hourDeg = ((hours/12) * 360) + 90

    // Set to rotate the hands according to the degree
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);