// animations.js - Script para aplicar animaciones al hacer scroll

document.addEventListener("DOMContentLoaded", function () {
  // Añadir la clase fadeIn a elementos específicos
  const elements = document.querySelectorAll(
    "section, .profesional, form, fieldset"
  );
  elements.forEach((el) => {
    el.classList.add("fadeIn");
  });

  // Función para verificar si un elemento está en el viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
      rect.bottom >= 0
    );
  }

  // Función para manejar el scroll
  function handleScroll() {
    const elements = document.querySelectorAll(".fadeIn");
    elements.forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add("visible");
      }
    });
  }

  // Escuchar el evento de scroll
  window.addEventListener("scroll", handleScroll);

  // Ejecutar handleScroll inicialmente
  handleScroll();
});
