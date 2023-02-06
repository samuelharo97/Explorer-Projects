import {
  buttonRain,
  buttonFire,
  buttonNature,
  buttonStreet,
  rainCard,
  fireCard,
  streetCard,
  natureCard,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncreaseTime,
  buttonDecreaseTime,
  buttonSoundOn,
  buttonSoundOff,
  darkMode,
  lightMode,
  body,
  volumeWrapper,
  text
} from './elements.js'

let audio
let lastCard

export function Cards({ playAudio }) {
  buttonRain.addEventListener('click', function () {
    if (
      (lastCard?.attributes.id.value == 'rainButton' &&
        lastCard?.attributes.class.value == 'enabled') ||
      (lastCard?.attributes.id.value == 'rainButton' &&
        lastCard?.attributes.class.value == 'dark-card enabled')
    ) {
      stopAllAudio(audio)
    } else {
      stopAllAudio(audio)
      rainCard.classList.add('enabled')
      fireCard.classList.remove('enabled')
      streetCard.classList.remove('enabled')
      natureCard.classList.remove('enabled')
      playAudio.buttonPressAudio.play()
      audio = playAudio.rainAudio
      audio.play()
      return (lastCard = rainCard)
    }
  })
  buttonFire.addEventListener('click', function () {
    if (
      (lastCard?.attributes.id.value == 'fireButton' &&
        lastCard?.attributes.class.value == 'enabled') ||
      (lastCard?.attributes.id.value == 'fireButton' &&
        lastCard?.attributes.class.value == 'dark-card enabled')
    ) {
      stopAllAudio(audio)
    } else {
      stopAllAudio(audio)
      fireCard.classList.add('enabled')
      streetCard.classList.remove('enabled')
      natureCard.classList.remove('enabled')
      rainCard.classList.remove('enabled')
      playAudio.buttonPressAudio.play()
      audio = playAudio.fireAudio
      audio.play()
      return (lastCard = fireCard)
    }
  })
  buttonStreet.addEventListener('click', function () {
    if (
      (lastCard?.attributes.id.value == 'streetButton' &&
        lastCard?.attributes.class.value == 'enabled') ||
      (lastCard?.attributes.id.value == 'streetButton' &&
        lastCard?.attributes.class.value == 'dark-card enabled')
    ) {
      stopAllAudio(audio)
    } else {
      stopAllAudio(audio)
      streetCard.classList.add('enabled')
      fireCard.classList.remove('enabled')
      buttonNature.classList.remove('enabled')
      rainCard.classList.remove('enabled')
      playAudio.buttonPressAudio.play()
      audio = playAudio.streetAudio
      audio.play()
      return (lastCard = streetCard)
    }
  })
  buttonNature.addEventListener('click', function () {
    if (
      (lastCard?.attributes.id.value == 'natureButton' &&
        lastCard?.attributes.class.value == 'enabled') ||
      (lastCard?.attributes.id.value == 'natureButton' &&
        lastCard?.attributes.class.value == 'dark-card enabled')
    ) {
      stopAllAudio(audio)
    } else {
      stopAllAudio(audio)
      natureCard.classList.add('enabled')
      streetCard.classList.remove('enabled')
      fireCard.classList.remove('enabled')
      rainCard.classList.remove('enabled')
      playAudio.buttonPressAudio.play()
      audio = playAudio.forestAudio
      audio.play()
      return (lastCard = natureCard)
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
}

export function Controls({ timer, playAudio }) {
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
    playAudio.buttonPressAudio.play()
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    stopAllAudio(audio)
  })

  buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    playAudio.buttonPressAudio.play()
    lastCard.classList.add('enabled')
    audio.play()
  })
}

export function ToggleDarkMode() {
  lightMode.addEventListener('click', () => {
    toggleColorChange()
  })

  darkMode.addEventListener('click', () => {
    toggleColorChange()
  })

  function toggleColorChange() {
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
    rainButton.childNodes[1].children[0].classList.toggle('svg-dark')
    fireButton.childNodes[1].children[0].classList.toggle('svg-dark')
    streetButton.childNodes[1].children[0].classList.toggle('svg-dark')
  }
}

function stopAllAudio(audio) {
  console.log(audio)
  if (audio) {
    audio.pause()
  }
  natureCard.classList.remove('enabled')
  streetCard.classList.remove('enabled')
  fireCard.classList.remove('enabled')
  rainCard.classList.remove('enabled')
}
