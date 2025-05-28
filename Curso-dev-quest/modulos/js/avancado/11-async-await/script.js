let acordado = (despertar) => {
  return new Promise((resolve, reject) => {
    if ((despertar === true)) {
      console.log("Estou despertado.");
      resolve(true);
    } else {
      console.log("Ainda não acordei.");
      reject();
    }
  });
};

let pegarToalha = (toalha) => {
  return new Promise((resolve, reject) => {
    if ((toalha === true)) {
      console.log("Peguei a toalha.");
      resolve(true);
    } else {
      console.log("Ainda não peguei a toalha.");
      reject();
    }
  });
};

let irBanheiro = (banheiro) => {
  return new Promise((resolve, reject) => {
    if ((banheiro === true)) {
      console.log("Fui ao banheiro.");
      resolve(true);
    } else {
      console.log("Ainda não não fui ao banheiro.");
      reject();
    }
  });
};

despertar = true;
toalha = false;
banheiro = true;

async function tomarBanho() {
  await acordado(despertar);
  await pegarToalha(toalha);
  const estouBanheiro = await irBanheiro(banheiro);
  if (estouBanheiro) console.log("Banho iniciado.");
}

tomarBanho();