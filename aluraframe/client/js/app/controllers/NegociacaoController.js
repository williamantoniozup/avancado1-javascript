class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {

        event.preventDefault();
   
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem.texto = 'Negociação adicionado com sucesso';
        this._mensagemView.update(this._mensagem);


        //this._listaNegociacoes.negociacoes.push(this._criaNegociacao()); // vou vai conseguir inserir um novo objeto, porém na lista copia que passe e não na original
        //this._listaNegociacoes.negociacoes.length = /0; //--> se eu fizer isso, detona com minha lista
        //console.log(this._listaNegociacoes.negociacoes);
        // console.log(negociacao);
        // console.log(DateHelper.dataParaTexto(negociacao.data)); 
        this._limpaFormulario();
    }


    _criaNegociacao() {

        return new Negociacao(

            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}



/*

        //let $ = document.querySelector;
        let $ = document.querySelector.bind(document);
        
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');



        //console.log(typeof(this._inputData.value));  uma String

        //'2012-12-12'
        //let negociacao = new Negociacao(this._inputData.value); //assim nao funcionar
        // console.log(this._inputData.value);

        //let helper = new DateHelper();  // com isso delego a responsabilidade de formatacao de data pro helper
        // let data =  helper.textoParaData(this._inputData.value);  --> faço direto
        // assim isolamos mais nosso código
        // console.log(data);

        // console.log(typeof(this._inputData.value));


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

    Dentro do Date(), ele guarda os meses dentro de um array que vai de 0 - 11, ou seja dezembro eh 11 e nao 12;


    DateHelper, como não possuo propriedades na classe DateHelper, ou seja nao fiz um
    construtor dentro da sua classe.. porem por default a classe possui um construtor... portanto
    a classe não possuindo propriedades eu não necessito instancia um objeto dessa classe
    eu simplesmente acesso os metodos dessa classe chamando a propria classe. Prém preciso definir os
    metodos dentro da classe DateHelper como estaticos. Ou seja.. são metodos que chamo direto da classe
    nao preciso ter uma instancia para trabalhar com eles.


    Devemos utilizar programacao defensiva para blindar que alguem possa adicionar uma negociocao
    na lista de negociação.

    Por fim do jeito que esta o codigo, conseguimos inserir negociações dentro da minha lista de negociacoes
    e ninguem pode altera-la,  com excessão do Adiciona(), que só pode inserir uma nova negociação.
*/