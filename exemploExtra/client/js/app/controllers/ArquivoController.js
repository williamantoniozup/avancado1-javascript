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

        this._imprimeLista();

        //cria um Arquivo com as suas propriedades;
        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _criaArquivo() {
        return new Arquivo(...ArquivoHelper.stringParaObjetoArquivo(this._inputDados.value));
    }

    _imprimeLista(){
        this._listaArquivos.arquivos.forEach((element,i) => {
            console.log(`Arquivo ${i} - > nome: ${element.nome}/ tamanho: ${element.tamanho}/ tipo: ${element.tipo}`);
        });
    }

    // _imprimeLista(){
    //     for(let i=0; i<this._listaArquivos.arquivos.length; i++){
    //         console.log(`nome: ${this._listaArquivos.arquivos[i].nome}/ tamanho: ${this._listaArquivos.arquivos[i].tamanho}/ tipo: ${this._listaArquivos.arquivos[i].tipo}`);
    //     }
    // }



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