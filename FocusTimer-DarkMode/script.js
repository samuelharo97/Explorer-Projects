import { Timer } from './timer.js'
import sounds from './sounds.js'

const buttonPlay = document.getElementById('play')
const buttonPause = document.getElementById('pause')
const buttonStop = document.getElementById('stop')
const buttonIncreaseTime = document.getElementById('increaseTime')
const buttonDecreaseTime = document.getElementById('decreaseTime')
const buttonSoundOn = document.getElementById('soundOn')
const buttonSoundOff = document.getElementById('soundOff')
const displayMinutes = document.getElementById('minutes')
const displaySeconds = document.getElementById('seconds')
const volRain = document.getElementById('volRain')
const volFire = document.getElementById('volFire')
const volNature = document.getElementById('volNature')
const volStreet = document.getElementById('volStreet')
const buttonFire = document.getElementById('fire')
const buttonRain = document.getElementById('rain')
const buttonStreet = document.getElementById('street')
const buttonNature = document.getElementById('nature')
const lightMode = document.getElementById('light-mode')
const darkMode = document.getElementById('dark-mode')
const fireCard = document.getElementById('fireButton')
const rainCard = document.getElementById('rainButton')
const streetCard = document.getElementById('streetButton')
const natureCard = document.getElementById('natureButton')
const body = document.body
const volumeWrapper = document.querySelectorAll('.volume-wrapper')
const text = document.querySelectorAll('span')

console.log(natureButton.childNodes[1].children[0])

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

lightMode.addEventListener('click', () => {
  toggleDarkMode()
})

darkMode.addEventListener('click', () => {
  toggleDarkMode()
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

function toggleDarkMode() {
  lightMode.classList.toggle('hide')
  darkMode.classList.toggle('hide')
  body.classList.toggle('body-dark-bg')
  volumeWrapper.forEach(volume => volume.classList.toggle('dark-wrapper'))
  volRain.style.backgroundColor = 'var(--active-card-fill-dark)'
  volFire.style.backgroundColor = 'var(--active-card-fill-dark)'
  volNature.style.backgroundColor = 'var(--active-card-fill-dark)'
  volStreet.style.backgroundColor = 'var(--active-card-fill-dark)'
  fireCard.classList.toggle('dark-card')
  rainCard.classList.toggle('dark-card')
  streetCard.classList.toggle('dark-card')
  natureCard.classList.toggle('dark-card')
  text.forEach(text => text.classList.toggle('dark-text'))
  buttonPlay.childNodes[1].childNodes[1].classList.toggle('dark-buttons')
  buttonPause.childNodes[1].childNodes[1].classList.toggle('dark-buttons')
  buttonStop.childNodes[1].childNodes[1].classList.toggle('dark-buttons')
  buttonIncreaseTime.childNodes[1].childNodes[1].classList.toggle(
    'dark-buttons'
  )
  buttonDecreaseTime.childNodes[1].childNodes[1].classList.toggle(
    'dark-buttons'
  )
  new Set(buttonSoundOff.childNodes[1].children).forEach(path =>
    path.classList.toggle('dark-buttons')
  )
  new Set(buttonSoundOn.childNodes[1].children).forEach(path =>
    path.classList.toggle('dark-buttons')
  )
  natureButton.childNodes[1].children[0].classList.toggle('svg-dark')
  console.log(natureButton.childNodes[1].children[0], 'dark')
  rainButton.childNodes[1].children[0].classList.toggle('svg-dark')
  fireButton.childNodes[1].children[0].classList.toggle('svg-dark')
  streetButton.childNodes[1].children[0].classList.toggle('svg-dark')
}

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
