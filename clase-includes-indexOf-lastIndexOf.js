// includes() with numbers
// Determina si un array incluye un determinado elemento, devuelve true o false según corresponda.

const numbers = [1, 2, 3, 4, 5]

const result1 = numbers.includes(3)
console.log(result1)

const result2 = numbers.includes(8)
console.log(result2)

// indexOf()
// Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no está presente.

const fruits = ['apple', 'cherry', 'grape', 'mango']

const index1 = fruits.indexOf('grape')
console.log(index1)

const index2 = fruits.indexOf('blueberry')
console.log(index2)

//lastIndexOf()
// A diferencia de .indexOf(), devuelve el último índice en el que un cierto elemento puede encontrarse en el array, ó -1 si el elemento no se encontrara.

const numbersAgain = [2, 4, 6, 8, 10, 6]

const lastIndex1 = numbersAgain.lastIndexOf(6)
console.log(lastIndex1)

const lastIndex2 = numbersAgain.lastIndexOf(3)
console.log(lastIndex2)

// Exercise | Finding Substring Indices

const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi']
const target = 'banana'

function findStringIndicesInArray (array, target){
  const result = {
    includesTargetString: false,
    firstOccurrenceIndex: -1,
    lastOccurrenceIndex: -1
  }

  array.forEach((element, index) => {
    if (element.includes(target)){
      result.includesTargetString = true
      result.firstOccurrenceIndex = array.indexOf(target)
      result.lastOccurrenceIndex = array.lastIndexOf(target)
    }
  })
  return result
}

const result = findStringIndicesInArray(stringArray, target)
console.log(result)