const imagem = document.getElementById("imagemPrincipal");

function mostrarImagem(numero) {
  if (numero === 1) {
    imagem.src = "img/img1.jpg";
  } else if (numero === 2) {
    imagem.src = "img/img2.jpg";
  } else if (numero === 3) {
    imagem.src = "img/img3.jpg";
  }
}