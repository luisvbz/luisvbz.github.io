document.addEventListener("DOMContentLoaded", function () {
  // Manejo de itemDesplegable
  document.querySelectorAll(".cabecera").forEach((cabecera) => {
    cabecera.addEventListener("click", function () {
      let item = this.closest(".itemDesplegable");

      // Si ya tiene la clase active, se la quita
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        // Remover la clase active de todos los itemDesplegable
        document
          .querySelectorAll(".itemDesplegable")
          .forEach((el) => el.classList.remove("active"));

        // Agregar la clase active solo al itemDesplegable actual
        item.classList.add("active");
      }
    });
  });

  // Manejo de subitemDesplegable
  document.querySelectorAll(".cabecera2").forEach((cabecera2) => {
    cabecera2.addEventListener("click", function (e) {
      e.stopPropagation(); // Evita que el evento se propague a los padres

      let subItem = this.closest(".subitemDesplegable");

      // Si ya tiene la clase active, se la quita
      if (subItem.classList.contains("active")) {
        subItem.classList.remove("active");
      } else {
        // Remover la clase active de todos los subitemDesplegable dentro del mismo itemDesplegable activo
        this.closest(".cuerpo")
          .querySelectorAll(".subitemDesplegable")
          .forEach((el) => el.classList.remove("active"));

        // Agregar la clase active solo al subitemDesplegable actual
        subItem.classList.add("active");
      }
    });
  });
});
