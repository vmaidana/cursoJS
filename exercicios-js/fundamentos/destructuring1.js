// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }    
}

const { nome, idade } = pessoa // retira valores dos atributos dentro das chaves do objeto após o igual
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // similar ao anterior, porém as variáveis após ':' e coloca os valores nelas
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // atributos não existem, retorna undefined
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = pessoa // procura atributos dentro da estrutura dentro do objeto
console.log(logradouro, numero, cep)

const { conta: {ag, num} } = pessoa // retorna erro, caminho até os dados não existe, dados não existem
console.log(ag, num)
