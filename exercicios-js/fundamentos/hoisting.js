console.log('a =', a)
var a = 2 // variavel declarada com var é içada (movida) para o topo, podendo ser usada mesmo antes de declarada
console.log('a =', a) // atribuição só sera validada após a linha de atribuição

console.log('b =', b)
let b = 3 // variaveis com var não são içadas. utilização antes da declaração gera um erro
console.log('b =', b)