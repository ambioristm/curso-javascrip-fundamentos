tipos de datos

primitivos
son inmutables y se pasan por valor

complejos
son mutables y se pasan por referencia

/*__________________________*/

En JavaScript, los tipos de funciones pueden clasificarse de varias maneras según su comportamiento y uso. Aquí tienes una lista de algunos tipos comunes de funciones en JavaScript:

// 1. Funciones Declarativas (o con nombre):

Se definen con la palabra clave function
Pueden ser referenciadas antes de su declaración.
function suma(a, b) { return a + b; } 
// 2. Funciones Expresivas (o anónimas):

Se asignan a variables.
A menudo se utilizan para asignar funciones como valores a variables.
const suma = function(a, b) { return a + b; };
// 3. Funciones Flecha:

Introducidas en ES6, proporcionan una sintaxis más concisa.
Tienen un comportamiento ligeramente diferente con respecto al valor de this.
const suma = (a, b) => a + b; 
// 4. Funciones Constructoras:

Utilizadas para crear objetos con new.
Utilizan this para asignar propiedades al nuevo objeto.
function Persona(nombre, edad) { this.nombre = nombre; this.edad = edad; } const persona1 = new Persona('Juan', 25); 
// 5. Funciones de Orden Superior (Higher-Order Functions):

Aceptan funciones como argumentos o devuelven funciones.
Ejemplos incluyen map, filter, reduce.
// 6. Funciones Recursivas:

Llamadas a sí mismas durante la ejecución.
Útiles para problemas que se pueden dividir en subproblemas más pequeños.
function factorial(n) { if (n === 0 || n === 1) { return 1; } else { return n * factorial(n - 1); } } 
// 7. Funciones Anidadas (Nested Functions):

Definidas dentro de otra función.
Pueden acceder a las variables de la función contenedora (closure).
function exterior() { let variableExterior = 'Exterior'; function interior() { console.log(variableExterior); } interior(); } exterior(); 
// 8. Métodos de Objeto:

Funciones que son propiedades de objetos y se llaman métodos cuando se invocan en el contexto de ese objeto.
const objeto = { metodo: function() { console.log('Hola desde el método'); } }; objeto.metodo(); 
// 9. Funciones Asincrónicas:

Utilizadas para manejar operaciones asíncronas con callbacks, Promesas o Async/Await.
async function fetchData() { const response = await fetch('<https://api.example.com/data>'); const data = await response.json(); console.log(data); } 
// 10. Funciones Puras:

Dado el mismo conjunto de entradas, siempre producirán el mismo resultado sin causar efectos secundarios observables.
No dependen de ni modifican estados externos.
function suma(a, b) { return a + b; } 
Estas son algunas de las categorías comunes de funciones en JavaScript. Es importante comprender estas diferentes formas de definir y utilizar funciones para escribir código más claro y eficiente.

/*_______________________*/

Binding en JavaScript se refiere a cómo la palabra clave this está vinculada o asociada en una función. Así que, entender los diferentes tipos de “binding” es esencial para comprender cómo se comporta this en diferentes situaciones. Veamos los cinco tipos principales de “binding”:

Implicit Binding:
Ocurre cuando se invoca un método de un objeto, y this se vincula al objeto que contiene el método.

Ejemplo:

const person = {
  name: 'Adam',
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet(); // Output: Hello, I'm Adam

Explicit Binding:
Ocurre cuando se usan métodos como call, apply, o bind para establecer explícitamente el valor de this.

Ejemplo:

function greet() {
  console.log(`Hello, I'm ${this.name}`);
}

const adam = { name: 'Adam' };

greet.call(adam); // Output: Hello, I'm Adam
New Binding:
Ocurre cuando una función se invoca con la palabra clave new, creando así un nuevo objeto y vinculando this a ese objeto.

Ejemplo:

function Person(name) {
  this.name = name;
}

const adam = new Person('Adam');
console.log(adam.name); // Output: Adam
Lexical Binding:
Ocurre cuando se utiliza this en una función dentro de otra función. En este caso, this se vincula al contexto léxico de la función exterior.

Ejemplo:

const person = {
  name: 'Adam',
  greet: function() {
    const innerFunction = () => {
      console.log(`Hello, I'm ${this.name}`);
    };
    innerFunction();
  }
};

person.greet(); // Output: Hello, I'm Adam

Window Binding:
Ocurre cuando ninguna de las reglas anteriores se aplica y this se vincula al objeto global (por ejemplo, window en el navegador).

Ejemplo (ejecutar en el navegador):

function showName() {
  console.log(this.name);
}

window.name = 'Adam';
showName(); // Output: Adam