let saibaMais = document.getElementById("saiba-mais");
let fundoImagem = document.querySelector("body");

let botaoVoltar = document.querySelectorAll("img")[0];
let botaoAvancar = document.querySelectorAll("img")[1];

let temas = ["tema-rosa", "tema-amarelo", "tema-laranja", "tema-azul"];

let imagemDeFundo = [
  "fundo-rosa",
  "fundo-amarelo",
  "fundo-laranja",
  "fundo-azul",
];

i = 1;

saibaMais.classList.add(temas[0]);
fundoImagem.classList.add(imagemDeFundo[0]);

botaoAvancar.addEventListener("click", function () {
  if (i < temas.length) {
    saibaMais.classList.replace(temas[i - 1], temas[i]);
    fundoImagem.classList.replace(imagemDeFundo[i - 1], imagemDeFundo[i]);
    console.log(i);
    i++;
  } else {
  }
});

botaoVoltar.addEventListener("click", function () {
  if (i > 0) {
    saibaMais.classList.replace(temas[i], temas[i - 1]);
  }
});

/* 
botaoAvancar.addEventListener("click", function () {
  if (temas[i] !== undefined) {
    saibaMais.classList.replace(temas[i - 1], temas[i]);
    fundoImagem.classList.replace(imagemDeFundo[i - 1], imagemDeFundo[i]);
    i++;
    console.log(imagemDeFundo[i]);
  } else {
    saibaMais.classList.remove(temas[i - 1]);
    saibaMais.classList.add(temas[0]);

    fundoImagem.classList.remove(imagemDeFundo[i - 1]);
    fundoImagem.classList.add(imagemDeFundo[0]);
    i = 1;
  }
});

botaoVoltar.addEventListener("click", function () {
  if (temas[i] > 0) {
    saibaMais.classList.replace(temas + 1, temas[i]);
    fundoImagem.classList.replace(imagemDeFundo[i + 1], imagemDeFundo[i]);
    i--;
  }
});

*/
