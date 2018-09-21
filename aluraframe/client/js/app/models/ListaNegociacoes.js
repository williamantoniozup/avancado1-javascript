class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }


    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);  // programação defensiva, assim blindando que possa ocorrer duas inserções ao mesmo tempo por exemplo
    }
}


/*
Para blindar minha lista e que não ocorro nenhuma alteração na minha lista
'negociacoes', eu retorno uma nova lista, uma copia da minha lista 
um novo objeto que concatena com a lista
negociacao, assim se inserir, ou excluir, ou colocar length = 0, como é outra lista
não vai alterar a lista original


    // Método desse jeito, deixa a possibilidade de alterar a lista de negociação

    get negociacoes() {
        return this._negociacoes;
    }

*/