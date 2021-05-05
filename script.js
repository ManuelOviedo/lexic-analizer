const tipos = Object.freeze({
    NUMERO: '[0-9]',
    OPERADOR_BINARIO: '[*|/|+|-]',
    ALFANUMERICO: '[a-zA-Z]'
});

class scanner {

    get tokens() {
        return this._tokens;
    }

    constructor(token) {
        if (!Array.isArray(this._tokens) && typeof token === 'string') {
            this._tokens = token.split('');
        }
    }

    renderTokens(){
        if (Array.isArray(this._tokens)) {
            let mapped = [];
            this._tokens.forEach((token, index) => {
                mapped[index] = {};
                mapped[index][token] = Object.keys(tipos).map(typeKey => {
                    const regExp = new RegExp(tipos[typeKey]); 
                    console.log('typeKey: ', regExp.test(token), token);
                    if (regExp.test(token)) {
                        return typeKey;
                    }
                    return undefined;
                }).filter(item => item);
                console.log(mapped);
            });
            return mapped.map(item => {
                const formed = {};  
                Object.keys(item).forEach(tokenItem => {
                    formed[tokenItem] = Object.keys(item).map(tokenItem => item[tokenItem].length ? item[tokenItem] : 'Token inválido');
                });
                return formed;
            });
        }
        return undefined;
    }
}

export default scanner;