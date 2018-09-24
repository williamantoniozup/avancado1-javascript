class ProxyFactory {

    static create(object, props, action) {

        return new Proxy(new ListaNegociacoes(), {
            // get (target, prop, receiver){
            get: function (target, prop, receiver) {
                if (props.includes(prop) && typeof (target[prop]) == typeof (Function)) {
                    //this -> é do proxy
                    return function () {
                        console.log(`Interceptando: ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return action(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            }
        });
    }
}

/*
static createProxy(object, props, action)
Objeto que quero criar o proxy
props - as propriedades que quero observar --> ['adiciona', 'esvazia'].includes(prop)
action - a ação que quero executar --> self._negociacoesView.update(target);


*/