// Enlace implícito | implicit biding

const house = {
  dogName: 'Fido',
  dogGreeting: function () {
    console.log(`Hi I'm ${this.dogName}`)
  }
}

house.dogGreeting()

// Enlace explícito | explicit biding

function dogGreeting () {
  console.log(`Hi I'm ${this.dogName}`)
}

const dogHouse = {
  dogName: 'Campanita'
}

/*'__________________________________________'*/

dogGreeting.call(dogHouse)

function newDogGreeting (owner, address) {
  console.log(`Hi I'm ${this.dogName} and I live with ${owner} on ${address}.`)
}

const owner = 'Antonio'
const address = 'San Pedro, RD'

newDogGreeting.call(dogHouse, owner, address)