const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const estadoTexto = document.getElementById("estadoLampada");

function ligarLampada() {
  lampada.src = "img/acesa.jpg";
  lampada.alt = "Lâmpada Ligada";
  estadoTexto.innerText = "A lâmpada foi acesa";
}

function desligarLampada() {
  lampada.src = "img/apagada.jpg";
  lampada.alt = "Lâmpada Desligada";
  estadoTexto.innerText = "A lâmpada foi apagada";
}

btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);
