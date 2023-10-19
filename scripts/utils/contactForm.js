function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
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