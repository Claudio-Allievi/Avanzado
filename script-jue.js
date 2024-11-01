/************ 
NAV
*************/

const navFondoHist = () => {
  if (window.innerHeight * 0.35 < window.scrollY) {
    document.querySelector("nav").classList.add("fondo-barra");
  } else {
    document.querySelector("nav").classList.remove("fondo-barra");
  }
};

/************ 
JUEGO
*************/

const imgRompe1 = document.getElementById("arr2");
imgRompe1.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", e.target.id);
});

const imgRompe2 = document.getElementById("arr1");
imgRompe2.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", e.target.id);
});

const imgRompe3 = document.getElementById("arr3");
imgRompe3.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", e.target.id);
});

function restringir(e) {
  e.preventDefault();
}

const zonaDejada1 = document.getElementById("dejada1");
zonaDejada1.addEventListener("dragover", restringir);
zonaDejada1.addEventListener("drop", (e) => {
  e.preventDefault();
  const imgId = e.dataTransfer.getData("text");
  if (imgId === "arr2") {
    e.target.appendChild(document.getElementById(imgId));
    document.querySelector("#indicativo").style.display = `none`;
  } else {
    alert("Intente en otra ubicación.");
  }
});

const zonaDejada2 = document.getElementById("dejada2");
zonaDejada2.addEventListener("dragover", restringir);
zonaDejada2.addEventListener("drop", (e) => {
  e.preventDefault();
  const imgId = e.dataTransfer.getData("text");
  if (imgId === "arr1") {
    e.target.appendChild(document.getElementById(imgId));
    document.querySelector("#indicativo1").style.display = `none`;
  } else {
    alert("Intente en otra ubicación.");
  }
});

const zonaDejada3 = document.getElementById("dejada3");
zonaDejada3.addEventListener("dragover", restringir);
zonaDejada3.addEventListener("drop", (e) => {
  e.preventDefault();
  const imgId = e.dataTransfer.getData("text");
  if (imgId === "arr3") {
    e.target.appendChild(document.getElementById(imgId));
    document.querySelector("#indicativo2").style.display = `none`;
  } else {
    alert("Intente en otra ubicación.");
  }
});

function reinicio() {
  window.location.reload();
}
