let array1D = [1, 2, 3] // Unidimensional
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

matrix[1][2] = 10
console.log(matrix)

let value = matrix[0][1]
console.log(value)

// Operations

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j])   
  }  
}

function findElement (matrix, element) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === element) {
        return true
      }  
    }  
  }
  return false
}

console.log(findElement(matrix, 5))

function duplicateMatrix(matrix) {
  let newMatrix = []
  
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [...matrix[i]]
  }
  return newMatrix
}

console.log(duplicateMatrix(matrix))

/* Los arrays bidimensionales son, en esencia, un array de arrays. Cada elemento del array principal es también un array, y estos arrays secundarios pueden tener sus propios elementos. Una forma fácil de visualizarlos es como una matriz de filas y columnas, similar a una tabla o una cuadrícula.
Por ejemplo, aquí hay un array bidimensional que representa una simple cuadrícula de 3x3: */