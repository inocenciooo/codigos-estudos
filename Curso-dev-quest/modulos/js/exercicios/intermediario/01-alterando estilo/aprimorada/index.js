let quadradoAzul = document.getElementsByClassName("azul")[0];
let btnMudaCor = document.getElementById("btn-mudar-cor");

btnMudaCor.addEventListener("click", trocaCor);

function trocaCor() {
  quadradoAzul.classList.remove("azul");
  quadradoAzul.classList.add("amarelo");
}
