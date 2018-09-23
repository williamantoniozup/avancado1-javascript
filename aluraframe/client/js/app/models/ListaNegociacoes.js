class ListaNegociacoes {

    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
        // this._contexto = contexto;
    }


    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this);
        // Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);  // programação defensiva, assim blindando que possa ocorrer duas inserções ao mesmo tempo por exemplo
    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha(this);
        // Reflect.apply(this._armadilha, this._contexto, [this]);
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


    Reflect.apply(this._armadilha, this._contexto, [this]);

    reflect é uma classe, chamando um metodo estatico dessa classe.

*/