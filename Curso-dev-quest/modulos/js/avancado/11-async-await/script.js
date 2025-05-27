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
toalha = true;
banheiro = true;

async function tomarBanho() {
  const despertado = await acordado(despertar);
  const toalhaPega = await pegarToalha(despertado);
  const estouBanheiro = await irBanheiro(toalhaPega);
  if (estouBanheiro) console.log("Banho iniciado.");
}

tomarBanho();