// Methods that DO NOT modify the original array (Immutability).
// every(), some()  
// Ambos métodos vistos en esta clase no mutan el array original si no que retornan un booleano.

const ages = [21, 25, 30, , 19, 22]

// every()
// Retorna true si todos los elementos del arreglo cumplen la función callback

const allAreAdults = ages.every(age => age > 18)

console.log(ages)
console.log(allAreAdults)

// some
// Retorna true si al menos un solo item del arreglo cumplen la función callback

const atListOneIsOver = ages.some(age => age > 29)

console.log(ages)
console.log(atListOneIsOver)