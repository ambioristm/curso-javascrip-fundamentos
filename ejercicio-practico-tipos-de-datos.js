//Social Media Profile

// 1. User information
const username = 'codingAdventurer'
const fullName = 'Antonio Trinidad'
const age = 25
const isStudent = true

// 2. Address
const address = {
  street: '123 Main Street',
  city: 'Techville',
  zipCode: 54321
}

// 3. Hobbies
const hobbies = ['Codificar', 'Leer', 'Gaming']

// 4. Generating personalized bio
const personalizedBio = `Hola, Soy ${fullName}. 
Tengo ${age} años de edad.
Vivo en ${address.city}.
Amo ${hobbies.join(', ')}.
Sígueme para algunas aventuras de código!
`

// 5. Print the user profile and bio
console.log(personalizedBio)
