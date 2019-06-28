const soma = function (x, y) { // função anônima = função sem nome
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y) { // função diretamente no parâmetro
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)// função arrow é sempre anônima

const pessoa = {
    falar: function() { // função dentro do objeto
        console.log('OPA')
    }
}

pessoa.falar()