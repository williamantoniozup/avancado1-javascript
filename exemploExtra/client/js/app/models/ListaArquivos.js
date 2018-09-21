class ListaArquivos {

    constructor() {
        this._arquivos = [];
    }

    adiciona(arquivos) {
        this._arquivos.push(arquivos);
    }

    get arquivos() {
        return [].concat(this._arquivos);  //programação defensiva;
    }
}