// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Inmutability).

/* 
Iteración con map() y forEach()
map() y forEach() son dos métodos que se utilizan en JavaScript para recorrer (o iterar) sobre los elementos de un array. Aquí te explicaré cómo funcionan.

Método map()
Ejecuta una función para cada elemento en un array, pero a diferencia de forEach(), map() devuelve un nuevo array con los resultados. Aquí tienes un ejemplo:

let números = [1, 2, 3, 4, 5];

let dobles = números.map(function(numero) {
  return numero * 2;
});

console.log(dobles); // Imprime: [2, 4, 6, 8, 10]
En este ejemplo, map() recorre cada número en el array numeros y ejecuta la función que le pasamos como argumento. Esta función toma un número y devuelve ese número multiplicado por 2. map() recoge todos estos resultados y los guarda en un nuevo array, que se almacena en la variable dobles. Por lo tanto, dobles es un nuevo array que contiene los números 2, 4, 6, 8, 10.
*/

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

// Método forEach()
//forEach() es un método que ejecuta una función para cada elemento en un array. Aquí tienes un ejemplo:

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

// En este ejemplo, forEach() recorre cada número en el array numeros y ejecuta la función que le pasamos como argumento. Esta función toma un número y lo imprime multiplicado por 2. Por lo tanto, este código imprimirá los números 2, 4, 6, 8, 10.

// Exercise: Fahrenheit yo Celsius conversion.

const temperaturesInFahrenheit = [32, 68, 95, 104, 212]
const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatures In Fahrenheit: ', temperaturesInFahrenheit)
console.log('Temperatures In Fahrenheit: ', temperaturesInCelsius)

// Exercise: Sum of Elements in an Array.

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach(number => {
  sum += number
})

console.log('Array of numbers: ', newNumbers)
console.log('Sum of Numbers: ', sum)