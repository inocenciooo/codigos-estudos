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

// testar();

console.log("TREINANDO MAIS ERROS");

function dividir(a, b) {
  if (b != 0) {
    return a / b;
  } else {
    throw new Error("Não é possível dividir um número por 0.");
  }
}
function calcular() {
  try {
    const resultado = dividir(133450, 400);
    console.log(`O resultado da divisão é ${resultado}.`);
  } catch (er) {
    console.log("Erro capturado:", er.message);
  }
}

// calcular();

function maiorIdade(idade) {
  return new Promise((resolve, reject) => {
    if (idade < 18) {
      reject(new Error("É preciso ser maior de idade."));
    } else {
      resolve();
      console.log("Você é maior de idade!");
    }
  });
}

async function verificarIdade() {
  try {
    maiorIdade(17);
  } catch (er) {
    console.log("Erro capturado:", er.message);
  }
}

verificarIdade();
