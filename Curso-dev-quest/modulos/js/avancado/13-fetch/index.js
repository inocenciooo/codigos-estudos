document.getElementById("botao").addEventListener("click", () => {
  gerarCartaAleatorioBaralho();
});

async function buscarBaralho() {
  url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  resposta = await fetch(url);
  return await resposta.json();
}

async function puxarCarta(deck_id) {
  url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
  resposta = await fetch(url);
  return await resposta.json();
}

async function gerarCartaAleatorioBaralho() {
  const baralho = await buscarBaralho();
  const carta = await puxarCarta(baralho.deck_id);
  const imagemCarta = carta.cards[0].image;
  document.getElementById("cartaGerada").src = imagemCarta;
}

gerarCartaAleatorioBaralho();
