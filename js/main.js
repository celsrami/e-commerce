"use strict";

console.log("holi");

const ulShop = document.querySelector(".shop__ul");

const tbodyBuy = document.querySelector(".buy__tbody");

// data

const productsArray = [
  {
    name: "Andalucia",
    price: 24,
    imageUrl: "./img/Andalucia.png",
    desc: "Decripción",
    quantity: 0,
    id: 10,
    unidades: 2,
  },
  {
    name: "Berlin",
    price: 15,
    imageUrl: "./img/Berlin.png",
    desc: "Decripción",
    quantity: 0,
    id: 11,
    unidades: 10,
  },
  {
    name: "Florencia",
    price: 28,
    imageUrl: "./img/Florencia.png",
    desc: "Decripción",
    quantity: 0,
    id: 12,
    unidades: 5,
  },
  {
    name: "Maria",
    price: 23,
    imageUrl: "./img/Maria.png",
    desc: "Decripción",
    quantity: 0,
    id: 9,
    unidades: 4,
  },
  {
    name: "Roma",
    price: 25,
    imageUrl: "./img/Roma.png",
    desc: "Decripción",
    quantity: 0,
    id: 13,
    unidades: 2,
  },
  {
    name: "Venecia",
    price: 23,
    imageUrl: "./img/Venecia.png",
    desc: "Decripción",
    quantity: 0,
    id: 14,
    unidades: 9,
  },
  {
    name: "Dinamarca",
    price: 32,
    imageUrl: "./img/Dinamarca.png",
    desc: "Decripción",
    quantity: 0,
    id: 15,
    unidades: 4,
  },
  {
    name: "Oslo",
    price: 32,
    imageUrl: "./img/Oslo.png",
    desc: "Decripción",
    quantity: 0,
    id: 16,
    unidades: 4,
  },
];

// *************************** TIENDA ***********************************************

// CARD DE LOS ELEMENTOS DE LA COMPRA

function listShop(product) {
  let liShop = "";
  liShop += `  <li id=${product.id} class='shop__li'>`;
  liShop += ` <img  src="${product.imageUrl}" class="shop__img" alt="Img"/>`;
  liShop += `  <article class="shop__article">`;
  liShop += `<h3 class="shop__title">${product.name}</h3> `;
  liShop += `   <div class="shop__ray"></div>`;
  liShop += `<h3 class="shop__price">${product.price} €</h3> `;
  //   liShop += `<p class="shop__description">${product.desc}</p> `;
  liShop += `  <button id=${product.id} class="shop__btn">  <i class="fa-solid fa-cart-shopping hero_btn-icon"></i></button>`;
  liShop += `</article>  `;
  liShop += `</li>  `;
  return liShop;
}

// FUNCION QUE PINTA Y RECORRE EL ARRAY DE LOS PRODUCTOS

function paintLiShop() {
  let productsCode = "";
  for (const product of productsArray) {
    productsCode += listShop(product);
  }
  ulShop.innerHTML = productsCode;
}

paintLiShop();

// FUNCION PARA PINTAR EL MENSAJE

function paintTextUnidades(unidades, title) {
  // Selecciona todos los elementos con la clase 'buy__unidades'
  const textUnidades = document.querySelectorAll(".buy__unidades");

  // Itera sobre cada elemento y actualiza su contenido
  textUnidades.forEach((element) => {
    element.innerHTML = "";

    if (unidades === 1) {
      element.innerHTML = `SOLO QUEDA UNA UNIDAD DE: ${title}`;
    } else if (unidades === 0) {
      element.innerHTML = `NO QUEDAN MÁS UNIDADES DE: ${title}`;
    }
  });
}

//**********************************************************************************************
// *************************** CESTA DE LA COMPRA ***********************************************
//**********************************************************************************************

let ArrayBolsa = []; // array de la cesta de la compra

// RECOGE EL BOTON Y LE PONE EL EVENTO A CADA BOTTON
const paintCompra = () => {
  const btnAñadirCesta = document.querySelectorAll(".shop__btn");

  for (const bonton of btnAñadirCesta) {
    bonton.addEventListener("click", incrementarCesta); // Recorre el boton para ponerle el evento hanleClik
  }
};

// FUNCION MANEJADORA DEL EVENTO

