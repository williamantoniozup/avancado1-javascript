let objeto1 = {
    nome: 'Bob'
}

let objeto2 = {
    nome: 'Mario'
}


function exibeNome(prefixo,sufixo) {
    console.log(prefixo + this.nome + sufixo);
}


// exibeNome();

Reflect.apply(exibeNome, objeto1, ['Mr. ',' Cash']);
Reflect.apply(exibeNome, objeto2, ['','']);

// var teste = () => "ae";
// console.log(teste());


/**
 *  Como Reflect.apply funciona? O primeiro parâmetro é o método ou função que desejamos invocar. 
 *  O segundo parâmetro é o contexto que o método ou função adotará, ou seja, o valor que será 
 *  assumido pelo this. Por fim, o último parâmetro é um array que contém todos os parâmetros que o 
 *  método passado como primeiro parâmetro receberá. Como ele não recebe parâmetro nenhum, passamos 
 *  um array vazio.
 */