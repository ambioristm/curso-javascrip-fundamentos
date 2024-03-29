/*
Loop: while
Lo usamos para poder meter instrucciones en un ciclo y se vaya repitiendo siempre y cuando se cumpla la condición que tenemos en él. Es importante comprenderlo y saber utilizarlo, de no hacerlo bien podemos generar bucles infinitos que harán colapsar al navegador.


while(condición) {
    //código
}
Primero generamos una variable que se convertirá en un contador, lo incluiremos en la condición para que se vaya incrementando:

Cuando usar for y while
A veces podría parecer confuso o podríamos preguntarnos ¿Para qué me sirve while cuando ya tenemos for?

Es muy útil usar for cuando sabes exactamente cuantas veces tienes que iterar o la cantidad límite, por ejemplo la cantidad de elementos de un array o un número específico que tengamos en mente.

El Loop while es muy útil precisamente cuando no tenemos un límite en mente.
*/

let contador = 0

while (contador < 10) { //mientras contador sea menor a 10 entonces
    console.log(contador); //imprimirá en la consola el valor de contador en ese momento
    contador++; //luego le sumamos 1. ¡¡MUY IMPORTANTE!! porque si no lo hacemos contador siempre va a ser menor a 10 = BUCLE INFINITO!! y el navegador se crasheará!!!
}