const incrementarCesta = (ev) => {
  const idbutton = ev.currentTarget.id; // Guardo el id del boton
  let buscarBolsa; // Busco si el elemento está en la bolsa

  ArrayBolsa.find((item) => {
    if (item.id == idbutton) {
      // si digo que buscar bolsa sea igual que ITEM , SI HAGO UN CAMBIO EN BUSCAR BOLSA SE HACE EN EL OBJETO PRINCIPAL
      buscarBolsa = item;
      console.log(
        ` CUANDO BUSCO EL ELEMENTO TIENE ESTAS UNIDADES ${buscarBolsa.unidades}`
      );
    }
  });

  // Si no está en la bolsa me lo pinta
  if (buscarBolsa === undefined) {
    // Busco el elemeto cliclado
    productsArray.find((element) => {
      if (element.id == idbutton) {
        // Lo añado al array
        element.quantity += 1;
        element.unidades--;
        console.log(`COMPRADO - QUEDAN ESTAS UNIDADES:  ${element.unidades}`);
        ArrayBolsa.push(element);
      }
    });
  } else {
    if (buscarBolsa.unidades > 0) {
      // Solo si hay unidades disponibles
      buscarBolsa.quantity += 1;
      buscarBolsa.unidades--;

      console.log(
        `SUMO CANTIDAD DE COMPRA Y RESTO UNIDAD - QUEDAN ESTAS UNIDADES: ${buscarBolsa.unidades}`
      );

      paintTextUnidades(buscarBolsa.unidades, buscarBolsa.name);
    } else {
      console.log("NO QUEDAN UNIDADES DISPONIBLES PARA AGREGAR A LA CANTIDAD");
      paintTextUnidades(buscarBolsa.unidades, buscarBolsa.name);
    }
  }

  paintLiBuy();
};

paintCompra();

// FILA DE LA CESTA DE COMPRA

function listBuy(item) {
  let trbuy = "";
  trbuy += ` <tr class="buy__fila">`;
  trbuy += ` <td class="buy__colum-one">${item.name}</td>`;
  trbuy += ` <td class="buy__colum-two">${item.price} €</td>`;
  trbuy += `  <td class="buy__colum-three" >`;
  trbuy += ` <a class="buy__btn btn-decrementar" id="${item.id}" >-</a> `;
  trbuy += `<span class="buy__span">${item.quantity}</span>`;
  trbuy += ` <a class="buy__btn btn-incrementar"  id="${item.id}" >+</a> </td> `;
  trbuy += `</td>`;

  trbuy += ` <td  class="buy__colum-total">${
    item.price * item.quantity
  } €</td>`;
  trbuy += `</tr>  `;
  return trbuy;
}

// TOTAL DE TODOS LOS PRODUCTOS

function totalBuy() {
  let totalbuy = "";
  totalbuy += " <tr class='buy__fila-total'>";
  totalbuy += ` <td class="buy__total-text">Total</td>`;
  totalbuy += `<td class="buy__total-price">${pintarTotal()}€</td>`;
  totalbuy += `</tr>  `;
  return totalbuy;
}

const pintarTotal = () => {
  let total = 0;
  for (const item of ArrayBolsa) {
    total += item.price * item.quantity;
  }
  return total;
};

// pintarlo todo

//**********************************************************************************************
// *************************** BOTONES DE LA COMPRA ***********************************************
//**********************************************************************************************

// RECORRO EL BOTON SUMA

// PINTO LA LA BOLSA DE COMPRA

function paintLiBuy() {
  tbodyBuy.innerHTML = "";

  for (const item of ArrayBolsa) {
    tbodyBuy.innerHTML += listBuy(item);
  }

  tbodyBuy.innerHTML += totalBuy();
  funcionAñadirBotones();
  guardarLocalStore();
}

const funcionAñadirBotones = () => {
  const btnSuma = document.querySelectorAll(".btn-incrementar");
  const btnResta = document.querySelectorAll(".btn-decrementar");

  for (const cartBtn of btnSuma) {
    cartBtn.addEventListener("click", incrementarCesta);
  }

  for (const cartBtn of btnResta) {
    cartBtn.addEventListener("click", hanledecrementar);
  }
};

const hanledecrementar = (ev) => {
  const idButtonResta = ev.target.id; // Guardo el id del botón

  const foundIndex = ArrayBolsa.findIndex((item) => item.id == idButtonResta);

  if (foundIndex !== -1) {
    // Si se encontró el elemento en el array

    ArrayBolsa[foundIndex].quantity--;
    ArrayBolsa[foundIndex].unidades++;

    console.log(
      `RESTO UNIDAD - QUEDAN ESTAS UNIDADES : ${ArrayBolsa[foundIndex].unidades}`
    );

    paintTextUnidades(
      ArrayBolsa[foundIndex].unidades,
      ArrayBolsa[foundIndex].name
    );

    if (ArrayBolsa[foundIndex].quantity <= 0) {
      console.log(
        `ELIMINO - QUEDAN ESTAS UNIDDADES : ${ArrayBolsa[foundIndex].unidades}`
      );
      ArrayBolsa.splice(foundIndex, 1); // Elimina 1 elemento desde la posición foundIndex
    }

    paintLiBuy();
  }
};

//**********************************************************************************************
// *************************** LOCAL STOGARE ***********************************************
//**********************************************************************************************

const traerStorage = () => {
  const guardardatosStore = localStorage.getItem("shop");
  if (guardardatosStore !== null) {
    ArrayBolsa = JSON.parse(guardardatosStore);
    console.log(
      ` UNIDADES QUE TENGO AL CARGAR LAS PAGINA DEL LOCAL PRIMER ELEMENTO: ${ArrayBolsa[0].unidades}`
    );
    paintLiBuy();
  }
};

const guardarLocalStore = () => {
  const stringifyCart = JSON.stringify(ArrayBolsa);
  localStorage.setItem("shop", stringifyCart);
};

traerStorage();
paintLiBuy();
