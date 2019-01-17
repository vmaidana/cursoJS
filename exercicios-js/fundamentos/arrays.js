const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // valor indefinido, não dá erro

valores [6] = 10 // indices anterioes ficam vazios
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') // insere no final. possível misturar tipos de valores no array
console.log(valores)

console.log(valores.pop()) // retira e imprime último valor
delete valores[0] // retira valor do indice indicado
console.log(valores)

console.log(typeof valores) //array em javascript é do tipo object