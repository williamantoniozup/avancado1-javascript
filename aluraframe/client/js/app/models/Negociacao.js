/*
- Classe de negocio
- Construtor da classe e métodos
- Encapsulamento


*/

class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // this uma variavel implícita
    }

    // acesso esse método como se fosse uma propriedade do objeto.
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
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
    defino os atributos da classe no ECMA6, atraves do construtor. Pessoal chama esses
    atributos do método construtor de propriedades.
    
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
    o objeto., Assim aprendemos como tornar uma instancia imutavel, aplicando a propriedade
    Object.freeze no construtor da Classe.

    Porém, esta instância é imutavel mesmo?
    Pela regra de negocio a a Negociacao deve ser imutavel, não pode ser alterada depois de 
    criada.

    Criação de um atalho quando queremos que tal método acesse aquela variavel apenas
    para leitura. Eu posso criar um get nameMetodo(){};


    Objetc.freeze é raso, só fica na superfice
    n1.data.setDate(20); -> consigo alterar o dado da data. Ele não é profundo "deep", ele 
    nao realiza um deep freeze, pois se um dos atributos da classe for um outro objeto
    que possui propriedads, o freeze não se aplica para ele. Para isso temos que realizar uma
    programação defensiva.

    o getTime de uma data retornará um número long com uma representação da data.
    No construtor do Date(), este número será aceito para a construção de uma nova 
    data. Então quando pedimos uma nova "data", ela será criada baseada na data da
    negociação. Trata-se de um novo objeto. Se tentarmos alterar a data no index.html, 
    apenas a cópia será alterada - o novo objeto que retornei "date", enquanto o interno 
    seguirá inalterado. Isso é o que chamamos de programacao defensiva.

    Por fim, deste modo conseguimos assegurar a imutabilidade das variaveis da classe

    Substituindo VAR por LET:

    A declaração VAR, vc consegue acessar a variável fora do escopo em que ela foi declarada.
    Com o uso do LET, a variável só pode ser acessada no escopo onde ela foi declarada.
    
    

*/



