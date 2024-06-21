function calcularGastoCombustivel (distancia, tipoCombustivel){
    if (!Number.isInteger(distancia) || distancia < 0) {
        throw new Error('A distância deve ser um número inteiro positivo.');
    }

    if(tipoCombustivel != 'gasolina' && tipoCombustivel != 'etanol'){
        throw new Error('o combustivel deve ser apenas gasolina ou etanol')
    }
    let total
    if(tipoCombustivel == 'gasolina'){
        total = distancia / 16
    }
    if(tipoCombustivel == 'etanol'){
        total = distancia / 11
    }

    return Math.ceil(total)
}

module.exports = {calcularGastoCombustivel}

