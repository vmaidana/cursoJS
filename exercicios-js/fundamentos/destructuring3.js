function rand({min = 0, max = 1000}) { // extrai do parâmetro as propriedades min e max. caso objeto não tenha, inicializa com min=0 e max=1000
    const valor = Math.random() * (max - min) + min // operação cria um número aleatório entre o valor mínimo e máximo
    return Math.floor(valor)  // arredonda valor pra baixo                      
}

const obj = { max: 50, min: 40}
console.log(rand(obj)) // utiliza constante declarada
console.log(rand({ min: 955 })) // declara valor para mínimo apenas
console.log(rand({})) // assume valores padrões da função
// console.log(rand()) // retorna erro, pois tenta desestruturar sem objeto nenhum