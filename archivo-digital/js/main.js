document.addEventListener("DOMContentLoaded", function () {
  /* activacion del recordar contraseña */
  const checkboxContainer = document.querySelector(".checkbox");
  const checkbox = document.getElementById("recordar_contraseña");

  checkbox.addEventListener("change", function () {
    checkboxContainer.classList.toggle("active", checkbox.checked);
  });

  /* envio del formulario */
  const mensajeError = document.querySelector("#mensajeError");
  const inputs = document.querySelectorAll("form.formLogin label input");

  document
    .querySelector("form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const correo = document.getElementById("correo").value;
      const contraseña = document.getElementById("contraseña").value;

      const data = {
        email: correo,
        password: contraseña,
      };

      try {
        const response = await fetch(
          "https://sistemarinconada.nerdstudiolab.com/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error en la respuesta:", errorData);
          mensajeError.classList.add("active");
          inputs.forEach((element) => {
            element.classList.add("error");
          });
          return;
        }

        const result = await response.json();
        sessionStorage.setItem("access_token", result.data.access_token);
        console.log(
          "Token guardado en sessionStorage:",
          result.data.access_token
        );
        window.location.href =
          "https://sistemarinconada.nerdstudiolab.com/perfil";
      } catch (error) {
        mensajeError.classList.add("active");
        inputs.forEach((element) => {
          element.classList.add("error");
        });
      }
    });
});
