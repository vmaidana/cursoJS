function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // se o mínimo for maior que o máximo, inverte eles em um novo array
    const valor = Math.random() * (max - min) + min // tudo igual destructuring3.js
    return Math.floor(valor)
}

console.log(rand([50, 40])) // como agora é array, só passa os valores
console.log(rand([992])) // passa apenas o valor de min
console.log(rand([, 10])) // passa apenas o valor de max
console.log(rand([])) // assume os valores padrão da função
// console.log(rand()) // da erro, tenta desestruturar algo que é undefined, sem valores