console.log(7 / 0) // tipo infinity
// JavaScript converte string para possibilitar operação:
console.log("10" / 2)
console.log("10" - 2)
console.log("10" * 2)
// com soma, faz concatenação
console.log("3" + 2) 
// não podem haver símbolos não numericos na string
console.log("show!" * 2) // não repete a string 2 vezes
console.log(0.1 + 0.7) // não da .8 por precisão suportada por JavaScript
// console.log(10.toString()) não converte number para string
console.log((10.345).toFixed(2)) // arredonda para duas casas
