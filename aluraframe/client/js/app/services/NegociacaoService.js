class NegociacaoService {

    constructor() {
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {
    
        return new Promise((resolve, reject) => {

            this._http
                .get('/negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                });
        });
    }

    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                });
        });
    }

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                });
        });
    }

    // obterNegociacoes(cb) {

    //     let xhr = new XMLHttpRequest();

    //     xhr.open('GET', 'negociacoes');

    //     xhr.onreadystatechange = () => {

    //         if (xhr.readyState == 4) {

    //             if (xhr.status == 200) {

    //                 cb(null, JSON.parse(xhr.responseText)
    //                     .map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
    //             } else {
    //                 console.log(xhr.responseText);
    //                 cb('Não foi possível obter as negociações!', null);

    //             }
    //         }

    //     }

    //     xhr.send();
    // }


    /* 
    obterNegociacoesDaSemana() {
         Toda Promise ela recebe uma função, onde nessa função, ela recebe dois parametros. 
        Resolve é uma função que eu tenho que passar paara esta função o retorno de sucesso do meu 'obterNegociacaoDaSemana'.
        Reject  o erro
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', '/negociacoes/semana');

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        // console.log('Obtendo as negociações do servidor!');
                        // console.log(JSON.parse(xhr.responseText));
                        resolve(JSON.parse(xhr.responseText) //retornar formato texto 'stringzona' em objeto
                            .map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
                        // .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana!');
                    }
                }
            }
            xhr.send();
        });

        configurações
            0: requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição concluída e a resposta esta pronta
       
    }
    */
}