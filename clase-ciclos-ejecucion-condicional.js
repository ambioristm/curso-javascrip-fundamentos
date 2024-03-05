let nombre = 'Tomas'

if (nombre === 'Antonio') {
  console.log('Hola Antonio')
} else {
  console.log('Nombre no encontrado')
}

// Asigna el valor 'Tomas' a la variable nombre.
// let nombre = 'Tomas'

// Comprueba si el valor de nombre es estrictamente igual a 'Tomas'.
if (nombre === 'Tomas') {
    // Imprime en la consola un mensaje de bienvenida específico para 'Tomas'.
    console.log('Bienvenido Tomas');
} 
// Si la condición anterior es falsa, verifica si el valor de nombre es estrictamente igual a 'Antonio'.
else if (nombre === 'Antonio') {
    // Imprime en la consola un mensaje de bienvenida específico para 'Antonio'.
    console.log('Bienvenido: Antonio');
} 
// Si ninguna de las condiciones anteriores es verdadera, ejecuta este bloque de código.
else {
    // Imprime en la consola un mensaje indicando que el usuario es desconocido.
    console.log('Usuario desconocido');
}