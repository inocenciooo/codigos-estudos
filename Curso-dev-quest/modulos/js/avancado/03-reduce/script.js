// Serve para reduzir/ agrupar um array em apenas um valor, podendo ser uma média, soma, etc.

const pessoas = [
  { nome: "Roberto", idade: 19 },
  { nome: "Roberto", idade: 22 },
  { nome: "Roberto", idade: 16 },
];

let somaIdade = pessoas.reduce((idadeSomada, pessoa) => {
  return idadeSomada + pessoa.idade;
}, 0);

console.log(somaIdade);
