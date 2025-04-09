document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".itemLista .numero");
  const botonRegistrar = document.querySelector(".listasVotacion .registrar");
  const modalPopup = document.querySelector(".modalPopup");
  const closeModal = document.querySelector(".modalPopup .closeModal");
  const contentInfo = document.querySelector(".listasVotacion .contentInfo");

  let activeItem = null; // Guarda el item activo para actualizar su altura dinámicamente

  // Función para actualizar la altura de .contentInfo
  function actualizarAlturaContentInfo() {
    if (window.innerWidth <= 500 && activeItem) {
      const nombre = activeItem.querySelector(".nombre");
      if (nombre && contentInfo) {
        contentInfo.style.height = `${nombre.offsetHeight}px`;
      }
    } else {
      contentInfo.style.height = ""; // Reiniciar altura si la pantalla es mayor a 500px
    }
  }

  // Manejo de selección de listas
  botones.forEach((button) => {
    button.addEventListener("click", function () {
      document
        .querySelectorAll(".itemLista")
        .forEach((item) => item.classList.remove("active"));
      const parentItem = this.closest(".itemLista");
      parentItem.classList.add("active");
      activeItem = parentItem; // Guardar el item activo

      // Activar el botón 'registrar' si hay un item seleccionado
      botonRegistrar.classList.toggle(
        "active",
        !!document.querySelector(".itemLista.active")
      );

      // Actualizar la altura de .contentInfo
      actualizarAlturaContentInfo();
      contentInfo.classList.add("active");
    });
  });

  // Escuchar cambios de tamaño de ventana para actualizar la altura de contentInfo
  window.addEventListener("resize", actualizarAlturaContentInfo);

  // Mostrar la modal cuando se hace clic en 'registrar'
  botonRegistrar.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      modalPopup.classList.add("active");
    }
  });

  // Cerrar la modal cuando se hace clic en el botón 'close'
  closeModal.addEventListener("click", function () {
    modalPopup.classList.remove("active");
  });
});
