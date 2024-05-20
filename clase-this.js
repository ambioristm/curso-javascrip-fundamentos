/*
En JavaScript, la palabra clave this se refiere al contexto de ejecución actual y suele ser una fuente común de confusión para los desarrolladores, ya que su comportamiento puede variar dependiendo de cómo se utiliza.

En el contexto de una función:
Cuando se usa dentro de una función normal, this hace referencia al objeto que llama a la función. Este objeto puede ser dinámico y depende de cómo se invoca la función.
*/

// javascriptCopy code
function ejemplo() {
  console.log(this);
}

// Ejemplo 1
ejemplo(); // this se refiere al objeto global (window en el navegador, global en Node.js)

// Ejemplo 2
const objeto = { método: ejemplo };
objeto.método(); // this se refiere al objeto 'objeto'
/*
En el contexto de un método de objeto:
Cuando se utiliza dentro de un método de un objeto, this se refiere al objeto que contiene el método.
*/

// javascriptCopy code
const objeto1 = {
  propiedad: 'valor',
  método: function() {
    console.log(this);
  }
};

objeto.método(); // this se refiere al objeto 'objeto'
// En el contexto de una clase:
// Dentro de una clase, this también se refiere al objeto actual creado a partir de la clase.


// javascriptCopy code
class Ejemplo {
  constructor() {
    console.log(this);
  }
}

const instancia = new Ejemplo(); // this se refiere a la instancia de la clase 'Ejemplo'
// En funciones de flecha:
// Las funciones de flecha no tienen su propio this. En su lugar, this en una función de flecha se toma del ámbito circundante (lexical scoping).


// javascriptCopy code
const funciónFlecha = () => {
  console.log(this);
};

funciónFlecha(); // this se refiere al objeto que rodea a la función de flecha
// En resumen, el valor de this en JavaScript depende del contexto de ejecución. Puede referirse al objeto global, al objeto que llama a una función, al objeto que contiene un método o a la instancia de una clase, entre otros casos. Es fundamental comprender cómo se utiliza this en diferentes situaciones para evitar errores y aprovechar su funcionalidad de manera efectiva.

// aquí la clase del profe

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const persona1 = new Persona('Maria', 20)

console.log(persona1)

persona1.nuevoMétodo = function() {
  console.log(`Mi nombre es ${this.nombre}`)
}

persona1.nuevoMétodo()