// FACTORY SIMPLES
function criarPessoa() { // função factory: retorna um objeto
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())