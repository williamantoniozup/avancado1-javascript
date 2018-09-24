class ProxyFactory {

    static create(object, props, action) {

        return new Proxy(object, {
            // get (target, prop, receiver){
            get: function (target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    //this -> é do proxy
                    return function () {
                        console.log(`Interceptando: ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return action(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set: function (target, prop, value, receiver) {
                if (props.includes(prop)) {
                    target[prop] = value;
                    action(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _ehFuncao(func) {
        return typeof (func) == typeof (Function);
    }
}

/*
static createProxy(object, props, action)
Objeto que quero criar o proxy
props - as propriedades que quero observar --> ['adiciona', 'esvazia'].includes(prop)
action - a ação que quero executar --> self._negociacoesView.update(target);


*/