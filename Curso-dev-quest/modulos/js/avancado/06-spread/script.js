// a propriedade spread serve para "espalhar" individualmente os valores de um array, objeto, para serem como se fossem escritos individualmete e podendo mesclar à um outro array ou objeto


let pessoa = { nome: "Roberto", sobreNome: "Carlos", idade: 22 };

let novaPessoaSemSpread = { pessoa, endereco: "Alagoas" };
let novaPessoaSpread = { ...pessoa, endereco: "Alagoas" };

console.log(novaPessoaSemSpread);
console.log(novaPessoaSpread);
