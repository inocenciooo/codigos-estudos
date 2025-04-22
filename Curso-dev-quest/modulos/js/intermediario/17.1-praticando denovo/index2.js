function adicionarComentario() {
  let comentario = document.getElementsByName("novo-comentario");

  let comentado = comentario[0].value;

  let novoComentario = document.getElementById("novos-comentarios");

  novoComentario.innerHTML =+ `<p>Novo Comentário: ${comentado}</p>`;
}
