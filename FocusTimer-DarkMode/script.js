import { Timer } from './timer.js'
import sounds from './sounds.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseTime = document.querySelector('.increaseTime')
const buttonDecreaseTime = document.querySelector('.decreaseTime')
const buttonSoundOn = document.querySelector('.soundOn')
const buttonSoundOff = document.querySelector('.soundOff')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
stashconst volRain = document.getElementById('volRain')
const volFire = document.getElementById('volFire')
const volNature = document.getElementById('volNature')
const volStreet = document.getElementById('volStreet')
const buttonFire = document.querySelector('.fire')
const buttonRain = document.querySelector('.rain')
const buttonStreet = document.querySelector('.street')
const buttonNature = document.querySelector('.nature')
const fireCard = document.getElementById('fireButton')
const rainCard = document.getElementById('rainButton')
const streetCard = document.getElementById('streetButton')
const natureCard = document.getElementById('natureButton')
let minutes
let setMinutes = 25
let currentTime
let seconds
let audio
let lastCard

const timer = Timer({
  displayMinutes,
  displaySeconds,
  minutes,
  seconds,
  setMinutes,
  currentTime
})

const playAudio = sounds()

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  timer.countdown()
  playAudio.buttonPressAudio.play()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  timer.pauseDisplay()
  clearTimeout(currentTime)
  playAudio.buttonPressAudio.play()
})

buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  timer.stopDisplay()
  playAudio.buttonPressAudio.play()
})

buttonIncreaseTime.addEventListener('click', function () {
  timer.timeIncrease()
  playAudio.buttonPressAudio.play()
})

buttonDecreaseTime.addEventListener('click', function () {
  timer.timeDecrease()
  playAudio.buttonPressAudio.play()
})

buttonSoundOff.addEventListener('click', function () {
  stopAllAudio()
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  playAudio.buttonPressAudio.play()
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  playAudio.buttonPressAudio.play()
  lastCard.classList.add('enabled')
  audio.play()
})

function stopAllAudio() {
  if (audio) {
    audio.pause()
  }
  natureCard.classList.remove('enabled')
  streetCard.classList.remove('enabled')
  fireCard.classList.remove('enabled')
  rainCard.classList.remove('enabled')
}

buttonRain.addEventListener('click', function () {
  if (
    lastCard?.attributes.id.value == 'rainButton' &&
    lastCard?.attributes.class.value == 'enabled'
  ) {
    stopAllAudio()
  } else {
    stopAllAudio()
    rainCard.classList.add('enabled')
    fireCard.classList.remove('enabled')
    streetCard.classList.remove('enabled')
    natureCard.classList.remove('enabled')
    playAudio.buttonPressAudio.play()
    audio = playAudio.rainAudio
    audio.play()
    lastCard = rainCard
  }
})
buttonFire.addEventListener('click', function () {
  if (
    lastCard?.attributes.id.value == 'fireButton' &&
    lastCard?.attributes.class.value == 'enabled'
  ) {
    stopAllAudio()
  } else {
    stopAllAudio()
    fireCard.classList.add('enabled')
    streetCard.classList.remove('enabled')
    natureCard.classList.remove('enabled')
    rainCard.classList.remove('enabled')
    playAudio.buttonPressAudio.play()
    audio = playAudio.fireAudio
    audio.play()
    lastCard = fireCard
  }
})
buttonStreet.addEventListener('click', function () {
  if (
    lastCard?.attributes.id.value == 'streetButton' &&
    lastCard?.attributes.class.value == 'enabled'
  ) {
    stopAllAudio()
  } else {
    stopAllAudio()
    streetCard.classList.add('enabled')
    fireCard.classList.remove('enabled')
    buttonNature.classList.remove('enabled')
    rainCard.classList.remove('enabled')
    playAudio.buttonPressAudio.play()
    audio = playAudio.streetAudio
    audio.play()
    lastCard = streetCard
  }
})
buttonNature.addEventListener('click', function () {
  if (
    lastCard?.attributes.id.value == 'natureButton' &&
    lastCard?.attributes.class.value == 'enabled'
  ) {
    stopAllAudio()
  } else {
    stopAllAudio()
    natureCard.classList.add('enabled')
    streetCard.classList.remove('enabled')
    fireCard.classList.remove('enabled')
    rainCard.classList.remove('enabled')
    playAudio.buttonPressAudio.play()
    audio = playAudio.forestAudio
    audio.play()
    lastCard = natureCard
  }
})

function setVolume(volumeInput) {
  const value = volumeInput.value / 100
  audio.volume = value
}

volFire.addEventListener('input', function () {
  setVolume(volFire)
})
volNature.addEventListener('input', function () {
  setVolume(volNature)
})
volRain.addEventListener('input', function () {
  setVolume(volRain)
})
volStreet.addEventListener('input', function () {
  setVolume(volStreet)
})
