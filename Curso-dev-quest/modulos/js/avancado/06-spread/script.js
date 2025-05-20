// a propriedade spread serve para "espalhar" individualmente os valores de um array, objeto, para serem como se fossem escritos individualmete e podendo mesclar à um outro array ou objeto

// SEM SPREAD

let pessoa = { nome: "Roberto", sobreNome: "Carlos", idade: 22 };

let novaPessoSemSpread = { pessoa, endereco: "Alagoas" };
let novaPessoSpread = { ...pessoa, endereco: "Alagoas" };

console.log(novaPessoSemSpread);
console.log(novaPessoSpread);
