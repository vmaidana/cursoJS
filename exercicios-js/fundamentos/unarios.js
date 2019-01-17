let num1 = 1
let num2 = 2

num1++ //acrescenta um pós fixado
console.log(num1)
--num1 //tira um pré fixado. tem maior precedência
console.log(num1)

console.log(++num1 === num2--) // da true. comparação tem precedência sobre a operação pós fixada
