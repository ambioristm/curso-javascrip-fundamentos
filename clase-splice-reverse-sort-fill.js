// Methods that modify the original array (Mutability).

// splice() Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

const vegetables = ['carrot', 'boccoli', 'spinach', 'tomato']
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion')

console.log(vegetables)
console.log(removedVegetables)

//reverse() Cambia el orden del stack del ultimo elemento al primero.

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
const reversedNumbers = numbers.reverse()

console.log(numbers)
console.log(reversedNumbers)

// sort() with numbers | Ordena los elementos numéricamente y alfabéticamente (por defecto).

const unsortedNumbers1 = [4, 18, 1, 62, 34]
const unicodeSortedNumbers = unsortedNumbers1.sort()

console.log(unsortedNumbers1)
console.log(unicodeSortedNumbers)

const unsortedNumbers2 = [4, 18, 1, 62, 34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)

console.log(unsortedNumbers2)
console.log(sortedNumbers)

// sort() with strings | UTF-16

const cities = ['New York', 'París', 'Tokio', 'London']
console.log(cities)
const sortedCities = cities.sort()

console.log(cities)
console.log(sortedCities)

// fill() | Rellena un array con un valor específico.

const ages = [21, 35, 45, 50]
console.log(ages.fill(0, 2, 4))
console.log(ages.fill(15, 1))
console.log(ages.fill(15))
