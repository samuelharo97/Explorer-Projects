export default function sounds() {
  const forestAudio = new Audio('audio-files/Floresta.wav')
  const fireAudio = new Audio('audio-files/Lareira.wav')
  const streetAudio = new Audio(
    'https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true'
  )
  const rainAudio = new Audio('audio-files/Chuva.wav')
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
