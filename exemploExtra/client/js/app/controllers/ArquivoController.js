class ArquivoController {

    constructor() {

        let $ = document.querySelector.bind(document)
        this._inputDados = $('.dados-arquivo');
        this._listaArquivos = new ListaArquivos();
    }

    envia(event) {

        event.preventDefault();

        console.log(this._inputDados.value);
        console.log(typeof (this._inputDados.value));

        // var teste = this._criaArquivo();
        // console.log(teste);

        this._listaArquivos.adiciona(this._criaArquivo());
        console.log(this._listaArquivos.arquivos);

        //cria um Arquivo com as suas propriedades;
        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _criaArquivo() {
        return new Arquivo(...ArquivoHelper.stringParaObjetoArquivo(this._inputDados.value));
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}



/*
Sua tarefa é implementar o método envia de ArquivoController. 
Ele deverá ler a entrada do usuário e adequá-la ao construtor de Arquivo. 
Assim que você conseguir criar uma instância de arquivo, você deve imprimir 
seus dados no console.

Lembre-se que o usuário digita no campo de entrada os dados 
do arquivo no formato: nome / tamanho / tipo e deve estar em caixa alta!

*/