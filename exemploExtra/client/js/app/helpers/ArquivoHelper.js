class ArquivoHelper {

    constructor() {
        throw new Error('Está classe não pode ser instanciada!');
    }

    static stringParaObjetoArquivo(arquivo) {
        let arquivoArray = [];
        return arquivoArray = arquivo.split('/');
    }


}