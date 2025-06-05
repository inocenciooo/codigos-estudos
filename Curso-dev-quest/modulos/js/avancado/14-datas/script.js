const dataAtual = new Date();

console.log(`Data Atual: ${dataAtual}`);

const umDiaDepois = new Date(dataAtual);

umDiaDepois.setDate(dataAtual.getDate() + 1);

console.log(`Um dia depois: ${umDiaDepois}`);

const umMesAntes = new Date(dataAtual);

umMesAntes.setMonth(dataAtual.getMonth() - 1);

console.log(`Um mês antes: ${umMesAntes}`);

const opcoes = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const dataFormatada = dataAtual.toLocaleDateString("pt-BR", opcoes);

console.log(`Data formatada: ${dataFormatada}`);
