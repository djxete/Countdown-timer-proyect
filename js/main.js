

// ============ VARIABLES ==========================
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

let giveAway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")



//---------------- Deadline date------------------------

let futureDate = new Date(2021, 12, 15, 11, 30, 0);


let year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let day = futureDate.getDate();



//--------- Get month depends on the let futuredate and the array months-----------------

const month = futureDate.getMonth();
let monthFind = months.filter(item => {
    return item === months[month];
})
monthFind = monthFind.join();



//-------- Get day depends on the let futuredate and the array weekdays ---------------------------

const weekday = futureDate.getDay();
let dayFind = weekdays.filter(item => {
    return item === weekdays[weekday]
})
dayFind = dayFind.join();





//----------------- Set giveaway dinamically----------------

giveAway.textContent = `
        giveaway ends on ${dayFind}, ${day} ${monthFind} ${year}, ${hours}:${minutes}am
`




//----------------- Calculate remaing time----------------------





function getRemainingTime() {

    const futureDateMilliseconds = futureDate.getTime();
    const currentDateMilliseconds = new Date().getTime();

    const t = futureDateMilliseconds - currentDateMilliseconds;
    //1d = 24h
    //1h = 60m
    //1m = 60s
    //1s = 1000ms

    // Days remaining
    let daysRemaining = Math.floor(t / (1000 * 60 * 60 * 24));
    
    //Hours remaining
    let hoursRemaining = Math.floor(t / (1000 * 60 * 60));
    
    //Minutes remaining
    let minutesRemaining = Math.floor(t / (1000 * 60));
     
    //Seconds remaining
    let secondsRemaining = Math.floor(t / 1000);



// If number is less than 10, put 0 before number

    function formatNumbers(item){

        if(item < 10){
            return (item = `0${item}`)
        }

        return item;
    } 


    const valuesDate = [daysRemaining,hoursRemaining,minutesRemaining,secondsRemaining]

    

    items.forEach((item,index) => {
        item.innerHTML = formatNumbers(valuesDate[index]);
    })


// If the difference between the future date and the current time is < 0

    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML= `
        <h4 class="expired">sorry, this giveaway has expired</h4>`;
    }

}


//----------------- Countdown----------------------

let countdown = setInterval(getRemainingTime,1000);


getRemainingTime();










