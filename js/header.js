"use strict"

console.log("holi:)");

const listElement = document.querySelectorAll(".js-submenu");

listElement.forEach(element => {
    element.addEventListener("click", ()=> {

        element.classList.toggle("collapsed");
        let height = 0;
        let menu = element.nextElementSibling;
        if(menu.clientHeight == "0") {
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`

    })

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
    modal.style.display = "none";}
});


