// Se carga modal Inicial de advertencia
$(document).ready(function () {
  $("#modalInicial").modal("show");
});

const buttonSend = document.getElementById("send");
buttonSend.addEventListener("click", enviar, false);

// Captura datos de formulario de contacto
function enviar() {
  class Persona {
    constructor(nombre, apellido, correo, escribe) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.escribe = escribe;
      this.fecha = capturarFecha;
    }
  }
  var capturarNombre = document.getElementById("nombre").value;
  var capturarApellido = document.getElementById("apellido").value;
  var capturarCorreo = document.getElementById("correo").value;
  var capturarMensaje = document.getElementById("escribe").value;
  var capturarFecha = document.getElementById("fecha").value;
  var fecha = new Date();
  fecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
  capturarFecha;

  capturarUsuario = new Persona(
    capturarNombre,
    capturarApellido,
    capturarCorreo,
    capturarMensaje
  );

  agregar();
}
//Crear  array con push y variable capturarUsuario
var baseDatos = [];
function agregar() {
  baseDatos.push(capturarUsuario);
  document.getElementById("prueba").innerHTML +=
    "<p>" +
    capturarUsuario.nombre +
    "</p>" +
    "<p>" +
    capturarUsuario.apellido +
    "</p>" +
    "<p>" +
    capturarUsuario.correo +
    "</p>" +
    "<p>" +
    capturarUsuario.escribe +
    "</p>" +
    "<p>" +
    capturarUsuario.fecha +
    "</p>";
}
