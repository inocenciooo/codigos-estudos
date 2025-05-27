let primeiroTeste = true;
let segundoTeste = true;

let verificacao = new Promise((resolve, reject) => {
  if (primeiroTeste && segundoTeste) {
    console.log("Passou na verificação.");
    resolve();
  } else {
    console.log("Não passou na verificação.");
    reject();
  }
});
