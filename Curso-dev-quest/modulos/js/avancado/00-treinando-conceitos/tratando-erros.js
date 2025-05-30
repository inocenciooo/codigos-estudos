function promessaFalha() {
  return new Promise((resolve, reject) => {
    reject("Algo deu errado");
  });
}

async function testar() {
  try {
    await promessaFalha(); // Vai disparar o catch
    console.log("Isso não será executado");
  } catch (erro) {
    console.log("Erro tratado:", erro); // Aqui o erro é capturado
  }
}

testar();
