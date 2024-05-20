/*
¿Qué es una clase en JavaScript?
Una clase en JavaScript es una plantilla para la creación de objetos. Es un mecanismo que nos permite crear objetos con propiedades y métodos específicos.
Imagina que estás construyendo un videojuego y necesitas crear varios personajes. Cada personaje tiene su nombre, puntos de vida, y habilidades. Una clase te permite definir una "plantilla" que puedes usar para crear cada personaje.
Aquí hay un ejemplo sencillo de cómo se ve una clase en JavaScript:
*/
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
  }
}

const persona1 = new Persona('Antonio', 20) 

/*
En este ejemplo, Persona es el nombre de nuestra clase. Dentro de la clase, tenemos un método especial llamado constructor, que se usa para establecer las propiedades iniciales del objeto cuando lo creamos.
Los otros métodos de la clase, como saludar, son funciones que todos los objetos creados a partir de esta clase pueden usar.
Podemos usar esta clase para crear nuevos personajes de la siguiente manera:
*/
persona1.saludar()