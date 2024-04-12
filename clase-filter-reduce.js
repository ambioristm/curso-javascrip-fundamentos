// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// filter() | Crea un nuevo array con elementos que cumplen una condición dada por una función.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

// reduce() | case 1 | Ejecuta una función sobre cada elemento de un array, devolviendo como resultado un único valor.

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum)

// reduce() | case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrequency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++
  } else {
    accumulator[currentValue] = 1
  }
  return accumulator
}, {})

console.log(wordFrequency)

// Exercise: Passing Grade Average

const grades = [100, 90, 100, 80, 90, 80, 65, 28, 60, 45, 72, 55, 88, 40, 68, 75, 58, 95, 62, 50, 82, 35]

const passingGrades = grades.filter(grade => grade >= 70) // sacamos los números mayores A 70

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length // sumamos los promedios y lo dividimos entre el total de promedios

const averagePassingGradeLessDecimals = Math.floor(averagePassingGrade) // le quitamos los decimales

console.log('Original Grades: ', grades)
console.log('Passing Grades: ', passingGrades)
console.log('Average Passing Grade: ', averagePassingGradeLessDecimals) 