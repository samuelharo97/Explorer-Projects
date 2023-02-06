import {
  displayMinutes,
  displaySeconds,
} from './js/elements.js'
import { Timer } from './js/timer.js'
import sounds from './js/sounds.js'
import { Cards, Controls, ToggleDarkMode } from './js/events.js'

let minutes
let setMinutes = 25
let currentTime
let seconds

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
const cards = Cards({ playAudio })
const controls = Controls({ timer, playAudio })
