const [a] = [10] // desestrutura o array, não é declaração de array nos primeiros colchetes!
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // desestrutura o array extraindo apenas os elementos das posições indicadas
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // ignora as posições em branco para coletar apenas o elemento anotado (nota) 
console.log(nota)