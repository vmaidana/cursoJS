console.log(typeof Object) // é função tio!
console.log(typeof new Object) // instanciando um objeto, aí sim é objeto!

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente) // instanciando função, aí sim é objeto!

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) // é função tio!
console.log(typeof new Produto()) // instanciando uma classe, aí sim é objeto!