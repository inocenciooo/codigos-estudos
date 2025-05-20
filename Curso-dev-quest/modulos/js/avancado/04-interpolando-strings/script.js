// interpolação de string é você conseguir enscrever dentro de uma string tipo de informações não strings, utilizando crases: ``

//FORMA ANTIGA

function imprimirPessoa(nome, sobreNome, idade) {
  return console.log(
    "Bem vindo " +
      nome +
      ", com o sobrenome de " +
      sobreNome +
      " e idade de " +
      idade
  );
}

imprimirPessoa("roberto", "carlos", 22);

//FORMA RECOMENDADEA

function imprimirPessoaIdeal(nome, sobreNome, idade) {
  return console.log(
    `Bem vindo ${nome}, com o sobrenome de ${sobreNome} e idade de ${idade}`
  );
}

imprimirPessoaIdeal("roberto", "carlos", 22);
