/* Función ciclo While pregunta si usuario tiene pase de movilidad para hacer reserva
 ya que sin el no se puede ingresar al local.*/

function validateMobilityPass() {
  // SE PODRIA MODIFICAR POR UNSWITCH??
  let repeat = true;
  let askMobilityPass = prompt(
    "Recuerda que al momento de hacer valida tu reserva debes presentar tu pase de movilidad vigente,\n¿Deseas continuar con la reserva. Responde con un SI o un NO"
  ).toLocaleLowerCase();
  while (repeat) {
    if (askMobilityPass == "si") {
      alert("Puedes continuar con tu reserva :D");
      break;
    } else if (askMobilityPass == "no" || askMobilityPass !== " ") {
      alert("Conseguir mi pase de movilidad");
      location.href =
        "https://www.chileatiende.gob.cl/fichas/93514-pase-de-movilidad";
      repeat = false;
    }
  }
}

validateMobilityPass();
function printDataTable() {
  class Mesa {
    constructor(id, name, price, description, img) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.img = img;
    }
  }
  const dataTable = [
    {
      id: "mesa 1",
      name: "Barra",
      price: " El valor de reserva es de $5000 p/p ",
      description: "uno",
      img: "assets/img/barra.jpg ",
    },
    {
      id: "mesa 2",
      name: "Mesa General",
      price: " El valor de reserva es de $5000 p/p ",
      description: " dos",
      img: "assets/img/barra.jpg ",
    },
    {
      id: "mesa 3",
      name: "Mesa Balcón",
      price: " El valor de reserva es de $5000 p/p ",
      description: "tres",
      img: "assets/img/barra.jpg ",
    },
    {
      id: "mesa 4",
      name: "Mesa Exterior",
      price: " El valor de reserva es de $5000 p/p ",
      description: "Ideal para venir con los màs peques de la casa. ",
      img: "/assets/img/MesaPiscina.jpg ",
    },
    {
      id: "mesa 5",
      name: "Mesa Exterior",
      price: " El valor de reserva es de $5000 p/p ",
      description: "4 ",
      img: "assets/img/MesaPiscina.jpg ",
    },
    {
      id: "mesa 6",
      name: "Mesa Exterior",
      price: " El valor de reserva es de $5000 p/p ",
      description: "5 ",
      img: "assets/img/MesaPiscina.jpg ",
    },
    {
      id: "mesa 7",
      name: "Mesa Exterior",
      price: " El valor de reserva es de $5000 p/p ",
      description: "6 ",
      img: "assets/img/MesaPiscina.jpg ",
    },

    {
      id: "mesa 8",
      name: "Mesa Exterior",
      price: " El valor de reserva es de $5000 p/p ",
      description: "siete ",
      img: "assets/img/MesaPiscina.jpg ",
    },
  ];

  // Funciòn donde se implementa  array para imprimir caracteristicas de mesas disponibles para reserva

  //const CardStructure = document.getElementById("main");
  const templateCard = document.getElementById("template-card").content;
  const cards = document.getElementById("cards");
  const fragment = document.createDocumentFragment();
  for (const arrayDataTable of dataTable) {
    var buttonTable = (templateCard.querySelector(".btn-dark").dataset.id =
      arrayDataTable.id);
    nameTable = templateCard.querySelector("h5").textContent =
      arrayDataTable.name;

    priceTable = templateCard.querySelector("h6").textContent =
      arrayDataTable.price;
    descriptionTable = templateCard.querySelector("p").textContent =
      arrayDataTable.description;

    imgTable = templateCard
      .querySelector("img")
      .setAttribute("src", arrayDataTable.img);

    capturetable = new Mesa(
      buttonTable,
      nameTable,
      priceTable,
      descriptionTable,
      imgTable
    );

    const clone = templateCard.cloneNode(true);

    fragment.appendChild(clone);
  }
  cards.appendChild(fragment);
}
printDataTable();

// AQUÌ COMIENZA FUNCIÒN PARA  SOLICITAR DATOS GUARDARLOS EN ARRAY Y LUEGO ENVIAR FORMULARIO

// id boton eviar  datos para hacer confirmaciòn
const buttonSend = document.getElementById("send");
buttonSend.addEventListener("click", post, false);

// Captura datos de formulario de contacto
function post() {
  class Person {
    constructor(name, lastName, mail, comment, numberPerson) {
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
  var capturenumberPerson = document.getElementById("getNumberPerson").value;
  const valorreserva = 5000;

  answer = capturenumberPerson * valorreserva;

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
    "<p>" +
    " " +
    "<p>La reservación quedara agendada  a nombre de" +
    " " +
    captureUser.name +
    "</p>" +
    " " +
    "<p>" +
    captureUser.lastName +
    "</p>" +
    "<p Corre Electrónico : " +
    " " +
    "<p>" +
    captureUser.mail +
    "</p>" +
    "<p> para el dia " +
    " " +
    captureUser.appointment +
    "</p>" +
    "<p>" +
    answer +
    "</p>";
}

// Limpiar campos cuando el usuario haga click en enviarpara que no se  duplique  informaciòn
function cleanInput() {
  setTimeout("document.applicationForm.reset()", 100);
  return false;
}

//VALIDACIÒN FORMULARIO

const validationAccess = document.addEventListener(
  "DOMContentLoaded",
  function () {
    document
      .getElementById("applicationForm")
      .addEventListener("submit", validateForm);
  }
);

function validateForm(evento) {
  evento.preventDefault();
  let validateName = document.getElementById("getName").value;
  if (validateName.length == 0) {
    alert("Escribe tu nombre");
    return;
  }
  let validateLastName = document.getElementById("getLastName").value;
  if (validateLastName.length == 0) {
    alert("escribe tu apellido");
    return;
  }
  let validateLastMail = document.getElementById("getMail").value;
  if (validateLastMail.length == 0) {
    alert("escribe tu correo");
    return;
  }

  let validateAppointment = document.getElementById("getAppointment").value;
  if (validateAppointment.length == 0) {
    alert("Ingresa una fecha");
    return;
  }
  let validateNumbwrPerson = document.getElementById("getNumberPerson").value;
  if (validateNumbwrPerson == 0) {
    alert("Ingresa un numero de personas");
    return;
  }

  let acceptTerms = document.applicationForm.terms; //acceso a check terminos y condiciones

  if (acceptTerms.checked == true) {
    addData();
    cleanInput();
  } else {
    //Ingresa en esta parte del ciclo cuando se hace click en boton enviar sin aceptar terminos
    alert(
      "El formulario no ha podido enviarse. \n Debe aceptar las condiciones para poder enviar el formulario"
    );
    return false; // no se envia informaciòn de reserva
  }
}

// Funciòn para aislar id del boton y al hacer click añadirlo a un array.
function separateIdButton() {
  cards.addEventListener("click", (e) => {
    if (e.target.dataset.id) {
      const addDataTable = [];
      console.log(addDataTable);
      addDataTable.push(e.target.dataset.id);
    }
    e.stopPropagation();
  });
}
separateIdButton();
