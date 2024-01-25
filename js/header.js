"use strict";

console.log("holi:)");

//  ABRIR EL BOTON DEL HEADER

const btnHeaderOpen = document.querySelector(".header__btn");
const navHeader = document.querySelector(".header__nav");
const ulHeader = document.querySelector(".header__ul");
const linkHeader = document.querySelectorAll(".header__link");

btnHeaderOpen.addEventListener("click", () => {
  console.log("hice click");

  if (navHeader.classList.contains("open")) {
    closeNav();
  } else {
    // Si no tiene la clase 'open', la agregamos
    ulHeader.classList.remove("exit-nav");
    btnHeaderOpen.classList.add("menu-open");
    navHeader.classList.add("open");
  }
});

// CERRAMOS NAV CUANDO HACEMNOS CLICK EN UN LINK

linkHeader.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

// FUNCION PARA CAMBIAR LAS CLASES Y  CERRAR EL NAV

const closeNav = () => {
  ulHeader.classList.add("exit-nav");
  btnHeaderOpen.classList.remove("menu-open");
  setTimeout(() => {
    navHeader.classList.remove("open");
  }, 300);
};
//  SUBMENU

const listElement = document.querySelectorAll(".js-submenu");

listElement.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("collapsed");
    let height = 0;
    let menu = element.nextElementSibling;
    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
  });
});

// ABRIR CARRITO DE COMPRA

const buttonOpen = document.getElementById("open");
const buttonclose = document.getElementById("close");
const modal = document.getElementById("modal");

buttonOpen.addEventListener("click", () => {
  modal.style.display = "block";
});

buttonclose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (ev) => {
  if (ev.target == modal) {
    modal.style.display = "none";
  }
});
