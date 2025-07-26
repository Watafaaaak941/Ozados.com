let lluviaActiva = false;
let gatosCayendo = [];
let intervaloLluvia;

function lluviaGatos() {
  if (!lluviaActiva) {
    lluviaActiva = true;
    intervaloLluvia = setInterval(() => {
      const cat = document.createElement("img");
      cat.src = "Balloon.gif";
      cat.style.position = "absolute";
      cat.style.top = "-100px";
      cat.style.left = Math.random() * window.innerWidth + "px";
      cat.style.width = "50px";
      cat.style.zIndex = "999";
      document.body.appendChild(cat);
      gatosCayendo.push(cat);

      let caer = setInterval(() => {
        let top = parseInt(cat.style.top);
        if (top < window.innerHeight) {
          cat.style.top = top + 5 + "px";
        } else {
          clearInterval(caer);
          cat.remove();
        }
      }, 50);
    }, 300); // nuevos gatos cada 300 ms
  } else {
    // Detener la lluvia
    lluviaActiva = false;
    clearInterval(intervaloLluvia);
    gatosCayendo.forEach(gato => gato.remove());
    gatosCayendo = [];
  }
}

function hacerRollo() {
  document.body.style.transition = "transform 1s";
  document.body.style.transform = "rotate(360deg)";
  setTimeout(() => {
    document.body.style.transform = "rotate(0deg)";
  }, 1000);
}
let audioDivertido = new Audio('Beanie.mp3');
let estaSonando = false;

function reproducirSonido() {
  if (!estaSonando) {
    audioDivertido.play();
    estaSonando = true;
  } else {
    audioDivertido.pause();
    audioDivertido.currentTime = 0; // vuelve al inicio
    estaSonando = false;
  }
}
function enviarComentario() {
  const texto = document.getElementById("comentarioTexto").value.trim();

  if (texto !== "") {
    const lista = document.getElementById("listaComentarios");

    const nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");
    nuevoComentario.innerText = texto;

    lista.prepend(nuevoComentario); // Agrega el nuevo comentario arriba
    document.getElementById("comentarioTexto").value = ""; // Limpia el textarea
  } else {
    alert("¡Escribe algo antes de enviar!");
  }
}
