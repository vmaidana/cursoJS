// CLOSURE É O ESCOPO CRIADO QUANDO UMA FUNÇÃO É DECLARADA
// ESSE ESCOPO PERMITE A FUNÇÃO ACESSAR E MANIPULAR VARIÁVEIS EXTERNAS À FUNÇÃO

// CONTEXTO LÉXICO EM AÇÃO!

const x = 'global'

function fora() { // função normal criada
    const x = 'local' // variável(que não varia pq é constante) criada dentro da função
    function dentro() { // segunda função criada! atrelada a primeira função dentro do escopo dela 
        return x // usando o retorno para RETORNAR x, no caso tem duas const x, uma fora da função outra dentro 
    }

    return dentro // utiliza o retorno dentro, pra quando chamar a função fora, ela irá RETORNAR a função dentro
}

const minhaFuncao = fora() // É ATRIBUIDO, À VARIÁVEL RECÉM CRIADA minhaFuncao, O RETORNO DA FUNÇÃO fora, QUE É CHAMADA por meio dos()
console.log(minhaFuncao()) 
 // pra imprimir no console precisa colocar () pra chamar a função dentro, tanto a função dentro como a const "local" estão dentro da mesma função fora, por isso o console imprimiu "local" e não "global"