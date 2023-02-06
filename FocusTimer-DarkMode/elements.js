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

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncreaseTime,
  buttonDecreaseTime,
  buttonSoundOn,
  buttonSoundOff,
  displayMinutes,
  displaySeconds,
  volRain,
  volFire,
  volNature,
  volStreet,
  buttonFire,
  buttonRain,
  buttonStreet,
  buttonNature,
  lightMode,
  darkMode,
  fireCard,
  rainCard,
  streetCard,
  natureCard,
  body,
  volumeWrapper,
  text
}
