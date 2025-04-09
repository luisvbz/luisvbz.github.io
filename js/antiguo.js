document.addEventListener("DOMContentLoaded", function () {
  // menu lateral
  const items = document.querySelectorAll(".navegacion .item");

  items.forEach((item) => {
    const cabecera = item.querySelector(".cabecera");
    const submenu = item.querySelector("ul");

    if (!cabecera) return;

    cabecera.addEventListener("click", function (e) {
      e.preventDefault();

      const isActive = cabecera.classList.contains("active");

      items.forEach((el) => {
        const elCabecera = el.querySelector(".cabecera");
        const elSubmenu = el.querySelector("ul");

        if (elCabecera) elCabecera.classList.remove("active");
        if (elSubmenu) elSubmenu.classList.remove("active");
      });

      if (!isActive) {
        cabecera.classList.add("active");
        if (submenu) submenu.classList.add("active");
      }
    });
  });

  // tabs informacion personal
  const items2 = document.querySelectorAll(".itemInfo");

  items2.forEach((item) => {
    const flecha = item.querySelector(".flecha");

    if (!flecha) return; // Si no hay .flecha, salir

    flecha.addEventListener("click", function (e) {
      e.preventDefault(); // Evita cualquier comportamiento predeterminado

      // Si el item ya tiene la clase "active", se la quitamos y terminamos aquí
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        return;
      }

      // Remueve la clase "active" de todos los .itemInfo
      items2.forEach((el) => el.classList.remove("active"));

      // Agrega la clase "active" solo al elemento clicado
      item.classList.add("active");
    });
  });

  const btnmenu = document.querySelector(".menuBtn");
  const menuMobil = document.querySelector("header");
  const menuMobilClose = document.querySelector("header .close");

  btnmenu.addEventListener("click", function (e) {
    menuMobil.classList.add("active");
    document.querySelector("body").classList.add("scrollHidden");
  });
  menuMobilClose.addEventListener("click", function (e) {
    menuMobil.classList.remove("active");
    document.querySelector("body").classList.remove("scrollHidden");
  });

  /* tabla Desktop */
  const tabsindice = document.querySelector(".desktop.filtro .tab");
  if (tabsindice) {
    const tabs = document.querySelectorAll(".desktop.filtro .tab");
    const rows = document.querySelectorAll(
      ".desktop.filtro .filtro tr:not(.head2)"
    );
    const prevBtn = document.querySelector(".desktop.filtro .prev");
    const nextBtn = document.querySelector(".desktop.filtro .next");
    const desdeSpan = document.querySelector(".desktop.filtro .desde");
    const hastaSpan = document.querySelector(".desktop.filtro .hasta");
    const totalSpan = document.querySelector(".desktop.filtro .total");

    let currentCategory = "Todos";
    let currentPage = 0;
    const itemsPerPage = 7; /* aca modificas la cantidad a mostrar en tabla */

    function updateTable() {
      let visibleRows = [];

      rows.forEach((row) => {
        const category = row.getAttribute("data");
        if (currentCategory === "Todos" || category === currentCategory) {
          visibleRows.push(row);
          row.style.display = "none";
        } else {
          row.style.display = "none";
        }
      });

      totalSpan.textContent = visibleRows.length;
      paginate(visibleRows);
    }

    function paginate(visibleRows) {
      const totalItems = visibleRows.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      currentPage = Math.min(currentPage, totalPages - 1);
      currentPage = Math.max(currentPage, 0);

      const start = currentPage * itemsPerPage;
      const end = start + itemsPerPage;

      visibleRows.forEach((row, index) => {
        row.style.display =
          index >= start && index < end ? "table-row" : "none";
      });

      desdeSpan.textContent = totalItems > 0 ? start + 1 : 0;
      hastaSpan.textContent = totalItems > 0 ? Math.min(end, totalItems) : 0;

      prevBtn.classList.toggle("disabled", currentPage === 0);
      nextBtn.classList.toggle("disabled", end >= totalItems);
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        tabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
        currentCategory = this.getAttribute("data");
        currentPage = 0;
        updateTable();
      });
    });

    prevBtn.addEventListener("click", function () {
      if (!this.classList.contains("disabled")) {
        currentPage--;
        updateTable();
      }
    });

    nextBtn.addEventListener("click", function () {
      if (!this.classList.contains("disabled")) {
        currentPage++;
        updateTable();
      }
    });

    updateTable();
  }

  /* tabla mobile */

  const tabsindice2 = document.querySelector(".mobile.filtro .tab");
  if (tabsindice2) {
    const tabs2 = document.querySelectorAll(".mobile.filtro .tab");
    const rows2 = document.querySelectorAll(
      ".mobile.filtro .filtro tr:not(.head2)"
    );
    const prevBtn2 = document.querySelector(".mobile.filtro .prev");
    const nextBtn2 = document.querySelector(".mobile.filtro .next");
    const desdeSpan2 = document.querySelector(".mobile.filtro .desde");
    const hastaSpan2 = document.querySelector(".mobile.filtro .hasta");
    const totalSpan2 = document.querySelector(".mobile.filtro .total");

    let currentCategory2 = "Todos";
    let currentPage2 = 0;
    const itemsPerPage2 = 7; /* aca modificas la cantidad a mostrar en tabla */

    function updateTable2() {
      let visibleRows2 = [];

      rows2.forEach((row2) => {
        const category2 = row2.getAttribute("data");
        if (currentCategory2 === "Todos" || category2 === currentCategory2) {
          visibleRows2.push(row2);
          row2.style.display = "none";
        } else {
          row2.style.display = "none";
        }
      });

      totalSpan2.textContent = visibleRows2.length;
      paginate2(visibleRows2);
    }

    function paginate2(visibleRows2) {
      const totalItems2 = visibleRows2.length;
      const totalPages2 = Math.ceil(totalItems2 / itemsPerPage2);

      currentPage2 = Math.min(currentPage2, totalPages2 - 1);
      currentPage2 = Math.max(currentPage2, 0);

      const start2 = currentPage2 * itemsPerPage2;
      const end2 = start2 + itemsPerPage2;

      visibleRows2.forEach((row2, index) => {
        row2.style.display =
          index >= start2 && index < end2 ? "table-row" : "none";
      });

      desdeSpan2.textContent = totalItems2 > 0 ? start2 + 1 : 0;
      hastaSpan2.textContent =
        totalItems2 > 0 ? Math.min(end2, totalItems2) : 0;

      prevBtn2.classList.toggle("disabled", currentPage2 === 0);
      nextBtn2.classList.toggle("disabled", end2 >= totalItems2);
    }

    tabs2.forEach((tab) => {
      tab.addEventListener("click", function () {
        tabs2.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
        currentCategory2 = this.getAttribute("data");
        currentPage2 = 0;
        updateTable2();
      });
    });

    prevBtn2.addEventListener("click", function () {
      if (!this.classList.contains("disabled")) {
        currentPage2--;
        updateTable2();
      }
    });

    nextBtn2.addEventListener("click", function () {
      if (!this.classList.contains("disabled")) {
        currentPage2++;
        updateTable2();
      }
    });

    updateTable2();
  }
});
