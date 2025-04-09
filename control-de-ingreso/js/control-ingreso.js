document.addEventListener("DOMContentLoaded", function () {
  /*fechas */
  const meses = document.querySelectorAll(".mes");
  const prevBtn1 = document.querySelector(".prev1");
  const nextBtn1 = document.querySelector(".next1");

  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth();

  let currentIndex = mesActual;
  function actualizarMes() {
    meses.forEach((mes, index) => {
      mes.classList.toggle("active", index === currentIndex);
    });
  }

  prevBtn1.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + meses.length) % meses.length;
    actualizarMes();
  });

  nextBtn1.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % meses.length;
    actualizarMes();
  });

  actualizarMes();
  /*end fechas */

  const items = document.querySelectorAll(".contentTabla .tr");
  const itemsPerPage = 5;
  let currentPage = 1;
  let filteredItems = [...items];

  const desde = document.querySelector(".desde");
  const hasta = document.querySelector(".hasta");
  const total = document.querySelector(".total");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function updatePagination() {
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    currentPage = Math.min(currentPage, totalPages) || 1;
    total.textContent = totalItems;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    filteredItems.forEach((item, index) => {
      item.style.display = index >= start && index < end ? "flex" : "none";
    });

    desde.textContent = totalItems > 0 ? start + 1 : 0;
    hasta.textContent = totalItems > 0 ? Math.min(end, totalItems) : 0;

    prevBtn.classList.toggle("disabled", currentPage === 1);
    nextBtn.classList.toggle("disabled", currentPage === totalPages);
  }

  prevBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      currentPage++;
      updatePagination();
    }
  });

  updatePagination();

  const filtroBtn = document.querySelector("#filtro");
  const modalMain = document.querySelector(".modalfiltromain.main");
  const modalCategoria = document.querySelector(".modalfiltromain.categoria");
  const modalFecha = document.querySelector(".modalfiltromain.fecha");
  const modalCategoriatabs = document.querySelectorAll(
    ".modalfiltromain.categoria .tab"
  );
  const mainTabs = document.querySelectorAll(".modalfiltromain.main .tab");
  const categoriaTabs = document.querySelectorAll(
    ".modalfiltromain.categoria .tab"
  );
  const aplicarBtns = document.querySelectorAll(".aplicar");
  const cancelarBtns = document.querySelectorAll(".cancelar");

  filtroBtn.addEventListener("click", function () {
    modalMain.classList.add("active");
  });

  mainTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      mainTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  categoriaTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      categoriaTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  aplicarBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const activeMainTab = document.querySelector(
        ".modalfiltromain.main .tab.active"
      );

      if (activeMainTab && activeMainTab.id === "categoria") {
        modalMain.classList.remove("active");
        modalCategoria.classList.add("active");
      }
      const activeCategoryTab = document.querySelector(
        ".modalfiltromain.categoria .tab.active"
      );

      if (activeCategoryTab) {
        const selectedCategory = activeCategoryTab.id;

        filteredItems = [...items].filter(
          (item) => item.getAttribute("categoria") === selectedCategory
        );

        items.forEach((item) => {
          item.style.display = "none";
        });

        filteredItems.forEach((item) => {
          item.style.display = "flex";
        });

        currentPage = 1;
        updatePagination();
      }

      if (activeMainTab && activeMainTab.id === "fecha") {
        modalMain.classList.remove("active");
        modalFecha.classList.add("active");
      }
    });
  });

  cancelarBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.closest(".modalfiltromain").classList.remove("active");
      mainTabs.forEach((tab) => tab.classList.remove("active"));
      modalCategoriatabs.forEach((tab) => tab.classList.remove("active"));

      // Restaurar todos los elementos
      filteredItems = [...items];
      items.forEach((item) => (item.style.display = "flex"));

      currentPage = 1;
      updatePagination();
    });
  });

  aplicarBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.closest(".modalfiltromain").classList.remove("active");
      mainTabs.forEach((tab) => tab.classList.remove("active"));
      categoriaTabs.forEach((tab) => tab.classList.remove("active"));
    });
  });

  // Aplicar filtro por mes
  document
    .querySelector(".modalfiltromain.fecha .aplicar")
    .addEventListener("click", function () {
      modalFecha.classList.remove("active");

      const mesActivo = document.querySelector(".mes.active").textContent; // Obtener el mes activo
      const mesesArray = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Setiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];

      const mesIndex = mesesArray.findIndex((m) => mesActivo.includes(m)) + 1; // Obtener índice del mes (1-12)
      const mesStr = mesIndex.toString().padStart(2, "0"); // Formatear a dos dígitos

      filteredItems = [...items].filter((item) => {
        const fechaAttr = item.getAttribute("fecha");
        if (!fechaAttr) return false;
        const mesItem = fechaAttr.split("/")[1]; // Extraer el mes de DD/MM/YYYY
        return mesItem === mesStr;
      });

      items.forEach((item) => (item.style.display = "none"));
      filteredItems.forEach((item) => (item.style.display = "flex"));

      currentPage = 1;
      updatePagination();
    });
});
