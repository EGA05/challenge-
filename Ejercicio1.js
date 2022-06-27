/*Realizar un script llamado Ejercicio1.js, que contenga una función llamada CantidadMayusculas que reciba como parámetro un string 
y devuelva el número de letras mayúsculas que contiene dicha cadena. El valor devuelto debe ser mostrado en pantalla. */

function CantidadMayusculas (cadena) {
    var contar = 0;
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==mayusculas[i]){
                contar+=1;
            }
        }
    }
    return contar;
}

document.getElementById('cadena').addEventListener('input', function(evt) {
    var str = evt.target.value,
    puntaje = CantidadMayusculas(str);
    document.getElementById('resultado').innerText = JSON.stringify(puntaje);
});
