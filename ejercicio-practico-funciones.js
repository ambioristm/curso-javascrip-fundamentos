// Create FamilyTrinidad objets
function TrinidadFamily (name, relationship, age) {
  this.name = name
  this.relationship = relationship
  this.age = age
  this.isFather = false

  this.displayInfo = function () {
    console.log(`Información Familiar:
    Nombre: ${this.name}
    Parentesco: ${this.relationship}
    Edad: ${this.age}
    ¿Es el Papá?: ${this.isFather}
    ${this.isFather ? 'Papá: Sí' : 'Papá: No'}
    `)
  }
  this.beFather = function () {
    this.isFather = true
    console.log(`${this.name} Sí, es el Papá`)
  }
}

const mariaIsabel = new TrinidadFamily('Maria Isabel', 'Madre', 'Ama a sus hijos y Esposo')
const mariluz = new TrinidadFamily('Mariluz', 'Hija', 'Ama a su hermano y sus Padres')
const josue = new TrinidadFamily('Josué', 'Hijo', 'Le gusta jugar y ver muñequitos')
const antonio = new TrinidadFamily('Antonio', 'Padre', 'Trabajador Incondicional')

mariaIsabel.displayInfo()
mariluz.displayInfo()
josue.displayInfo()
antonio.displayInfo()

antonio.beFather()

mariaIsabel.displayInfo()
mariluz.displayInfo()
josue.displayInfo()
antonio.displayInfo()
