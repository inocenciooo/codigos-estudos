let acordado = (despertar) => {
  return new Promise((resolve, reject) => {
    if (typeof despertar != "boolean") throw "Informação inválida.";

    if (despertar === true) {
      console.log("Estou despertado.");
      resolve(true);
    } else {
      const mensagemErro = "Você não acordou a tempo.";
      reject(mensagemErro);
    }
  });
};

let pegarToalha = (toalha) => {
  return new Promise((resolve, reject) => {
    if (typeof toalha != "boolean") throw "Informação inválida.";

    if (toalha === true) {
      console.log("Peguei a toalha.");
      resolve(true);
    } else {
      const mensagemErro = "Você não pegou a toalha.";
      reject(mensagemErro);
    }
  });
};

let irBanheiro = (banheiro) => {
  return new Promise((resolve, reject) => {
    if ( typeof banheiro != "boolean") throw "Informação inválida.";
    if (banheiro === true) {
      console.log("Fui ao banheiro.");
      resolve(true);
    } else {
      const mensagemErro = "Você não foi ao banheiro.";
      reject(mensagemErro);
    }
  });
};

despertar = "sim";
toalha = true;
banheiro = true;

async function tomarBanho() {
  try {
    await acordado(despertar);
    await pegarToalha(toalha);
    const estouBanheiro = await irBanheiro(banheiro);
    if (estouBanheiro) console.log("Banho tomado.");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("o período da manhã acabou, você fez o que deu pra fazer.");
  }
}

tomarBanho();
