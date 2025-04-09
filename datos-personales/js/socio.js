const items3 = document.querySelectorAll(
  ".modalPreferencias .content .elemento"
);
items3.forEach((item) => {
  const flecha = item.querySelector(".cabecera");

  if (!flecha) return;

  flecha.addEventListener("click", function (e) {
    e.preventDefault();
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      return;
    }
    items3.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

document
  .querySelectorAll(".modalPreferencias .listaInputs .contentInput label")
  .forEach((label) => {
    label.addEventListener("click", function (event) {
      let contentInput = this.closest(".contentInput");

      // Si ya tiene la clase "active", la quitamos, sino, la añadimos
      if (contentInput.classList.contains("active")) {
        contentInput.classList.remove("active");
        contentInput.querySelector("input").checked = false; // Desmarcar el input
      } else {
        contentInput.classList.add("active");
        contentInput.querySelector("input").checked = true; // Marcar el input
      }

      event.preventDefault(); // Evita que se active el radio automáticamente
    });
  });

document.querySelectorAll(".editarPreferencia").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelector(".modalPreferencias").classList.add("active");
  });
});

document
  .querySelector(".closeModalPreferencias")
  .addEventListener("click", function () {
    document.querySelector(".modalPreferencias").classList.remove("active");
  });

document
  .querySelector(".modalPreferencias .content .guardar")
  .addEventListener("click", function () {
    document.querySelector(".modalPreferencias").classList.remove("active");
  });

// Cerrar la modal cuando se hace clic en el botón 'close'
const btnmodalOpen = document.querySelector(".candadoPassword");
const modalPopup = document.querySelector(".modalContrasena");
const closeModal = document.querySelector(".modalContrasena .closeModal");
const modalfinal = document.querySelector(".modalPopup");
btnmodalOpen.addEventListener("click", function () {
  modalPopup.classList.add("active");
});
closeModal.addEventListener("click", function () {
  modalPopup.classList.remove("active");
});

/* cambiar contraseña */

document
  .getElementById("cambiarContraseña")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let password = document.getElementById("contrasenaNueva").value;
    let confirmPassword = document.getElementById("confirmarContrasena").value;

    let form = document.getElementById("cambiarContraseña");

    form.classList.remove("error");

    if (password !== confirmPassword) {
      form.classList.add("error");
    } else {
      modalPopup.classList.remove("active");
      modalfinal.classList.add("active");
      /*this.submit();*/
    }
  });
