// A desestruturação de array e objetos seve para conseguir criar variáveis de propriedades de objetos ou de arrays

// Forma não ncessária

const pessoa = { nome: "carlos", sobreNome: "roberto", idade: 22 };
/*
const nome = pessoa.nome;
const sobreNome = pessoa.sobreNome;
const idade = pessoa.idade;

console.log(nome);
console.log(sobreNome);
console.log(idade);

*/

//FORMA IDEAL

const pessoa2 = { nome: "carlos", sobreNome: "roberto", idade: 22 };

const { nome: nomePessoa, sobreNome, idade } = pessoa2;
// cria uma variavel com o nome informado para cada propriedade definida no objeto, seguindo na ordem de criação, podendo também definir qual é qual caso não precise de todas seguindo uma ordem ou tenham nomes diferentes.

console.log(`${nomePessoa},${sobreNome},${idade}`);

// com array

const numeros = [1, 2, 3, 4];


const [um, dois, tres, quatro] = numeros;

console.log(`${um},${dois},${tres},${quatro}`);
