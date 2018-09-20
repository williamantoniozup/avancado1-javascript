class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault(); 

        //console.log(typeof(this._inputData.value));  uma String

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
        console.log(negociacao);
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

*/