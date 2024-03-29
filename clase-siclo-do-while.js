/*
¿Cuál es la diferencia entre while y do while?
En do while primero se ejecuta el código y luego evalúa la condición, si la cumple continúa el ciclo.

En while primero se evalúa la condición y si ésta se cumple entonces ejecuta el código.

caso de uso es, si quieres que tu codigo se ejecute antes que la condición usas do while, en caso adverso usas solo el while.
*/

let contador = 0

do {
  console.log(contador)
  contador++
} while (contador < 10)