class DateHelper {


    constructor() {
        throw new Error('Está classe não pode ser instanciada');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;  //template string
    }

    static textoParaData(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) // Fail fast
            throw new Error('Deve estar no formato aaaa-mm-dd')

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        //.map(function(item, indice){ return item - indice%2})
    }


}

/*
como não faz sentido instanciar um objeto da classe DateHelper, até pq nao vai ter metodo nenhum
eu posso sinalizar isso para o programador, utilizando o 'throw', que significa LANÇAR. OU seja
se alguem der new... ele mostra o erro


Template String.. ele interpola os resultados retornando uma string

    antigo
   static dataParaTexto(data) {
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
    }

*/