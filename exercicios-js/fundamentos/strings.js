const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna char no indice indicado da string
console.log(escola.charAt(5)) //não retorna erro com indice errado, mas não imprime nada
/* javascript
* geralmente não retorna erro
* linguagem permissiva 
*/
console.log(escola.charCodeAt(3)) // retorna valor na tabela Unicode/ASCII do char indicado no indice
console.log(escola.indexOf('3')) // retorna o índice associado ao char indicado

console.log(escola.substring(1)) // imprime a string a partir do indíce indicado
console.log (escola.substring(0, 3)) // imprime a string a partir do indice antes da virgula, até um índice antes do indicado depois da vírgula

console.log('Escola '.concat(escola).concat("!")) // concatenação con função
console.log('Escola ' + escola + "!") // concatenação com +
console.log(escola.replace(3, 'e')) // substitui o char indicado pela letra indicada

console.log('Ana, Maria, Pedro'.split(',')) // converte em array, utilizando o separador indicado entre parênteses
