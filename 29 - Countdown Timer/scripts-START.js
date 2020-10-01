const buttons = document.querySelectorAll('button')
const form = document.querySelector('form')
const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')


function startTimer() {
    const time = Number(this.dataset.time)
    const minutes = Math.floor(time / 60)
    const secs = time % 60 > 9 ? time % 60 : '0' + time % 60
    timeLeft.innerText = `${minutes}:${secs}`
    generateEndTime(minutes)
}

function generateEndTime(minutes){
    const totalMins = new Date().getHours() * 60 + (new Date().getMinutes() + minutes) 
    const hours = Math.floor(totalMins / 60) > 12 ? Math.floor(totalMins / 60) - 12 : Math.floor(totalMins / 60) 
    const mins = totalMins % 60 > 9 ? totalMins % 60 : '0' + totalMins % 60
    endTime.innerText = `Be back at ${hours}:${mins}`
}

buttons.forEach(button => button.addEventListener('click', startTimer))