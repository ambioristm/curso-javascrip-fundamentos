class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log('El animal emite un sonido')
  }
}

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }
  emitirSonido() {
    console.log('El perro ladra')
  }
  correr() {
    console.log(`${this.nombre} corre alegre`)
  }
}

const perro1 = new Perro('Pirulito', 'Perro', 'Chihuahua')
console.log(perro1)
perro1.correr()
perro1.emitirSonido()

// para crear un nuevo methodo 

perro1.nuevoMétodo = function() {
  console.log('Este es un método')
}

// para llamar al método de esa instancia
perro1.nuevoMétodo()

// para poder inyectar un nuevo método a las instancias por herencia lo hacemos de la siguiente forma.

Perro.prototype.segundoMétodo = function() {
  console.log('Este es otro nuevo método')
}

// para llamar a ese segundo método

perro1.segundoMétodo()