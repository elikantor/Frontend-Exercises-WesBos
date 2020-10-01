const buttons = document.querySelectorAll('button')
const form = document.querySelector('form')
const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
let timer = false
let interval

function startTimer(e, seconds) {
    console.log(seconds, this)
    let time = seconds ? seconds : Number(this.dataset.time)
    let minutes = Math.floor(time / 60)
    generateEndTime(minutes)
    let secs = time % 60 > 9 ? time % 60 : '0' + time % 60
    timeLeft.innerText = `${minutes}:${secs}`
    document.title = `${minutes}:${secs}`
    if(!timer) {
        timer = true
        interval = setInterval(function(){
            if(time) {
                if(secs === '00' && minutes > 0) {
                    minutes--
                    secs = 59
                } else {
                    secs--
                }
                time--
                secs = time % 60 > 9 ? time % 60 : '0' + time % 60
                timeLeft.innerText = `${minutes}:${secs}`
                document.title = `${minutes}:${secs}`
            } else {
                clearInterval(interval)
                timer = false
            }
        }, 1000)
    } else {
        clearInterval(interval)
        interval = setInterval(function(){
            if(time) {
                if(secs === '00' && minutes > 0) {
                    minutes--
                    secs = 59
                } else {
                    secs--
                }
                time--
                secs = time % 60 > 9 ? time % 60 : '0' + time % 60
                timeLeft.innerText = `${minutes}:${secs}`
                document.title = `${minutes}:${secs}`
            } else {
                clearInterval(interval)
                timer = false
            }
        }, 1000)
    }
}

function generateEndTime(minutes){
    const totalMins = new Date().getHours() * 60 + (new Date().getMinutes() + minutes) 
    const hours = Math.floor(totalMins / 60) > 12 ? Math.floor(totalMins / 60) - 12 : Math.floor(totalMins / 60) 
    const mins = totalMins % 60 > 9 ? totalMins % 60 : '0' + totalMins % 60
    endTime.innerText = `Be back at ${hours}:${mins}`
}

function customerTimer(e) {
    e.preventDefault()
    startTimer(e, this.minutes.value * 60)
}


buttons.forEach(button => button.addEventListener('click', startTimer))
form.addEventListener('submit',customerTimer)