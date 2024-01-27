var botonBesos = document.getElementById("botonBesos");
var textoBesos = document.getElementById("textoBesos");

var contador = 0;

botonBesos.addEventListener("click", function () {
  contador++;
  actualizarTextoBesos();
});

botonBesos.addEventListener("mouseenter", function () {
  actualizarTextoBesos();
  textoBesos.classList.remove("invisible");
});

botonBesos.addEventListener("mouseleave", function () {
  textoBesos.classList.add("invisible");
});

function actualizarTextoBesos() {
  textoBesos.innerHTML = "¡Muah! 😘 (" + contador + " beso(s))";
}
