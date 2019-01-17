// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // imprime NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // ignora os números excedentes
imprimirSoma() // imprime NaN

// função com retorno
function soma(a, b = 1) { // valor padrão para b = 1
    return a + b
}
console.log(soma(2, 3)) // função com retorno dentro do console.log()
console.log(soma(2))
console.log(soma()) // retorna NaN