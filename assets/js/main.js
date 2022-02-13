// id boton enviar
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
}
//Crear  array con push y variable capturarUsuario
var baseDatos = [];
function agregar() {
  baseDatos.push(capturarUsuario);
  document.getElementById("prueba").innerHTML +=
    "<p> La reservación quedara agendada  a nombre de" +
    " " +
    capturarUsuario.nombre +
    "</p>" +
    " " +
    "<p>" +
    capturarUsuario.apellido +
    "</p>" +
    "<p Corre Electrónico : " +
    " " +
    capturarUsuario.correo +
    "</p>" +
    "<p> para el dia " +
    " " +
    capturarUsuario.fecha +
    "</p>";
}

//validar terminos y condiciones

const validateTerms = (document.getElementById("formulario").onsubmit =
  function acceptTerms() {
    opcion = document.formulario.condiciones; //acceso al botón
    if (opcion.checked == true) {
      agregar();
    } else {
      //botón no seleccionado
      alert(
        "El formulario no ha podido enviarse. \n Debe aceptar las condiciones para poder enviar el formulario"
      );
      return false; //el formulario no se envia
    }
  });
