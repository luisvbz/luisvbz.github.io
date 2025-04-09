document.addEventListener("DOMContentLoaded", function () {
  // Click en el enlace con clase .parrilla
  const enlaceParrilla = document.querySelector("a.parrilla");
  const contentMenu = document.querySelector(".contentMenu");

  enlaceParrilla?.addEventListener("click", function (e) {
    e.preventDefault();

    if (contentMenu) {
      contentMenu.classList.add("ocultarContent");
    }

    // Quitar clase 'ocultarContent' de los elementos que la tengan
    document.querySelectorAll(".ocultarContent").forEach(function (el) {
      if (el !== contentMenu) {
        el.classList.remove("ocultarContent");
      }
    });
  });

  // Click en el botón con clase .nuevaReserva
  const botonReserva = document.querySelector("button.nuevaReserva");
  const modalAviso = document.querySelector(".modalAvisoImportante");

  botonReserva?.addEventListener("click", function () {
    modalAviso?.classList.add("active");
  });

  const ClosemodalAviso = document.querySelector(
    ".modalAvisoImportante .closeModal"
  );
  ClosemodalAviso?.addEventListener("click", function (e) {
    modalAviso?.classList.remove("active");
  });

  const deacuerdomodalAviso = document.querySelector(
    ".modalAvisoImportante .deacuerdo"
  );
  deacuerdomodalAviso?.addEventListener("click", function (e) {
    modalAviso?.classList.remove("active");
  });

  const atrascontent = document.querySelector(".contentParrillas .atras");
  const contentParrillas = document.querySelector(".contentParrillas");
  atrascontent?.addEventListener("click", function (e) {
    contentParrillas?.classList.add("ocultarContent");
    contentMenu?.classList.remove("ocultarContent");
  });
});
