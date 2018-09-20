class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();

        //console.log(typeof(this._inputData.value));  uma String

        //'2012-12-12'
        //let negociacao = new Negociacao(this._inputData.value); //assim nao funcionar
        // console.log(this._inputData.value);
        let data = new Date(...
            this._inputData.value
                .split('-') // arrow functions
                .map((item, indice) => item - indice % 2)   //.map(function(item, indice){ return item - indice%2})
        ); 
        // console.log(data);

        let negocioacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negocioacao);

        //adicionar a negociação a uma lista
    }
}



/*

        //let $ = document.querySelector;
        let $ = document.querySelector.bind(document);
        
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');


//Higher-Order Functions - truque pra quem quer criar um miniFramework

let $ = document.querySelector; --> sem associação com o 'document'

let $ = document.querySelector.bind(document);

joga a funcionalidade do querySelector dentro do '$' e usa o '.bind()'
para não perder a associação com o document.


Uma das coisa que devemos evitar ao máximo no javascript é percorrer o DOM

Versao 1 -
    adiciona(event) {
        event.preventDefault(); // quando submeto um formulário por padrão ele vai recarregar
        // cancela a submissao do formulário para capturar os dados da minha submissão
        // alert("chamei ação do meu controller!");

        console.log(this._inputData.value);
        console.log(this._inputQuantidade.value);
        console.log(this._inputValor.value);
    }


      //console.log(typeof(this._inputData.value));  uma String
      Fazer um modo que está String seja convertido para um objeto date.

      Há várias maneiras de construir uma data, passando parametros para seu
      construtor.

      let data = new Date(this._inputData.value.replace(/-/g, ',')); expressão regular

    Podemos criar uma data desta maneira
    let outraData = new Date('2016/05/17'); // formato ano/mês/dia
    let outraDataOutraManeira = new Date(2016, 4, 17);
      
      Problemas com datas.

      Como converter '2016-11-12'

      para new Date(2016,10,12);

      spread operator.
      let data = new Date(...this._inputData.value.split('-'));
      cada posição do array vai pro respectivo local no construtor do Date
      porém do jeito que ta nao vai decrementar o mes. 

         let data = new Date(...
            this._inputData.value
                .split('-')
                .map(function (item, indice) {
                    // if (indice == 1) return item - 1;
                    // return item;
                    return item - indice % 2;
                })
        );

*/