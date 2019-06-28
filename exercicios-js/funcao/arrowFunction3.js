let comparaComThis = function (param) {
    console.log(this === param) // this dentro da função é escopo global
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // a função agora fica amarrada ao objeto, não aponta mais para o global
comparaComThis()
comparaComThis(obj)

let comparaComtThisArrow = param => console.log(this === param) 
// com arrow function o this aponta para o módulo onde foi escrito
comparaComtThisArrow(global)
comparaComtThisArrow(module.exports) 

comparaComtThisArrow = comparaComtThisArrow.bind(obj)
comparaComtThisArrow(obj) // com arrow function, o this não muda mais, mesmo com bind
comparaComtThisArrow(module.exports)