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
const buttonRain = document.querySelector('.rain')
const buttonFire = document.querySelector('.fire')
const buttonStreet = document.querySelector('.street')
const buttonNature = document.querySelector('.nature')
let minutes
let setMinutes = 25
let currentTime
let seconds
let lastPlayed
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

buttonRain.addEventListener('click', function () {
  stopAllAudio()
  buttonRain.classList.add('enabled')
  buttonFire.classList.remove('enabled')
  buttonStreet.classList.remove('enabled')
  buttonNature.classList.remove('enabled')
  playAudio.buttonPressAudio.play()
  playAudio.rainAudio.play()
  lastPlayed = playAudio.rainAudio
  lastCard = buttonRain
})
buttonFire.addEventListener('click', function () {
  stopAllAudio()
  buttonFire.classList.add('enabled')
  buttonStreet.classList.remove('enabled')
  buttonNature.classList.remove('enabled')
  buttonRain.classList.remove('enabled')
  playAudio.buttonPressAudio.play()
  playAudio.fireAudio.play()
  lastPlayed = playAudio.fireAudio
  lastCard = buttonFire
})
buttonStreet.addEventListener('click', function () {
  stopAllAudio()
  buttonStreet.classList.add('enabled')
  buttonFire.classList.remove('enabled')
  buttonNature.classList.remove('enabled')
  buttonRain.classList.remove('enabled')
  playAudio.buttonPressAudio.play()
  playAudio.streetAudio.play()
  lastPlayed = playAudio.streetAudio
  lastCard = buttonStreet
})
buttonNature.addEventListener('click', function () {
  stopAllAudio()
  buttonNature.classList.add('enabled')
  buttonStreet.classList.remove('enabled')
  buttonFire.classList.remove('enabled')
  buttonRain.classList.remove('enabled')
  playAudio.buttonPressAudio.play()
  playAudio.forestAudio.play()
  lastPlayed = playAudio.forestAudio
  lastCard = buttonNature
})

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
  lastPlayed.play() 
})

function stopAllAudio() {
  playAudio.fireAudio.pause()
  playAudio.streetAudio.pause()
  playAudio.rainAudio.pause()
  playAudio.forestAudio.pause()
  buttonNature.classList.remove('enabled')
  buttonStreet.classList.remove('enabled')
  buttonFire.classList.remove('enabled')
  buttonRain.classList.remove('enabled')
}
