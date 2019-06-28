const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// objetivo = gerar novo array com as menores notas do objeto

// sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function (nota) { 
// função filter: filtra os elementos do array mediante resultado da função callback
    return nota < 7 // se true -> elemento adicionado no array 
})

console.log(notasBaixas2)

// com função arrow
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7) 
console.log(notasBaixas3)