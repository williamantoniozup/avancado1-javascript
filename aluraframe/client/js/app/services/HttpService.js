class HttpService {
    /* para retirar as requisições http de dentro de Negociações Service */

    get(url) {
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText)); //retornar formato texto 'stringzona' em objeto
                    } else {
                        reject(xhr.responseText);
                    } 
                }
            }
            xhr.send();
        })
    }

}