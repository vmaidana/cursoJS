const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in num) {
    if (x == 5) break // break age no for mais próximo
    console.log(`${x} = ${num[x]}`)
}

for (y in num) {
    if (y == 5) continue // continue age no for mais próximo
    console.log(`${y} = ${num[y]}`)
}

externo: for (a in num) { // não usar esse tipo de estrutura, similar a goto
    for (b in num) {
        if (a == 2 && b == 3) break externo // utiliza um rótulo para fazer o break agir no for externo
        console.log(`Par = ${a},${b}`)
    }
}

console.log('Fim!')