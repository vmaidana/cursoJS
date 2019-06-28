const valor = 'Global'

function minhaFuncao() { 
// quando função é declarada em js, ela carrega o contexto onde ela foi declarada
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()