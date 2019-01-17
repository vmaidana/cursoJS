{
    {
        {
            {
                var sera = 'Será???' // vários blocos que não sejam função não fazem diferença, a variável continua visível
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
}

teste()
console.log(local) // dá erro, variável somente visível dentro da função
// variável var fora de função é global

