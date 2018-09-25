class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.negociacoes.map(n => `

                <tr>
                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                </tr>

            `).join('')}
            </tbody>
            <tfoot>
                <td colspan="3"></td>
                <td>${model.volumeTotal} 
                </td>
            </tfoot>
        </table>        
        `
    }

}



/*
    constructor(elemento) {
        this._elemento = elemento; //alvo onde meu template vai ser incluído.
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }

preciso de alguma forma associar o elemento div que criei no index.html a minha
NegociacoesView. Para isso... no constructor da Classe NegociacoesView eu vou receber
um elemento, que eh um elemento do DOM que vai receber meu template.


 this._elemento.innerHTML, passando essa string do template pro inner... ele converte
 se a marcação da string tiver correta, pra elementos do DOM, que vai ser inserido como filho
 da minha div que elemento se refere-se


    ${model.negociacoes.map(n =>{
        return `
            <tr>
                <td>${DateHelper.dataParaTexto(n.data)}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
                <td>${n.volume}</td>
            </tr>
        `
    }).join('')}


    map esta varrendo minha lista... e pra cada negociação, eu estou criando uma nova lista com
    uma tr e os dados daquela negociação

    Dentro da template string, adicionamos as tags <tr> e <td>, e usamos várias expressões para definirmos 
    a exibição de data, quantidade, valor e volume. Quando o _template() for retornar a string, 
    terá que processar o trecho do return primeiramente, e depois retornar a template string.
     Para cada negociação será criada uma lista - cada uma com as tags <tr> e os dados cadastrados. 
     Estamos varrendo a lista e para um objeto Negociacao, estamos criando um array, mas o novo elemento 
     será uma string com os dados. No entanto, por enquanto, o retorno será um array. Por isso, adicionaremos 
     o join().
     Ao utilizarmos o join(), usamos como critério de junção uma string em branco. Agora, teremos uma string 
     com todos os dados do array concatenados. Vamos ver o que será exibido no navegador, 
     após o preenchimento do formulário:



    a Gambi que fizemos,
     <tfoot>
        <td colspan="3"></td>
        <td>${  --> INTERPOLAÇÃO DE EXPRESSÃO,  tornando o codigo mais facil de compreender, usando template String
            //IIFE: Immediately - invoked Function Expression 
            (function(){
                let total = 0;
                model.negociacoes.forEach(n => total += n.volume);
                return total;
            })() // auto invocar a function
        }</td>
    </tfoot>

    foi trocado pelo um trecho de codigo utilizando paradigma funcional.


    reduce(), processa um array e no final nos retorna  um unico resultado:

     <tfoot>
        <td colspan="3"></td>
        <td>${
                model.negociacoes.reduce(function (total, n) {
                    return total + n.volume;
                }, 0.0)
            }
        </td>
    </tfoot>
*/

