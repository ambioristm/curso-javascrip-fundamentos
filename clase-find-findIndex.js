// Methods that iterate over and array.
// Methods that DO NOT modify the original array (Immutability).

// find()

const multipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 = multipleOf5.find(Number => Number > 10)

console.log(multipleOf5)
console.log(firstNumberGreaterThan10)

// findIndex()

const randomNumber = [6, 14, 27, 56, 40]
const indexNumber = randomNumber.findIndex(Number => Number > 50)

console.log(randomNumber)
console.log(indexNumber)

// Exercise: Raffle Winner Verification Program.

const winningParticipants = [
  { id: 1, name: 'Jennifer', ticketNumber: '001' },
  { id: 8, name: 'Michael', ticketNumber: '008' },
  { id: 15, name: 'Emily', ticketNumber: '015' },
  { id: 47, name: 'Charlie', ticketNumber: '047' }
]

function findWinnerByName (name) {
  const Winner = winningParticipants.find(participants => participants.name === name)
  return Winner || 'No winner found with that name.'
}

function findIndexWinnerByTicket (ticketNumber) {
  const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
  return index !== -1 ? index : 'No winner found with that ticket number.'
}

function displayWinnerInformation (winner) {
  if (winner !== undefined && winner != null && winner !== 'No winner found with that name.') {
    console.log('Winner Information: ', winner)
  } else {
    console.log('No winner found.')
  }
}

const winnerByName = findWinnerByName('Emily')
const indexWinnerByTicket = findIndexWinnerByTicket('008')

displayWinnerInformation(winnerByName)
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)
