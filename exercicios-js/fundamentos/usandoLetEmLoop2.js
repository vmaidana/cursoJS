const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ()
funcs[8] () // imprime o índice correto, pois let é contido somente dentro do loop (bloco)
// FUNÇÃO TEM CONSCIÊNCIA DO LOCAL ONDE ELA FOI DEFINIDA