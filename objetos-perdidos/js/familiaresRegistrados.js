document.addEventListener("DOMContentLoaded", function () {
  const itemCabecera = document.querySelectorAll(".card.familiares");

  itemCabecera.forEach((item) => {
    const flecha = item.querySelector(".buttons.cuerpo .flecha");
    const botonMobil = item.querySelector(".cabeceraFamiliar .botonMobil");

    const toggleActive = (e) => {
      e.preventDefault();
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        return;
      }
      itemCabecera.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    };

    if (flecha) flecha.addEventListener("click", toggleActive);
    if (botonMobil) botonMobil.addEventListener("click", toggleActive);
  });

  const items2 = document.querySelectorAll(".itemInfo");
  items2.forEach((item) => {
    const flecha = item.querySelector(".flecha");

    if (!flecha) return;

    flecha.addEventListener("click", function (e) {
      e.preventDefault();
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        return;
      }
      items2.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });

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
});
