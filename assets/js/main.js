// id boton eviar  datos para hacer confirmaciòn
const buttonSend = document.getElementById("send");
buttonSend.addEventListener("click", post, false);

// Captura datos de formulario de contacto
function post() {
  class Person {
    constructor(name, lastName, mail, comment) {
      this.name = name;
      this.lastName = lastName;
      this.mail = mail;
      this.comment = comment;
      this.appointment = captureAppointment;
    }
  }
  var captureName = document.getElementById("nombre").value;
  var captureLastName = document.getElementById("apellido").value;
  var captureMail = document.getElementById("correo").value;
  var captureComment = document.getElementById("escribe").value;
  var captureAppointment = document.getElementById("fecha").value;
  var appointment = new Date();
  appointment =
    appointment.getDate() +
    "/" +
    appointment.getMonth() +
    "/" +
    appointment.getFullYear();
  captureAppointment;

  captureUser = new Person(
    captureName,
    captureLastName,
    captureMail,
    captureComment
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
