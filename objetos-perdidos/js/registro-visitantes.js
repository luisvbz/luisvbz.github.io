document.addEventListener("DOMContentLoaded", function () {
  const dniInput = document.getElementById("dni");
  const form = document.getElementById("registroForm");
  const errorDni = document.querySelector(".mensajeErrorRegistro");
  const errorRadio = document.querySelector(".mensajeErrorRegistro2");
  const radios = document.querySelectorAll("input[name='opcion']");
  const radioContainers = document.querySelectorAll(".contentRadios .radio");
  const modalconfirmado = document.querySelector(".modalPopup.confirmado");
  const modalnoconfirmado = document.querySelector(".modalPopup.noconfirmado");
  const valorderegistro = 1;

  // Restringir a 8 dígitos en tiempo real
  dniInput.addEventListener("input", function () {
    if (this.value.length > 8) {
      this.value = this.value.slice(0, 8);
    }
  });

  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      document
        .querySelectorAll(".radio")
        .forEach((radio) => radio.classList.remove("active"));
      if (this.checked) {
        this.closest(".radio").classList.add("active");
      }
    });
  });

  // Validar en el submit
  form.addEventListener("submit", function (e) {
    let valido = true;

    // Validar DNI
    if (dniInput.value.length < 8) {
      errorDni.classList.add("active");
      dniInput.classList.add("error");
      valido = false;
    } else {
      errorDni.classList.remove("active");
      dniInput.classList.remove("error");
    }

    // Validar selección de radio buttons
    const radioSeleccionado = Array.from(radios).some((radio) => radio.checked);
    if (!radioSeleccionado) {
      errorRadio.classList.add("active");
      radioContainers.forEach((radio) => radio.classList.add("error"));
      valido = false;
    } else {
      errorRadio.classList.remove("active");
      radioContainers.forEach((radio) => radio.classList.remove("error"));
    }

    if (!valido) {
      e.preventDefault(); // Evita el envío si alguna validación falla
      return;
    }
    e.preventDefault();
    if (valorderegistro == 1) {
      modalconfirmado.classList.add("active");
    } else {
      modalnoconfirmado.classList.add("active");
    }
  });

  const closeButtons = document.querySelectorAll(
    ".modalPopup .content .closeModal, .modalPopup .content button"
  );

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Seleccionar todos los .modalPopup y quitarles la clase active
      document.querySelectorAll(".modalPopup").forEach((modal) => {
        modal.classList.remove("active");
      });
    });
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
