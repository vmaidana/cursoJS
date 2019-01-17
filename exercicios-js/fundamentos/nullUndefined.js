let valor // não inicializada
console.log(valor)

valor = null // ausência de valor, porém inicializada
console.log(valor)
//console.log(valor.toString()) // ERRO!!!

const produto = {}
console.log(produto.preco) 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco forma correta de limpar
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)
