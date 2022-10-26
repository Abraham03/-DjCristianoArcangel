/*!
 * Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function whatsap() {
  const nombre = document.getElementById("name").value;
  const fecha = document.getElementById("fecha").value;
  const evento = document.getElementById("evento").value;
  const mensaje = document.getElementById("message").value;

  const newFecha = fecha.split("T")[0];

  const time = fecha.split("T")[1].split(".")[0];

  const fechaCompleta = newFecha + " " + time;

  const url =
    "https://wa.me/18643465168?text=" +
    "*Nombre :* " +
    nombre +
    "%0a" +
    "*Fecha  :* " +
    fechaCompleta +
    "%0a" +
    "*Evento :* " +
    evento +
    "%0a" +
    "*Mensaje:* " +
    mensaje +
    "%0a";

  window.open(url, "_blank").focus();
  limpiar();
}

function limpiar() {
  document.getElementById("name").value="";
  document.getElementById("fecha").value="";
  document.getElementById("evento").value="";
  document.getElementById("message").value="";
}
