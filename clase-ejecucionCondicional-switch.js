/*
switch(expresión) {
  case valor1:
    //codigo a ejecutar
  break
  case valor2:
    //codigo a ejecutar
  break  
  case valor3:
    //codigo a ejecutar
  break  
  case valor4:
    //codigo a ejecutar
  break  
  default:
    //codigo a ejecutar
}
*/

let frutas = 'Manzanas'

switch(frutas) {
  case 'Naranjas':
    console.log('Las naranjas cuestan $20 el kilo')
    break
  case 'Uvas':
    console.log('Las uvas cuestan $30 el kilo')
    break
  case 'Piñas':
    console.log('Las piñas cuestan $15 el kilo')
    break
  case 'Manzanas':
    console.log('Las manzanas cuestan $25 el kilo')
    break
  default:
    console.log(`No contamos con ${frutas} en existencia.`)
}

console.log('¿Hay algo más que desee?')