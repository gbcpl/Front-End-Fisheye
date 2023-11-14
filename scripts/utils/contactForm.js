function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("aria-hidden", "false")
    modal.setAttribute("tabindex", "0")
    modal.style.display = "block";

    const mainContent = document.getElementById("main");
    mainContent.setAttribute("aria-hidden", "true");

    const dailyPrice = document.getElementById("daily-rate");
    dailyPrice.setAttribute("aria-hidden", "true");

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeModal();
        }
    });

    modal.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("aria-hidden", "true")
    modal.removeAttribute("tabindex");
    modal.blur();
    modal.style.display = "none";

    const mainContent = document.getElementById("main");
    mainContent.setAttribute("aria-hidden", "false");

    const dailyPrice = document.getElementById("daily-rate");
    dailyPrice.setAttribute("aria-hidden", "false");
}

async function getName() {
    await getPhotographers();
    const findId = data.photographers.find((e) => e.id === idPhotographer)
    const nameOfPhotographer = document.getElementById("name-photographer");
    nameOfPhotographer.textContent = findId.name;
}

getName()

const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("mail");
const message = document.getElementById("message");

let paragraphFirst = document.getElementById("paragraphFirst");
let paragraphLast = document.getElementById("paragraphLast");
let paragraphMail = document.getElementById("paragraphMail");
let paragraphMessage = document.getElementById("paragraphMessage");


firstName.addEventListener("change", isFirstNameValid);
let firstNameValid = 0;

function isFirstNameValid() {

    if (firstName.value.length < 2 || /\d/.test(firstName.value)) {

        const formFirstName = document.getElementById("formFirstName");
    
        // if the paragraph for invalid first name isn't present, create it with a specified ID after the input field
        if (!paragraphFirst || paragraphFirst == 0) {
            paragraphFirst = document.createElement("p");
            paragraphFirst.id = "paragraphFirst";
            paragraphFirst.setAttribute("class", "error");
            formFirstName.appendChild(paragraphFirst);
        }

        // fill the paragraph created previously with the textContent method
        paragraphFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    } else {

        // if the message for invalid first name is present, remove it
        if (paragraphFirst) {
          paragraphFirst.remove();
          paragraphFirst = 0;
        }

    firstNameValid = 1;
  }
}

lastName.addEventListener("change", isLastNameValid);
let lastNameValid = 0;

function isLastNameValid() {
  if (lastName.value.length < 2 || /\d/.test(lastName.value)) {

    const formLastName = document.getElementById("formLastName");

    if (!paragraphLast || paragraphLast == 0) {
      paragraphLast = document.createElement("p");
      paragraphLast.id = "paragraphLast";
      paragraphLast.setAttribute("class", "error");
      formLastName.appendChild(paragraphLast);
    }

    paragraphLast.textContent = "Veuillez entrer un nom de famille de 2 caractères ou plus."
  } else {

    if (paragraphLast) {
      paragraphLast.remove();
      paragraphLast = 0;
    }

    lastNameValid = 1;
  }
}

email.addEventListener("change", isEmailValid);
let emailValid = 0;

function isEmailValid() {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailFormat)) {

    if (paragraphMail) {
      paragraphMail.remove();
      paragraphMail = 0;
    }

    emailValid = 1;
  } else {

    const formMail = document.getElementById("formMail");

    if (!paragraphMail || paragraphMail == 0) {
      paragraphMail = document.createElement("p");
      paragraphMail.id = "paragraphMail";
      paragraphMail.setAttribute("class", "error");
      formMail.appendChild(paragraphMail);
    }

    paragraphMail.textContent = "Veuillez entrer un email valide."
  }
}

message.addEventListener("change", isMessageValid);
let messageValid = 0;

function isMessageValid() {
  if (message.value.length < 100 || message.value.length >= 1000) {

    const formMessage = document.getElementById("formMessage");

    if (!paragraphMessage || paragraphMessage == 0) {
        paragraphMessage = document.createElement("p");
        paragraphMessage.id = "paragraphMessage";
        paragraphMessage.setAttribute("class", "error");
        formMessage.appendChild(paragraphMessage);
    }

    paragraphMessage.textContent = "Veuillez entrer entre 100 caractères et 1000 caractères."
  } else {

    if (paragraphMessage) {
        paragraphMessage.remove();
        paragraphMessage = 0;
    }

    messageValid = 1;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  if (firstNameValid == 1 && lastNameValid == 1 && emailValid == 1 && messageValid == 1 ) {
    console.log("Prénom : " + firstName.value);
    console.log("Nom : " + lastName.value);
    console.log("Email : " + email.value);
    console.log("Message : " + message.value);
    form.reset();
    closeModal();

  } else {
    alert("Veuillez remplir tous les champs");
  }

});