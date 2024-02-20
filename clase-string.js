// Creacion de string
const primeraOpcion = 'comillas simples'
const segundaOpcion = "comillas simples"
const terceraOpcion = `comillas simples`

// 1. Concatenacion: Opcion +
const direccion = 'calle falsa 123'
const ciudad = 'Sprinfield'
const direccionCompleta = 'Mi direccion completa es ' + direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaCOnEspacio = 'Mi direccion completa es ' + direccion + ' ' + ciudad
console.log(direccionCompletaCOnEspacio)

// 2. Concatenacion: Template Literals
const nombre = 'Antonio'
const país = 'RD'
const presentacion = `Hola soy ${nombre} de ${país}`
console.log(presentacion)

// 3. Concatenacion: join()
const primeraParte = 'Me encanta'
const segundaParte = "la gente de"
const terceraParte = `USA`
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

// 4. Concatenacion: concat()
const hobbie1 = '🤽‍♂️'
const hobbie2 = '🚴‍♀️'
const hobbie3 = '✈'
const hobbies = 'Mis hobbies son: ' .concat(hobbie1, ', ', hobbie2, ',', hobbie3)
console.log(hobbies)

// Caracteres de escape
//const whatDoIDo = 'I'm Software Engineer'

// 1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer"

// 2. Barra invertida
const escapeBarraInvertida = 'I\'m Software Engineer'

// 3. Template literals
const escapeComillaInvertida = `I'm Software Engineer`

// Escritura de Strings Largos
/*
Las rosas son rojas,
las violetas son azules,
Caracter inesperado,
en la linea 86.
*/

const poema = 'Las rosas son rojas,\n' +
              'Las violetas son azules,\n' +
              'Caracter inesperado,\n' +
              'En la linea 86.'
console.log(poema)

const poema2 = 'Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la linea 86.'
console.log(poema2)

const poema3 = `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86.`
console.log(poema3)