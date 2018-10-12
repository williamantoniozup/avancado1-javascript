class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        // this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia'
        );

        // this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        );



        // quero fazer um Bind da minha 'listaNegociacoes', com minha view quando os metodos adiciona() e esvazia() forem chamados.

        // this._listaNegociacoes = ProxyFactory.create(
        //     new ListaNegociacoes(),
        //     ['adiciona', 'esvazia'],
        //     (model) => this._negociacoesView.update(model)
        // );

        // let self = this; --> Terceira maneira de resolver a questão do contexto do nosso this, utilizando o SELF;
        // this._listaNegociacoes = new ListaNegociacoes(function(model){
        // self._negociacoesView.update(model);
        // });

        // Codigo para usar com armadilha na Classe ListaNegociacoes 
        // this._listaNegociacoes =
        // new ListaNegociacoes(model => this._negociacoesView.update(model));


        // eh chamado quando usar esvazia(), esse model vai ser a instancia de Lista de negociação que vai ser passada pra essa funcao quando ela for chamada
        // quero que este 'this.' de cima seja o 'NegociacaoController' e não uma 'ListaNegociacao'
        /**
            Arrow function não é somente uma maneira sucinta de escrever função, ela tem uma caracteristica muito
            peculiar, o escopo do 'this' de uma arrow é Léxico, ele não é dinâmico igual de uma function, ele nao
            muda de acordo com o contexto. O 'this' vai continuar sendo uma 'NegocioController', o 
            'this._armadilha' não vai ser de 'ListaNegocio', ele vai ser de 'NegociacaoController' tbm.
        */

        // this._negociacoesView.update(this._listaNegociacoes); // primeira renderização da minha lista

        // this._mensagem = ProxyFactory.create(
        //     new Mensagem(),
        //     ['texto'],
        //     (model) => this._mensagemView.update(model)
        // );


        // this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociação adicionado com sucesso';

        this._limpaFormulario();

        // this._mensagemView.update(this._mensagem);
        //this._listaNegociacoes.negociacoes.push(this._criaNegociacao()); // vou vai conseguir inserir um novo objeto, porém na lista copia que passe e não na original
        //this._listaNegociacoes.negociacoes.length = /0; //--> se eu fizer isso, detona com minha lista
        //console.log(this._listaNegociacoes.negociacoes);
        // console.log(negociacao);
        // console.log(DateHelper.dataParaTexto(negociacao.data)); 

    }


    importaNegociacoes() {
        //  usando Promise
        let service = new NegociacaoService();
        // o 'obterNegociacoesDaSemana me devolve uma promessa de que vai obter esses dados, entao (then) eu recebo uma lista de negociacoes
        service.obterNegociacoesDaSemana()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                this._mensagem.texto = 'Negociações da semana obtida com sucesso!'
            })
            .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaAnterior()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                this._mensagem.texto = 'Negociações da semana obtida com sucesso!'
            })
            .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaRetrasada()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                this._mensagem.texto = 'Negociações da semana obtida com sucesso!'
            })
            .catch(erro => this._mensagem.texto = erro);
        /*
        service.obterNegociacoesDaSemana((err, negociacoes) => { 
            if (err) {
                this._mensagem.texto = err;
                return;
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            service.obterNegociacoesDaSemanaAnterior((err, negociacoes) => {
                if (err) {
                    this._mensagem.texto = err;
                    return;
                }

                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                service.obterNegociacoesDaSemanaRetrasada((err, negociacoes) => {
                    if (err) {
                        this._mensagem.texto = err;
                        return;
                    }

                    // negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    // service.obterNegociacoes((err, negociacoes) => {
                    //     if (err) {
                    //         this._mensagem.texto = err;
                    //         return;
                    //     }

                    //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    //     this._mensagem.texto = 'Negociações importadas com sucesso!';
                    // });
                });
            });

        });
        */






    }


    apaga() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso!';
        // this._mensagemView.update(this._mensagem);
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


       this._listaNegociacoes = new ListaNegociacoes(this, function (model) {
            console.log(this);
            this._negociacoesView.update(model); // eh chamado quando usar esvazia(), esse model vai ser a instancia de Lista de negociação que vai ser passada pra essa funcao quando ela for chamada
            // quero que este 'this.' de cima seja o 'NegociacaoController' e não uma 'ListaNegociacao'
        });


    Padrão de Projeto Proxy
    se quisermos monitorar os models Mensagem e Negociacoes, teremos que abrir a classe para alterar
    e colocar a armadilha - mas, não faremos isto.
    Não é bom inserirmos armadilhas nas classes, pois perdemos reutilização do modelo e teremos
    que repetir em todos os modelos do sistema.
    Nós acessamos o Proxy como se ele fosse o objeto real, este último ficará escondido
    dentro do outro.
    A vantagem está que colocaremos as armadilhas entre a chamada do Proxy e o objeto real.

    é um padrão de projeto onde eu tenho um cara mentirosos,
    O padrão de projeto Proxy nada mais é do que um objeto "falso", "mentiroso", que envolve e encapsula o objeto 
    real que queremos interagir. É como se fosse uma interface, entre o objeto real e o resto do código.
    Conseguimos assim controlar o acesso aos seus atributos e métodos. Nele também podemos pendurar códigos que 
    não cabem de estar alocados nos nossos modelos, mas que necessitam ser executados no caso de uma alteração 
    ou atualização do mesmo.

    Como segundo argumento de um proxy, passamos um handler, que é um objeto JavaScript que contém as 
    armadilhas (traps) do nosso Proxy. 

    O TARGET é o objeto real que é encapsulado pela proxy. É este objeto que não queremos "sujar" com armadilhas ou 
    qualquer código que não diga respeito ao modelo.

    O PROP é a propriedade em si, que está sendo lida naquele momento.

    O RECEIVER é a referência ao próprio proxy. É na configuração do handler do Proxy que colocamos armadilhas. 

    Proxies são objetos dos nossos modelos! Casca que envolvem objetos

    Dentro desse contexto, só podemos "tocar" os objetos encapsulados passando pelo proxy. 
    É justamente essa característica que torna o uso desse padrão de projeto tão poderoso.



    não há como eu interceptar um método com PROXY, somente propriedades que são lidas ou escritas,
    (getters e setters são exceções a este problema).

    Quando chamamos uma função ou método, o JavaScript fará um getter e após a leitura, será enviada um apply.

    Em relacao ao Freeze da classe Negociacao
    E realmente não tem, mas ainda sim a armadilha definida no proxy será executada! Resumindo a moral da história: 
    armadilhas serão disparadas mesmo se tentarmos modificar uma propriedade congelada de um objeto, 
    ainda que ele não seja modificado.

    A variável arguments é uma variável implícita que pode ser acessada em métodos ou funções. Ele se comporta como 
    um array onde cada posição equivale ao parâmetro que foi passado para o método ou função. Existe desde o ES5!


    Substituindo esse trecho:

    let self = this;

    this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
        // get (target, prop, receiver){
        get: function (target, prop, receiver) {
            if (['adiciona', 'esvazia'].includes(prop) && typeof (target[prop]) == typeof (Function)) {
                //this -> é do proxy
                return function () {
                    console.log(`Interceptando: ${prop}`);
                    Reflect.apply(target[prop], target, arguments);
                    self._negociacoesView.update(target);
                }
            }
            return Reflect.get(target, prop, receiver);
        }

    });


    BIND INICIAL

    this._negociacoesView = new NegociacoesView($('#negociacoesView'));

    this._listaNegociacoes = new Bind(
        new ListaNegociacoes(),
        this._negociacoesView,
        ['adiciona', 'esvazia']
    );

    this._mensagemView = new MensagemView($('#mensagemView'));

    this._mensagem = new Bind(
        new Mensagem(),
        this._mensagemView,
        ['texto']
    );



    Padrão de projeto - PROMISE DESIGNER PATTNER

    reduzir a complexidade do código quando a gente lida com programação asyc.
    A PROMISE é um resultado futuro de uma operação.

    Precisamos transformar o 'NegociacaoService' em uma promise
*/