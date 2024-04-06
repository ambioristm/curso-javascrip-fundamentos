// Methods that modify the original array (Mutability).

// push()
// En JavaScript, los métodos push() y pop() se utilizan para realizar modificaciones básicas al final de un array. Aquí tienes una explicación de cómo funcionan:
// Método push():
// El método push() se utiliza para agregar uno o más elementos al final de un array. Modifica el array original y devuelve la nueva longitud del array.

const countries = ['USA', 'Canada', 'UK']
const newCountries = countries.push('Germany', 'Australia')

console.log(countries)
console.log(newCountries)

// pop
// Método pop():
// El método pop() se utiliza para eliminar el último elemento de un array. Modifica el array original y devuelve el elemento eliminado.

const removeCountries = countries.pop()

console.log(countries)
console.log(removeCountries)

// Exercise: Managing a Stack

let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart () {
  console.log('Current Cart of Books: ', bookCart)
}

function performCartActions (action, newBook) {
  switch (action) {
    case ADD_TO_CART_ACTION:
      bookCart.push(newBook)
      break;
      case REMOVE_FROM_CART_ACTION:
        if (bookCart.length === 0) {
          console.log('Cart is empty. No books to remove.')
        } else {
          const removedBook = bookCart.pop()
          console.log(`Removed book from the cart: ${removedBook}`)
        }
      break;
      case VIEW_CART_ACTION:
        viewCart()
      break;  
    default:
      console.log('Invalid action. Please choose a valid option.')  
  }
}
performCartActions(ADD_TO_CART_ACTION, 'The Bible')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION, 'The Bible')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION, 'The Bible')