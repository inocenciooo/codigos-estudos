let teste1 = true;
let teste2 = true;

let teste3 = true;
let teste4 = true;

let passarDeAno = (matriculado, presenca) => {
  return new Promise((resolve, reject) => {
    if (matriculado && presenca) {
      console.log("Possui matricula e presença.");
      resolve();
    } else {
      console.log("Matricula ou presença pendente.");
      reject();
    }
  });
};

let primeiroBimestre = () => {
  return new Promise((resolve, reject) => {
    if (teste1 && teste2) {
      console.log("Primeiro bimeste concluído.");
      resolve();
    } else {
      console.log("Primeiro bimestre pendendete.");
      reject();
    }
  });
};

let segundoBimestre = () => {
  return new Promise((resolve, reject) => {
    if (teste3 && teste4) {
      console.log("Segundo bimeste concluído.");
      resolve();
    } else {
      console.log("Segundo bimestre pendendete.");
      reject();
    }
  });
};

matriculado = true;
presenca = true;

passarDeAno(matriculado, presenca)
  .then(() => {
    return primeiroBimestre();
  })
  .then(() => {
    return segundoBimestre();
  })
  .then(() => {
    console.log("Parabéns! Você passou de ano!");
  });
