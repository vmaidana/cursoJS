function tratarErroELancar(erro) {
    // throw new Error ('...')
    // throw 10
    // throw true
    // throw 'mensagem'

    throw { 
        nome: erro.name,
        msg: erro.message,
        date: new Date
    } // lança objeto com nome do erro, uma mensagem e data do mesmo
}

function imprimirNomeGritado(obj) {
    try { // usar quando suspeitar que o bloco de comando pode dar erro
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // usar associado com o try, erro cai dentro do catch
        tratarErroELancar(e)
    } finally { // bloco que será executado, independentemente de haver erros no código
        console.log('final')
    }
}

const obj = { nome: 'Roberto' } // gera erro, name na função e nome aqui
imprimirNomeGritado(obj)
