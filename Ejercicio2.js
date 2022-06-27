/*Realizar un script llamado Ejercicio2.js, que dado el array [1,2,3,4,5,7] realice una copia del array sumándole 1 a cada uno de los valores. */

var obj2 = [];
var testArray = [1,2,3,4,5,7];
for (var i = testArray.length; i--;) {
  obj2.unshift(testArray[i] + 1);
}
