import { displayMinutes, displaySeconds } from './elements.js'
import { Timer } from './timer.js'
import sounds from './sounds.js'
import { Cards, Controls, ToggleDarkMode } from './events.js'

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
const toggleDarkMode = ToggleDarkMode()
const cards = Cards({ lastCard, audio, playAudio })
const controls = Controls({ timer, playAudio })
