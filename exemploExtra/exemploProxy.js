let funcionario = {
    email: 'abc@email.com'
};


// let funProxy = new Proxy(funcionario,{
//     get:function(target, prop, receiver){
//         console.log('Armadilha aqui!');
//         return '**' + Reflect.get(target, prop, receiver) + '**';
//     }
// });

// let funProxy = new Proxy(funcionario,{
//     get:function(target, prop, receiver){
//         console.log('Armadilha aqui!');
//         return target[prop] = '**abc@email.com**';
//     }
// });

let funProxy = new Proxy(funcionario, {
    set: function (target, prop, value, receiver) {
        console.log('Armadilha aqui!');
        console.log(`valor antigo: ${target[prop]} - valor novo: ${value}`);
        return target[prop] = '**abc@email.com**';
    }
});
// console.log(funProxy.email);
funProxy.email = "novo@mail.com";


/**
 
Há uma ligeira diferença entre as duas. Na primeira, get retorna uma função 
que é invocada para obter o valor da propriedade original, na segunda, o valor 
é retornado diretamente. Entenda que Reflect.get cria algo semelhante a uma getter. 
Você ainda lembra que um getter é uma espécie de função?
 */

