class NegociacaoService {

    obterNegociacoesDaSemana(cb) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/negociacoes/semana');


        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status == 200) {

                    // console.log('Obtendo as negociações do servidor!');
                    // console.log(JSON.parse(xhr.responseText));
                    cb(null, JSON.parse(xhr.responseText) //retornar formato texto 'stringzona' em objeto
                        .map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
                    // .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                } else {
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações da semana!', null);

                }
            }

        }

        xhr.send();

        /* configurações
            0: requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição concluída e a resposta esta pronta
        */
    }

    obterNegociacoesDaSemanaAnterior(cb) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/retrasada');

        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status == 200) {

                    cb(null, JSON.parse(xhr.responseText)
                        .map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
                } else {
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações da semana anterior!', null);

                }
            }

        }

        xhr.send();
    }

    obterNegociacoesDaSemanaRetrasada(cb) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/retrasada');

        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status == 200) {

                    cb(null, JSON.parse(xhr.responseText)
                        .map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
                } else {
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações da semana retrasada!', null);

                }
            }

        }

        xhr.send();
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
}