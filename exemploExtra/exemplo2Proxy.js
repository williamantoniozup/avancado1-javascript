class Funcionario {

    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

}

// let f = new Funcionario();
// f.email = 'haha';

// let funProxy = new Proxy(new Funcionario('abc@emai.com'),{

//     get: function(target, prop, receiver){
//         console.log('Armadilha aqui!');
//         console.log(prop);
//         // return target[prop];
//         return Reflect.get(target, prop, receiver);
//     }
// });

// console.log(funProxy.email);

let funProxy = new Proxy(new Funcionario('abc@email.com'), {
    set: function (target, prop, value, receiver) {
        console.log('Armadilha aqui!');
        console.log(`valor antigo: ${target[prop]} - valor novo: ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
})


funProxy.email = 'new@email.com';



// console.log(f.email);

// isso:
function exibeNomeCompleto(nome, sobrenome) {

    console.log(`${nome} ${sobrenome}`);
}

exibeNomeCompleto('Flávio', 'Almeida');


// é igual a isso

function exibeNomeCompleto() {

    console.log(`${arguments[0]} ${arguments[1]}`);
}

exibeNomeCompleto('Flávio', 'Almeida');