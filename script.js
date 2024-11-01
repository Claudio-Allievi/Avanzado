/********** 
VIDEO
**********/
let video = document.querySelector("video");
let playBoton = document.getElementById("play");
let pauseBoton = document.getElementById("pause");

const transFond = () => {
  if (window.innerHeight * 0.5 < window.scrollY) {
    document.querySelector("nav").classList.add("fondo-barra");
  } else {
    document.querySelector("nav").classList.remove("fondo-barra");
  }
};

const navFondoHist = () => {
  if (window.innerHeight * 0.35 < window.scrollY) {
    document.querySelector("nav").classList.add("fondo-barra");
  } else {
    document.querySelector("nav").classList.remove("fondo-barra");
  }
};

let formatoReloj = (tiempo) => {
  if (tiempo < 60) {
    if (tiempo.toFixed(0) < 10) {
      return `00:0${tiempo.toFixed(0)}`;
    }
    return `00:${tiempo.toFixed(0)}`;
  } else {
    console.log(tiempo / 60);
    let minutos = parseInt(tiempo / 60);
    let segundos = (tiempo / 60 - minutos) * 60;
    if (segundos < 10) {
      return `${minutos}:0${segundos.toFixed(0)}`;
    }
    return `${minutos}:${segundos.toFixed(0)}`;
  }
};

setTimeout(() => {
  document.getElementById("reloj-video").innerHTML = ` Duración video  04:41`;
}, 100);

playBoton.addEventListener("click", () => {
  video.play();
  reloj = setInterval(() => {
    document.getElementById("reloj-video").innerHTML = `${formatoReloj(
      video.currentTime
    )}`;
  }, 1000);
});

pauseBoton.addEventListener("click", () => {
  video.pause();
  flag = false;
  clearInterval(reloj);
});
