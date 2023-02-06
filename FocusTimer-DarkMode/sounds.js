export default function sounds() {
  const forestAudio = new Audio('audio-files/Floresta.wav')
  forestAudio.loop = true
  const fireAudio = new Audio('audio-files/Lareira.wav')
  fireAudio.loop = true
  const streetAudio = new Audio('audio-files/Street.wav')
  streetAudio.loop = true
  const rainAudio = new Audio('audio-files/Chuva.wav')
  rainAudio.loop = true
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  return {
    forestAudio,
    fireAudio,
    streetAudio,
    rainAudio,
    kitchenTimer,
    buttonPressAudio
  }
}
