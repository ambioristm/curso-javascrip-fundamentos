// slice()
// Crea una copia superficial (shallow copy) de una porción del array, especificada por índices de inicio y fin (fin no incluido).
// este método no modifica el array original.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
console.log(animals.slice(2, 4))
console.log(animals.slice(1, 6))
console.log(animals.slice(-2))
console.log(animals.slice(2, -1))
console.log(animals.slice())