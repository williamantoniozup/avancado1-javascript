/*
- Classe de negocio
- Construtor da classe e métodos
- Encapsulamento


*/

class Negociacao {


    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // acesso esse método como se fosse uma propriedade do objeto.
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }



}



/*
    toda negociação que eu crio ja vai possuir uma data do nosso sistema por padrão
    defino os atributos da classe no ECMA6, atraves do construtor
    
    Toda classe com um construtor eu só posso chama-lá com um new, pois
    a função construtora só vai ser chamada com o operador new    
    
    no javascript um método é um tipo de função;
    se é criar uma função dentro de uma classe -> é um método
    se eu criar fora de uma classe é uma função.

    Encapsulamento:
    this._quantidade, esse underline é uma convenção para o programador dizendo
    que essas propriedades só podem ser acessadas pelos proprios métodos da classe,
    ninguem de fora podem acessá-los. Quando um programador vê essa convenção ele 
    sabe que não pode acessar diretamente essa variavel. _atributo (atributo privado)


    //método acessador
    getVolume() {
        return this._quantidade * this._valor;
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }

    A Sintaxe get
    Truque do get...

    comparação 
    get valor() {
        return this._valor;
    }
    com 
    getValor() {
        return this._valor;
    }

    console.log(n1.valor);
    console.log(n1.getValor());

    Para tornar objetos imutáveis, usaremos um proprieadade do JS, que vamos "congelar" 
    o objeto.

    
    Criação de um atalho uand queremos que tal método acesse aquela variavel apenas
    para leitura. Eu posso criar um get

*/



