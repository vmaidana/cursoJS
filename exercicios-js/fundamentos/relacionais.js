console.log ('01)', '1' == 1) // compara apenas valor
console.log('02)', '1' === 1) // compara valor e tipo de dado
console.log ('03)', '3' !=3) // compara apenas valor
console.log ('04)', '3' !== 3) // compara valor e tipo de dado

console.log ('05)', 3 < 2)
console.log ('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // marco zero de data = 1/1/1970
const d2 = new Date(0)
console.log ('09)', d1 === d2)
console.log ('10)', d1 == d2) // os dois são false. compara endereço de memória com variável de referência
console.log('11)', d1.getTime() === d2.getTime()) // neste caso true, compara os números

console.log('12)', undefined == null)
console.log('13)', undefined === null)