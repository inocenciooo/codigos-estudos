function adicionarComentario() {
  let inputComentario = document.getElementsByName("novo-comentario");

  let textoDigitado = inputComentario[0].value;

  let novoComentario = document.getElementById("novos-comentarios");

  novoComentario.innerHTML += `<p>Novo Comentário: ${textoDigitado}</p>`;

}
