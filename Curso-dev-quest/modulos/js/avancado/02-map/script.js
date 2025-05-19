// A sintaxe é igual ao FILTER, porém com o map é possível criar um outro array de tamanho igual ao original.
// Pode criar um outro array apenas com uma das características dos itens do array.

const pessoas = [
  { nome: "Roberto", idade: 19 },
  { nome: "Roberto", idade: 22 },
  { nome: "Roberto", idade: 16 },
];

let nomePessoas = pessoas.map((pessoa) => {
  return pessoa.nome;
});

console.log(nomePessoas);
