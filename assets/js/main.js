/* Función ciclo While pregunta si usuario tiene pase de movilidad para hacer reserva
 ya que sin el no se puede ingresar al local.*/

function validateMobilityPass() {
  let repeat = true;
  let askMobilityPass = prompt(
    "¿Deseas continuar con la reserva. Responde con un SI o un NO"
  ).toLocaleLowerCase();
  while (repeat) {
    if (askMobilityPass == "si") {
      alert("Puedes continuar con tu reserva :D");
      break;
    } else if (askMobilityPass == "no") {
      alert("Conseguir mi pase de movilidad");
      location.href =
        "https://www.chileatiende.gob.cl/fichas/93514-pase-de-movilidad";
      repeat = false;
    }
  }
}

validateMobilityPass();

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
  var captureName = document.getElementById("getName").value;
  var captureLastName = document.getElementById("getLastName").value;
  var captureMail = document.getElementById("getMail").value;
  var captureComment = document.getElementById("getComment").value;
  var captureAppointment = document.getElementById("getAppointment").value;
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
//Array para almacenar datos solicitados al usuario para reserva
let personDataBase = [];
// Se guardan e imprimen datos en pantalla para luego pedir confimaciòn a usuario y finalizar la reserva
function addData() {
  personDataBase.push(captureUser);
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
    captureUser.appointment +
    "</p>";
}

//CICLO donde se solicita id de formulario para acceder a check terminos y condiciones

const validateTerms = (document.getElementById("applicationForm").onsubmit =
  function acceptTerms(event) {
    accept = document.applicationForm.terms; //acceso a check terminos y condiciones
    event.preventDefault();
    if (accept.checked == true) {
      addData();
      cleanInput();
    } else {
      //Ingresa en esta parte del ciclo cuando se hace click en boton enviar sin aceptar terminos
      alert(
        "El formulario no ha podido enviarse. \n Debe aceptar las condiciones para poder enviar el formulario"
      );
      return false; // no se envia informaciòn de reserva
    }
  });
// Limpiar campos cuando el usuario haga click en enviarpara que no se  duplique  informaciòn
function cleanInput() {
  setTimeout("document.applicationForm.reset()", 100);
  return false;
}
