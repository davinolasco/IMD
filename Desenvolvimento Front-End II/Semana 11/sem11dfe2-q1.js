const excluirPropriedades = (objeto, propriedades) => {
    
    for (let i = 0; i < propriedades.length; i++) {
        delete objeto[propriedades[i]];
    }

    return objeto;

};

var exemplo = { a: 1, b: 2, c: true };
console.log(excluirPropriedades(exemplo, ['b'])); // { a: 1, c: true }

exemplo = { a: 1, b: 2, c: true };
console.log(excluirPropriedades(exemplo, ['b', 'a'])); // { c: true }