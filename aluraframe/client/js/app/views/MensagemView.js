class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

}

 
/*
return model.texto ? `<p class="alert alert-info">${model.texto}</p>`: '<p></p>';

Se texto vim vazio nao imprime nada...

    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
*/