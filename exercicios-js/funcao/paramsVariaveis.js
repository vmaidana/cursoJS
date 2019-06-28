function soma() {
    let soma = 0
    for (i in arguments) { // argumenos é um array com todos os argumentos da função
        soma += arguments[i] // parâmetros ficam dinâmicos, são inseridos conforme a função é chamada
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))