// id boton eviar  datos para hacer confirmaciòn
s;

// Captura datos de formulario de contacto
function post() {
  class Persona {
    constructor(name, lastName, mail, comment) {
      this.name = name;
      this.lastName = lastName;
      this.mail = mail;
      this.comment = comment;
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

  captureUser = new Persona(
    capturarNombre,
    capturarApellido,
    capturarCorreo,
    capturarMensaje
  );
}
//Crear  array con push y variable capturarUsuario
var baseDatos = [];
function agregar() {
  baseDatos.push(captureUser);
  document.getElementById("prueba").innerHTML +=
    "<p> La reservación quedara agendada  a nombre de" +
    " " +
    captureUser.name +
    "</p>" +
    " " +
    "<p>" +
    captureUser.lastName +
    "</p>" +
    "<p Corre Electrónico : " +
    " " +
    captureUser.mail +
    "</p>" +
    "<p> para el dia " +
    " " +
    captureUser.fecha +
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
