/*
Anatomía de un Objeto
Un objeto en JavaScript es una colección de propiedades. Cada propiedad tiene un nombre y un valor, y estos valores pueden ser de cualquier tipo, como números, cadenas, booleanos, funciones e incluso otros objetos. Aquí tienes un ejemplo de un objeto simple:
*/

let coche = {
  marca: 'Toyota',
  modelo: 'Corolla',
  año: 2020,
  encendido: false,
  encender: function() {
    this.encendido = true;
  }
};

/*
En este ejemplo, coche es un objeto que representa un coche. Tiene varias propiedades: marca, modelo, año y encendido. También tiene un método, que es una función asociada a un objeto, llamado encender, el cual cambia el valor de encendido a true.
Puedes acceder a las propiedades de un objeto usando la notación de punto o de corchetes.
*/

console.log(coche.marca); // Imprime: 'Toyota'
console.log(coche['modelo']); // Imprime: 'Corolla'
// Puedes cambiar el valor de una propiedad de la siguiente manera:


coche.año = 2021;
console.log(coche.año); // Imprime: 2021
// Y puedes llamar a un método del objeto de la siguiente manera:


coche.encender();
console.log(coche.encendido); // Imprime: true
// En resumen, un objeto en JavaScript es una forma de agrupar datos y funciones relacionadas en una sola estructura, lo que facilita la organización y el manejo de la información en tu código.

// Otros ejemplos

const persona = {
  nombre: 'Antonio',
  edad: 30,
  direccion: {
    calle: 'Av. España 37',
    ciudad: 'San Pedro',
  },
  saludar() {
    console.log(`Hola, mi nombre es ${persona.nombre}`)
  },
}

console.log(persona)
persona.saludar()

// Para agregar otra propiedad y valor al objeto lo hacemos de la siguiente manera.

persona.teléfono = '809-555-5000'

console.log(persona.teléfono)
 
// Para agregar un nuevo método al objeto de la siguiente manera

persona.despedir = () => {
  console.log('Adios')
}

persona.despedir()

// Para llegar a un valor de un objeto anidado se utiliza propiedad.propiedad.valor ej.

console.log(persona.direccion.calle)

// Para eliminar una propiedad del objeto utilizamos la palabra reservada delete y propiedad.valor a eliminar ej.

delete persona.edad;
console.log(persona.edad)

// Los métodos no se pueden borrar con la palabra reservada delete
