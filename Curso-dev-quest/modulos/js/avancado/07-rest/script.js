// serve para coletar o resto das prorpiedades de um array ou objeto e/ou possibilitar que o parâmetro de uma função receba mais de um valor

// OBJETOS (mesmo sentido para ARRAYS)

const pessoa = {
  nome: "Roberto",
  sobreNome: "Carlos",
  idade: 22,
  endereco: "Rua das Flores",
};

let { nome, ...restoDados } = pessoa;
console.log(nome);
console.log(restoDados);

//FUNÇÕES

function soma(...numero) {
  return numero.reduce((numeroAdicionar, numero) => numeroAdicionar + numero);
}

console.log(soma(10, 20, 30, 40, 50));