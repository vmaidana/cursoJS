console.log(soma(3, 4))
//console.log(sub(3, 4))

// function declaration
function soma(x, y) {
    return x + y
} // pode ser chamada mesmo antes de ser declarada no código

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression -- pouco usado
const multi = function multi(x, y) {
    return x * y
}
console.log(multi(3, 4))
