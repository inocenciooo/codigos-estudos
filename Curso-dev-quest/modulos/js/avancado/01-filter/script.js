// Filter é uma função que retorna uma outra função com o objetivo de filtrar um Array.

const pessoas = [
  { nome: "Roberto", idade: 19 },
  { nome: "Roberto", idade: 22 },
  { nome: "Roberto", idade: 16 },
];



//Forma Rudimentar

/*
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].idade >= 18) {
    pessoasMaiorIdade.push(pessoas[i]);
  }
}

console.log(pessoasMaiorIdade);
*/

//COM FILTER

let pessoasMaiorIdade = pessoas.filter((pessoa) => {
    return pessoa.idade>=18;
})

console.log(pessoasMaiorIdade);