/*
Un objeto es un tipo de dato complejo, se usa para guardar información en pares propiedad:valor. En su estructura un objeto se declara como una variable con su nombre y se le asigna entre llaves {} todos los pares: propiedad: valor separados por comas.

for in ------> objeto
propiedades = valor
Array, string
item

for ( variable in objeto) {
  //codigo a ejecutar
}

for in para iterar en objetos
for of para iterar en arrays
*/

const listaDeCompras = {
  manzana: 5,
  pera: 4,
  naranja: 3,
  uva: 2
}

for (fruta in listaDeCompras) {
  console.log(fruta)
}

for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}