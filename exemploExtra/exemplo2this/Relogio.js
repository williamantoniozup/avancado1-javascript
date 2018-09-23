class Relogio {

    constructor() {
        this._segundos = 0;

        setInterval(() => console.log(++this._segundos), 1000);
    }
}

var relogio = new Relogio();