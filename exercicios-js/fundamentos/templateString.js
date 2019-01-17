const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
// template, abre com cráse, tudo entre uma crase e outra é considerado
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`) // ${} interpolação

const up = texto => texto.toUpperCase()
console.log(`ei... ${up('cuidado')}!`)