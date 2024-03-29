/*
Juguemos a adivinar la palabra.

El usuario tiene 3 intentos para adivinar la palabra oculta.

Requerimientos:

- El juego debe tener una palabra oculta.
- El juego puede dar una pista de la palabra.
- El usuario debe ingresar una suposición.
- El juega debe verificar si la suposición del usuario es correcta.
- El juego debe tener un número limitado de intentos.
- El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos.
*/

let palabraOculta = 'guineo'
let intentos = 3

function verificarSuposición(suposición, palabraOculta) {
  if(suposición.toLowerCase() === palabraOculta) {
    return true
  }
  return false
} 

function jugarAdivinaLaPalabra() {
  alert('Bienvenidos a jugar adivina la palabra')
  alert('Tienes 3 intentos para adivinar la palabra')
  alert('-pista- la palabra oculta es sobre una fruta de color amarillo')

  while (intentos > 0) {
    let suposición = prompt('Adivina la palabra oculta')

    if(verificarSuposición(suposición, palabraOculta)) {
      alert('¡¡Felicidades adivinaste la palabra oculta!!')
      break
    } else {
      intentos--;
      if(intentos > 0) {
        alert(`Palabra incorrecta te quedan ${intentos} intentos restantes`)
      } else {
        alert(`Has agotado tus 3 intentos, la palabra oculta era: ${palabraOculta}`)
      }
    }
  }
}

jugarAdivinaLaPalabra()