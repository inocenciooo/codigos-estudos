let boletoPago = false;

let verificacaoBoleto = prompt('O boleto está pago? Responda "sim" ou "não".');

if (verificacaoBoleto == "sim") {
  boletoPago = true;
} else if (verificacaoBoleto == "não") {
  boletoPago = false;
} else{
    boletoPago = null
}

if (boletoPago === false) {
  alert("O boleto não está pago! Seu pobre.");
} else if (boletoPago === true) {
  alert("O boleto está pago! Menos um de 32 parcelas!");
} else{
    alert('Escreve apenas "sim" ou "não", reinicie a página.')
}