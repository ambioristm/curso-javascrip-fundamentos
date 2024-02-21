//null 
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)

// undefined
let name
console.log(name)

// symbol
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

//bigInt
const bigNumber = 105415653854854151565655654120n
console.log(bigNumber)

const numberOfParticlesInTheUniverse = 10000000000000000000000n
console.log(numberOfParticlesInTheUniverse)