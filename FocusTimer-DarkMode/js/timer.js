import sounds from './sounds.js'

const playAudio = sounds()

export function Timer({
  displayMinutes,
  displaySeconds,
  minutes,
  seconds,
  setMinutes,
  currentTime
}) {
  function countdown() {
    currentTime = setTimeout(function () {
      seconds = Number(displaySeconds.textContent)
      minutes = Number(displayMinutes.textContent)

      if (seconds <= 0 && minutes > 0) {
        minutes = Number(displayMinutes.textContent)
        displayMinutes.textContent = String(minutes - 1).padStart(2, '0')
        seconds = 60
      }

      if (displayMinutes.textContent <= 0 && displaySeconds.textContent <= 0) {
        playAudio.kitchenTimer.play()
        stop()
        resetDisplay('25', '0')
        return
      }

      displaySeconds.textContent = String(seconds - 1).padStart(2, '0')
      countdown()
    }, 1000)
  }

  function resetDisplay(setMinutes, seconds) {
    displayMinutes.textContent = String(setMinutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')
  }

  function timeIncrease() {
    setMinutes = Number(displayMinutes.textContent) + 5
    displayMinutes.textContent = String(setMinutes).padStart(2, '0')
  }

  function timeDecrease() {
    setMinutes = Number(displayMinutes.textContent) - 5
    if (setMinutes < 0) {
      setMinutes = 0
      displayMinutes.textContent = String(0).padStart(2, '0')
      return
    }
    displayMinutes.textContent = String(setMinutes).padStart(2, '0')
  }

  function pauseDisplay() {
    clearTimeout(currentTime)
  }

  function stopDisplay() {
    clearTimeout(currentTime)
    resetDisplay(setMinutes, 0)
  }

  return {
    countdown,
    timeDecrease,
    timeIncrease,
    resetDisplay,
    pauseDisplay,
    stopDisplay
  }
}
