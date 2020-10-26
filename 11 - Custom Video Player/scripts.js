const playButton = document.querySelector('.player__button')
const video = document.querySelector('video')
const progress = document.querySelector('.progress')
const progress_filled = document.querySelector('.progress__filled')
const inputs = document.querySelectorAll('input')
let paused = false

function togglePlay() {
    if(paused) {
        video.play()
        playButton.innerText = '||'
    } else {
        video.pause()
        playButton.innerText = '►'
    }
    paused = !paused
}

function handleProgressUpdate(e) {
    progress_filled.style.width = `${(e.offsetX / this.clientWidth)*100}%`
    progress_filled.style.flexBasis = `${(e.offsetX / this.clientWidth)*100}%`
    console.log(video.playbackRate)
}

function handleClick(e) {
    console.log(this)
}




playButton.addEventListener('click', togglePlay)
progress.addEventListener('click', handleProgressUpdate)
inputs.forEach(input => input.addEventListener("click", handleClick))