let btnMudaCor = document.getElementById("btn-mudar-cor");

let quadrado = document.querySelector("div");

btnMudaCor.addEventListener("click", verificacao);

function verificacao() {
  if (quadrado.classList.contains("azul")) {
    quadrado.classList.remove("azul");
    quadrado.classList.add("preto");
  } else {
    quadrado.classList.remove("preto");
    quadrado.classList.add("azul");
  }
}
