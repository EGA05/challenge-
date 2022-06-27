/*Realizar un script llamado Ejercicio3.js, que dado un array, ordene sus valores de menor a mayor y  los muestre por pantalla*/

var number = [5,2,1,4,8,7,6,3,9];
ordenar(number);

function ordenar(numeros) {
    if (Array.isArray(numeros) && numeros.length) {
        var ordenado = numeros.sort(function(a, b){return a - b});
        var message = "Array a ordenar "+ number + "\nArray ordenado "+ ordenado;
        alert(message);
    }
    else {
        alert("No se recibio arreglo de números a ordenar, ejemplo: [2,1,4,6]");
    }
}
