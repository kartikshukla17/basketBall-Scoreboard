let homeScore = 0 
let guestScore = 0
let incrementHome = document.getElementById("scoreTextHome")
let incrementGuest = document.getElementById("scoreTextGuest")

function singleIncrementScoreHome() {
    homeScore += 1
    incrementHome.textContent = homeScore.toString()
}

function doubleIncrementScoreHome() {
    homeScore+= 2
    incrementHome.textContent = homeScore.toString()
}

function tripleIncrementScoreHome() {
    homeScore+= 3
    incrementHome.textContent = homeScore.toString()
}


function singleIncrementScoreGuest() {
    guestScore+= 1
    incrementGuest.textContent = guestScore.toString()
}

function doubleIncrementScoreGuest() {
    guestScore+= 2
    incrementGuest.textContent = guestScore.toString()
}

function tripleIncrementScoreGuest() {
    guestScore+= 3
    incrementGuest.textContent = guestScore.toString()
}
