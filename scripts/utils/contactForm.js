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

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  // vérification
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("mail").value;
  const message = document.getElementById("message").value;

  console.log("Prénom : " + firstName);
  console.log("Nom : " + lastName);
  console.log("Email : " + email);
  console.log("Message : " + message);

  closeModal();
});