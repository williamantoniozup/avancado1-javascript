class Mensagem {

    constructor(texto='') {

        this._texto = texto;
    }


    get texto() {

        return this._texto;
    }

    set texto(texto) {

        this._texto = texto;
    }

}


/*
constructor(texto='') {

    this._texto = texto;
}

(texto='') --> isto faz com que quando instancio minha classe Mensagem, posso passar ou não
um parametro para o construtor.


*/