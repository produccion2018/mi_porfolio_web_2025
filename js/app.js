document.addEventListener("DOMContentLoaded", function() {
  // Eliminar parámetros adicionales de la URL
  if (window.location.href.includes("?")) {
    const baseUrl = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, baseUrl);
  }

  // Función para alternar el menú y el modo oscuro
  function toggleMenu() {
    const menu = document.querySelector(".navbar ul");
    const toggle = document.querySelector(".menu-toggle");
    const body = document.body; 

    if (menu && toggle) {
      menu.classList.toggle("show");
      toggle.classList.toggle("active");
    }

    body.classList.toggle("dark-mode");
  }

  // Agregar evento al botón de menú
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // Cerrar el menú cuando se hace clic en un enlace
  document.querySelectorAll(".nav-link").forEach(item => {
    item.addEventListener("click", () => {
      const menu = document.querySelector(".navbar ul");
      const toggle = document.querySelector(".menu-toggle");

      if (menu && toggle) {
        menu.classList.remove("show");
        toggle.classList.remove("active");
      }
    });
  });

  // Manejar el envío del formulario de contacto
  const contactoForm = document.getElementById("contacto-form");
  if (contactoForm) {
    contactoForm.addEventListener("submit", function(event) {
      event.preventDefault();

      let nombre = document.getElementById("nombre").value.trim();
      let email = document.getElementById("email").value.trim();
      let mensaje = document.getElementById("mensaje").value.trim();

      // Validación de campos vacíos
      if (!nombre || !email || !mensaje) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Todos los campos son obligatorios",
        });
        return;
      }

      // Validación de correo electrónico
      if (!validarEmail(email)) {
        Swal.fire({
          icon: "error",
          title: "Correo inválido",
          text: "Por favor ingresa un email válido",
        });
        return;
      }

      // Mensaje de éxito
      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Me pondré en contacto contigo pronto.",
      });

      // Limpiar el formulario
      contactoForm.reset();
    });
  }

  // Función para validar email
  function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});

// funcion para arrays de proecutos ver mas

document.addEventListener("DOMContentLoaded", function () {
  const proyectosAdicionales = {
    "html-css": [
      { url: "https://produccion2018.github.io/Postres-mireya/", git: "https://github.com/produccion2018/Postres-mireya.git", title: "Proyecto HTML 2" },
      { url: "https://produccion2018.github.io/MB-Formulario/", git: "https://github.com/produccion2018/MB-Formulario.git", title: "Proyecto HTML 3" },
    ],
    "javascript": [
      { url: "https://produccion2018.github.io/reservar-mesa/", git: "https://github.com/produccion2018/reservar-mesa.git", title: "Proyecto JS 2" },
      { url: " https://produccion2018.github.io/turnos-m-dicos/", git: "https://github.com/produccion2018/turnos-m-dicos.git", title: "Proyecto JS 3" },
    ],
    "react": [
      { url: "https://ejemplo5.com", git: "https://github.com/produccion2018/Simulador-de-APIs-de-pel-culas.git", title: "Proyecto React 2" },
      { url: "https://ejemplo6.com", git: "https://github.com/usuario/proyecto-react3", title: "Proyecto React 3" },
    ],
    "apis": [
      { url: "https://produccion2018.github.io/Simulador-de-APIs-de-pel-culas/", git: "https://github.com/produccion2018/Simulador-de-APIs-de-pel-culas.git", title: "Proyecto API 2" },
      { url: "https://produccion2018.github.io/Conversor-de-moneda/", git: "https://github.com/produccion2018/Conversor-de-moneda.git", title: "Proyecto API 3" },
    ],
  };

  document.querySelectorAll(".btn-show-more").forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      const container = this.previousElementSibling;

      if (container.classList.contains("hidden")) {
        // Mostrar proyectos adicionales dentro de la tarjeta
        container.innerHTML = proyectosAdicionales[category]
          .map(
            (p) => `
              <div class="extra-project">
                <h6>${p.title}</h6>
                <a href="${p.url}" class="btn btn-primary" target="_blank">Ver Proyecto</a>
                <a href="${p.git}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Ver Código Git</a>
              </div>
            `
          )
          .join("");

        container.classList.remove("hidden");
        this.textContent = "Ver menos";
      } else {
        // Ocultar proyectos adicionales
        container.innerHTML = "";
        container.classList.add("hidden");
        this.textContent = "Ver más";
      }
    });
  });
});


// animacionfinal
window.onload = function() {
  setTimeout(function() {
    document.querySelector('.loader-container').style.display = 'flex';
  }, 2000); 
};



    