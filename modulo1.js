function holaMundo(nombre) {
    return "Hola Mundo !! soy " + nombre;
}
var nombre = "Claudio Olivera";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
