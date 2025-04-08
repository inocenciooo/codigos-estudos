/*
switch(parametro){
    case valor1:
        <bloco de declaracao>
    case valor2:
        <bloco de declaracao>
    ...
    case valorN:
        <bloco de declaracao>
    default (caso seja um diferente de todos):
        <bloco de declaracao>
}
*/

let nomeFilme = 'goku'

switch(nomeFilme){
    case 'Vingadores':
        console.log('É o filme dos vingadores')
        break
    case 'Batman':
        console.log('É o filme do Batman')
        break
    default:
        console.log('É um outro filme com nome de: '+ nomeFilme)
        break
}

//MULTI CASO

let avaliacao = 6

switch(avaliacao){
    case 1:
    case 2:
        console.log('Filme Ruim')
        break //sai desses case
    case 3:
    case 4:
        console.log('Filme Bom')
        break //sai desses case
    case 5:
        console.log('Filme Incrível')
        break //sai desse case
    default:
        console.log('Valor inválido')
        break //sai desse case
}