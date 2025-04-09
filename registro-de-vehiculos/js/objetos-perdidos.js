document.addEventListener("DOMContentLoaded", function () {
  const adjuntarImagen = document.querySelector(".adjuntarImagen");
  const modalAdjuntarImagen = document.querySelector(".modalAdjuntarImagen");
  const inputFile = document.getElementById("adjimagen");
  const inputFilelabel = document.querySelector(".modalAdjuntarImagen label");
  const contentArchivo = document.querySelector(".contentArchivo");
  const fileNameDisplay = contentArchivo.querySelector("p");
  const subirBtn = modalAdjuntarImagen.querySelector(".btns button:last-child");
  const cancelarBtn = modalAdjuntarImagen.querySelector(
    ".btns button:first-child"
  );
  const adjuntarTexto = adjuntarImagen.querySelector("p");

  // Solo permitir imágenes jpg, jpeg y png
  inputFile.setAttribute("accept", ".jpg,.jpeg,.png");

  // Abrir modal al hacer clic en .adjuntarImagen
  adjuntarImagen.addEventListener("click", function () {
    modalAdjuntarImagen.classList.add("active");
  });

  // Mostrar nombre del archivo seleccionado
  inputFile.addEventListener("change", function () {
    if (inputFile.files.length > 0) {
      const fileName = inputFile.files[0].name;
      fileNameDisplay.textContent = fileName;
      contentArchivo.classList.add("active");
      inputFile.style.display = "none";
      inputFilelabel.classList.remove("active");
    }
  });

  // Subir archivo
  subirBtn.addEventListener("click", function () {
    contentArchivo.classList.remove("active");
    modalAdjuntarImagen.classList.remove("active");
    inputFilelabel.classList.add("active");
    if (inputFile.files.length > 0) {
      adjuntarTexto.textContent = inputFile.files[0].name;
    }
  });

  // Cancelar selección
  cancelarBtn.addEventListener("click", function () {
    modalAdjuntarImagen.classList.remove("active");
    inputFile.value = ""; // Resetear el input file
    contentArchivo.classList.remove("active");
    fileNameDisplay.textContent = "ejemplo.jpg";
    inputFilelabel.classList.add("active");
  });

  $(function () {
    $.datepicker.regional["es"] = {
      closeText: "Cerrar",
      prevText: "Anterior",
      nextText: "Siguiente",
      currentText: "Hoy",
      monthNames: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      monthNamesShort: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      dayNames: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ],
      dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
      weekHeader: "Sm",
      dateFormat: "dd-mm-yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: "",
    };

    $.datepicker.setDefaults($.datepicker.regional["es"]);

    $("#datepicker").datepicker({
      beforeShow: function () {
        $("body").addClass("modal"); // Agrega la clase cuando se abre
      },
      onClose: function () {
        $("body").removeClass("modal"); // Elimina la clase modal cuando se cierra el Datepicker
      },
    });
  });
});
