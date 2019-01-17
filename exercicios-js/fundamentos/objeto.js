const prod1 = {} // {} representa um objeto
prod1.nome = 'Celular Ultra Mega' // cria dinamicamente atributos
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: { // objeto dentro de objeto
        bla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)
