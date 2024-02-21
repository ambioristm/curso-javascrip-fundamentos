const owner = 'Josué'
const address = '123 Avenue'

function dogGreeting (owner, address) {
  console.log(`Hi I'm ${this.dogName} and I live with ${owner} on ${address}.`)
}

const newHouse = {
  dogName: 'Pirulito'
}

dogGreeting.call(newHouse, owner, address)

const necesaryValues = [owner, address]
dogGreeting.apply(newHouse, necesaryValues)

const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
bindingWithBind()