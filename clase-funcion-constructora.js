/*
Función constructora
Una función constructora en JavaScript es una forma especial de crear un objeto. Se utiliza principalmente cuando necesitamos crear varios objetos con las mismas propiedades y métodos.
La función constructora se parece a cualquier otra función en JavaScript, pero con dos diferencias importantes. La primera es que su nombre comienza con una letra mayúscula. La segunda es que se utiliza con la palabra clave new.
Veamos un ejemplo:
*/

function Carro(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;

  this.arrancar = function() {
    console.log('El carro está arrancando');
  }
}

let miCarro1 = new Carro('Toyota', 'Corolla', 2020);

/*
En este ejemplo, Carro es una función constructora que recibe tres argumentos: marca, modelo y año. Dentro de la función, utilizamos this para asignar estos argumentos a las propiedades del nuevo objeto que se está creando.
También definimos un método llamado arrancar dentro de la función constructora. Este método estará disponible para todos los objetos creados con la función constructora Carro.
Después, creamos un nuevo objeto miCarro1 utilizando la palabra clave new seguida de la función constructora Carro.
Ahora, miCarro1 es un objeto con las propiedades marca, modelo, año y el método arrancar.
Podemos acceder a las propiedades y métodos de miCarro1 de la siguiente manera:
*/

console.log(miCarro1.marca); // Imprime: 'Toyota'
console.log(miCarro1.modelo); // Imprime: 'Corolla'
console.log(miCarro1.año); // Imprime: 2020
miCarro1.arrancar(); // Imprime: 'El carro está arrancando'

/*
De esta manera, podemos utilizar la función constructora Carro para crear tantos carros como queramos, todos con las mismas propiedades y métodos.

Propiedad .prototype en una función constructora
El .prototype es una propiedad en JavaScript que está asociada con las funciones y los objetos. Es un mecanismo fundamental en JavaScript que permite la creación de objetos complejos y la herencia entre objetos.
En el contexto de una función constructora, .prototype es un objeto que se utiliza para añadir propiedades y métodos que serán compartidos entre todas las instancias de los objetos creados por esa función constructora.
Veamos un ejemplo:
*/

function Carro1(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}

Carro1.prototype.arrancar = function() {
    console.log('El carro arrancó');
}

let miCarro2 = new Carro1('Toyota', 'Corolla', 2020);
miCarro2.arrancar(); // Imprime: 'El coche está arrancando'

/*
En este caso, hemos definido una función constructora Carro1 con tres propiedades: marca, modelo y año. Luego, hemos añadido un método arrancar al objeto prototype de Carro1.
Ahora, todas las instancias de Carro1 tendrán acceso a este método arrancar. Eso significa que si creamos un nuevo miCarro2 con new Carro1(...), ese carro tendrá el método arrancar disponible.
El uso de .prototype es muy eficiente en términos de memoria, porque solo se crea una copia del método para todas las instancias, en lugar de crear una copia para cada instancia.
Además, el .prototype permite la herencia de objetos en JavaScript. Los objetos en JavaScript tienen una propiedad interna [[Prototype]] que es una referencia al objeto prototype de su constructor. Cuando intentas acceder a una propiedad que no existe en un objeto, JavaScript buscará esa propiedad en el objeto prototype de su constructor, luego en el prototype del prototype, y así sucesivamente, hasta que la propiedad sea encontrada o hasta que se llegue al final de la cadena de prototipos (que es null).
Esto es un resumen básico de cómo funciona .prototype en JavaScript. Es un tema complejo con muchos detalles y sutilezas.
*/