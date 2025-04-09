document.addEventListener("DOMContentLoaded", function () {
  const botonRegistrarDoc = document.querySelector(".mesaPartes .nuevoDoc");
  const modalPopupDoc = document.querySelector(".modalRegistrarDocumento");
  const closeModalDoc = document.querySelector(
    ".modalRegistrarDocumento .closeModal"
  );
  const enviarMensaje = document.querySelector(
    ".modalRegistrarDocumento .enviarMensaje"
  );
  const etapa1 = document.querySelector(".modalRegistrarDocumento .etapa1");
  const etapa2 = document.querySelector(".modalRegistrarDocumento .etapa2");

  botonRegistrarDoc.addEventListener("click", function () {
    modalPopupDoc.classList.add("active");
  });

  enviarMensaje.addEventListener("click", function () {
    etapa1.classList.toggle("ocultar");
    etapa2.classList.toggle("ocultar");
  });

  // Cerrar la modal cuando se hace clic en el botón 'close'
  closeModalDoc.addEventListener("click", function () {
    modalPopupDoc.classList.remove("active");
    etapa1.classList.remove("ocultar");
    etapa2.classList.add("ocultar");
  });
});
