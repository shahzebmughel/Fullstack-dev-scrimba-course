//HOME
let homeScore = 0;
const homeScoreEl = document.getElementById('home-score')
const homeIncrementByOneBtn = document.getElementById('home-increment-by-one')
const homeIncrementByTwoBtn = document.getElementById('home-increment-by-two')
const homeIncrementByThreeBtn = document.getElementById('home-increment-by-three')

//GUEST
let guestScore = 0;
const guestScoreEl = document.getElementById('guest-score')
const guestIncrementByOneBtn = document.getElementById('guest-increment-by-one')
const guestIncrementByTwoBtn = document.getElementById('guest-increment-by-two')
const guestIncrementByThreeBtn = document.getElementById('guest-increment-by-three')


// HOME SCORE

homeIncrementByOneBtn.addEventListener('click', () => {
    increaseScore("home", 1);
})

homeIncrementByTwoBtn.addEventListener('click', () => {
    increaseScore("home", 2);

})

homeIncrementByThreeBtn.addEventListener('click', () => {
    increaseScore("home", 3);

})


// GUEST SCORE

guestIncrementByOneBtn.addEventListener('click', () => {
    increaseScore("guest", 1);
})

guestIncrementByTwoBtn.addEventListener('click', () => {
    increaseScore("guest", 2);

})

guestIncrementByThreeBtn.addEventListener('click', () => {
    increaseScore("guest", 3);

})



function increaseScore(team, amount){
    if (team === "home"){
        homeScore += amount;
        homeScoreEl.textContent = homeScore
    }

    if (team === "guest"){
        guestScore += amount;
        guestScoreEl.textContent = guestScore
    }

}




